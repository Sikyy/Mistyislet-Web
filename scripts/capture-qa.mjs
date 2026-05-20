import { writeFile } from "node:fs/promises";
import { join } from "node:path";

const chromeBase = "http://127.0.0.1:9222";
const siteUrl = "http://127.0.0.1:5173/";
const outDir = "/Users/siky/code/web-misty/tmp/qa";

async function openTarget(url) {
  const response = await fetch(`${chromeBase}/json/new?${encodeURIComponent(url)}`, {
    method: "PUT",
  });

  if (!response.ok) {
    throw new Error(`Failed to open target: ${response.status}`);
  }

  return response.json();
}

function connect(wsUrl) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(wsUrl);
    const pending = new Map();
    let seq = 0;

    ws.addEventListener("open", () => {
      resolve({
        send(method, params = {}) {
          const id = ++seq;
          ws.send(JSON.stringify({ id, method, params }));
          return new Promise((res, rej) => pending.set(id, { res, rej, method }));
        },
        close() {
          ws.close();
        },
      });
    });

    ws.addEventListener("message", (event) => {
      const message = JSON.parse(event.data);

      if (!message.id || !pending.has(message.id)) {
        return;
      }

      const item = pending.get(message.id);
      pending.delete(message.id);

      if (message.error) {
        item.rej(new Error(`${item.method}: ${message.error.message}`));
        return;
      }

      item.res(message.result);
    });

    ws.addEventListener("error", reject);
  });
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function inspectViewport(name, width, height) {
  const target = await openTarget(siteUrl);
  const cdp = await connect(target.webSocketDebuggerUrl);

  await cdp.send("Page.enable");
  await cdp.send("Runtime.enable");
  await cdp.send("Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor: 1,
    mobile: width < 700,
  });
  await cdp.send("Page.navigate", { url: siteUrl });
  await wait(900);

  const screenshot = await cdp.send("Page.captureScreenshot", {
    format: "png",
    captureBeyondViewport: true,
  });
  const file = join(outDir, `${name}.png`);
  await writeFile(file, Buffer.from(screenshot.data, "base64"));

  const result = await cdp.send("Runtime.evaluate", {
    returnByValue: true,
    expression: `(() => {
      const bodyText = document.body.innerText;
      const forbidden = ['Message', 'Arthur', 'Try It Now', 'Contact Sales', 'Performance coach'];
      const matches = forbidden.filter((term) => bodyText.includes(term));
      const nav = Array.from(document.querySelectorAll('header nav a'))
        .map((a) => a.textContent.trim())
        .filter(Boolean);
      const headings = Array.from(document.querySelectorAll('h1,h2,h3'))
        .map((el) => el.textContent.trim())
        .slice(0, 24);
      const viewportWidth = window.innerWidth;
      const checked = Array.from(document.querySelectorAll('h1,h2,h3,p,a,button'));
      const overflow = checked
        .map((el) => {
          const rect = el.getBoundingClientRect();
          return {
            text: el.textContent.trim().slice(0, 70),
            left: rect.left,
            right: rect.right,
            width: rect.width,
            height: rect.height
          };
        })
        .filter((item) => item.width > 0 && (item.left < -1 || item.right > viewportWidth + 1));
      return {
        matches,
        nav,
        headings,
        overflowCount: overflow.length,
        overflow: overflow.slice(0, 8),
        pageHeight: document.documentElement.scrollHeight
      };
    })()`,
  });

  cdp.close();
  return {
    name,
    width,
    height,
    file,
    ...result.result.value,
  };
}

const results = [];
results.push(await inspectViewport("desktop-1200", 1200, 900));
results.push(await inspectViewport("tablet-900", 900, 900));
results.push(await inspectViewport("mobile-390", 390, 844));

console.log(JSON.stringify(results, null, 2));
