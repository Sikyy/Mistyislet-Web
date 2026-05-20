# Mistyislet Deployment

Last verified: 2026-05-20

Current status: both automatic deployment flows are working.

- Global site: `mistyislet.com` and `www.mistyislet.com`
- China site: `mistyislet.cn` and `www.mistyislet.cn`

## Overview

This repository uses one `main` branch for both sites.

When changes are pushed to `origin/main`:

1. Cloudflare Pages builds and deploys the global site.
2. GitHub Actions builds the China site and uploads the static build output to Alibaba Cloud ECS by SSH/rsync.

The China deploy intentionally builds on GitHub Actions instead of on the Alibaba Cloud server. This avoids the server needing to pull from GitHub or install Node.js.

## Global Site

Production domains:

- `https://mistyislet.com`
- `https://www.mistyislet.com`

Hosting:

- Cloudflare Pages

Expected Cloudflare Pages settings:

- Repository: `Sikyy/Mistyislet-Web`
- Branch: `main`
- Build command: `npm run build:global`
- Output directory: `dist`

Global build command:

```bash
npm run build:global
```

The global site uses the normal multi-language build.

## China Site

Production domains:

- `https://mistyislet.cn`
- `https://www.mistyislet.cn`

Hosting:

- Alibaba Cloud ECS
- Public IP: `8.154.20.100`
- Nginx web root: `/var/www/mistyislet.cn`
- HTTPS: Certbot + Nginx

GitHub Actions workflow:

- File: `.github/workflows/deploy-cn.yml`
- Trigger: push to `main`
- Manual trigger: enabled through `workflow_dispatch`

China build command:

```bash
npm run build:cn
```

The China build sets:

- Default locale: Chinese
- Site region: China
- ICP footer text: `浙ICP备2026028683号`

## GitHub Secrets

The China deployment workflow depends on these repository secrets:

```text
ALIYUN_HOST=8.154.20.100
ALIYUN_PORT=22
ALIYUN_USER=root
ALIYUN_SSH_KEY=<private deploy key>
```

Do not commit the private key to the repository.

The local deploy key currently used for setup was generated as:

```bash
ssh-keygen -t ed25519 -C "github-actions-mistyislet-cn" -f ~/.ssh/mistyislet_cn_deploy -N ""
```

The matching public key must exist in:

```text
/root/.ssh/authorized_keys
```

on the Alibaba Cloud ECS instance.

## Nginx

The ECS Nginx config should serve the China static build from `/var/www/mistyislet.cn` and route SPA subpages back to `index.html`.

Expected config path:

```text
/etc/nginx/conf.d/mistyislet.cn.conf
```

Expected config:

```nginx
server {
    listen 80;
    server_name mistyislet.cn www.mistyislet.cn;

    root /var/www/mistyislet.cn;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg|webp|woff|woff2)$ {
        expires 7d;
        add_header Cache-Control "public, max-age=604800, immutable";
        try_files $uri =404;
    }
}
```

Certbot may add HTTPS server blocks and redirect rules to this config.

Check and reload Nginx:

```bash
nginx -t
systemctl reload nginx
```

## DNS

China DNS records:

```text
mistyislet.cn      A    8.154.20.100
www.mistyislet.cn  A    8.154.20.100
```

ECS security group inbound rules:

```text
22   TCP   your own IP only when possible
80   TCP   0.0.0.0/0
443  TCP   0.0.0.0/0
```

Outbound rules can remain the Alibaba Cloud default.

## Manual Operations

Run the China deployment manually:

```bash
gh workflow run deploy-cn.yml --ref main
gh run watch
```

View a specific run:

```bash
gh run view <run-id> --log
```

Test the Alibaba Cloud server:

```bash
curl -I https://mistyislet.cn
curl -I https://www.mistyislet.cn
```

SSH to the server:

```bash
ssh -i ~/.ssh/mistyislet_cn_deploy root@8.154.20.100
```

Test Certbot renewal:

```bash
certbot renew --dry-run
```

## Normal Release Process

Use the usual Git flow:

```bash
git add .
git commit -m "<message>"
git push origin main
```

After the push:

- Cloudflare Pages updates `mistyislet.com`.
- GitHub Actions updates `mistyislet.cn`.

As of 2026-05-20, this automatic build and deployment flow has been verified successfully for both sites.

## Notes

- Alibaba Cloud Yunxiao Flow / Codeup was explored, but the active China deployment path is GitHub Actions to ECS over SSH.
- The ECS server does not need Git or Node.js for the current static-site deployment.
- If the ECS IP, SSH user, SSH key, or web root changes, update both GitHub Secrets and this document.
