# Mistyislet China Deployment

This is the recommended setup for `mistyislet.cn` on Alibaba Cloud.

## Recommended Architecture

- Source: GitHub directly, or Codeup as a China-side mirror.
- CI/CD: Alibaba Cloud Yunxiao Flow.
- Hosting: OSS static website hosting.
- Edge: Alibaba Cloud CDN in front of OSS after ICP/domain setup.

Codeup is optional. Use Codeup when you want a domestic mirror and tighter Alibaba Cloud triggers. If GitHub access works in Flow, using GitHub directly is simpler.

## Flow Setup

1. Create a new Flow pipeline.
2. Choose `Node.js` on the left.
3. Choose `Node.js · 测试、构建`.
4. Add the code source:
   - Preferred first try: GitHub repository `Sikyy/Mistyislet-Web`, branch `main`.
   - Alternative: import/mirror the repository into Codeup, then choose Codeup as the source.
5. In the Node.js build task, use Node from `.nvmrc`.
6. Use this build command:

```bash
npm ci --registry=https://registry.npmmirror.com
npm run build:cn
```

7. Build artifact/output path:

```text
dist
```

8. Upload `dist` to the OSS bucket root:
   - If your Flow organization has an OSS upload/deploy step, use that.
   - If it does not, keep Flow responsible for building and uploading the artifact first, then use OSS/OOS or an `ossutil` script as the deployment step.

## OSS SPA Settings

In the OSS bucket:

- Static website hosting: enabled.
- Default homepage: `index.html`.
- Subdirectory homepage: disabled.
- Default 404 page: `index.html`.
- Error document status code: `200`.

These settings keep direct visits like `/pricing` or `/product/misty-reader` working after refresh.

## Domain Notes

- Mainland China OSS/CDN custom domains need ICP filing.
- The site already supports the footer filing display through `npm run build:cn`.
- The current ICP footer text is configured as:

```text
浙ICP备2026028683号
```
