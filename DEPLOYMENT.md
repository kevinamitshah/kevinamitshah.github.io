# Deployment

## How it works

- **Source of truth:** the `main` branch of this repo (`kevinamitshah/kevinamitshah.github.io`).
- **Pipeline:** `.github/workflows/deploy.yml` runs on every push to `main`. It uses
  `withastro/action` to install + `astro build`, then `actions/deploy-pages` to publish `dist/`.
- **Pages source:** set to **GitHub Actions** (not the classic branch deploy). This was
  configured via the API; you can confirm it under **Settings → Pages → Build and deployment → Source**.
- **Old site:** the previous hand-rolled HTML site is preserved on the **`old-site`** branch.

While no custom domain is attached, the live site is:

> **https://kevinamitshah.github.io/**

To watch a deploy: **Actions** tab, or `gh run watch`.

---

## Custom domain: kevinamitshah.com

The domain is registered at **Cloudflare**. Two sides need to agree — GitHub (this repo) and
Cloudflare (DNS). Do them in this order.

### 1. Add DNS records at Cloudflare

Recommended (Cloudflare flattens a CNAME at the apex automatically):

| Type  | Name              | Target / Value             | Proxy status         |
|-------|-------------------|----------------------------|----------------------|
| CNAME | `kevinamitshah.com` (`@`) | `kevinamitshah.github.io` | **DNS only** (grey)  |
| CNAME | `www`             | `kevinamitshah.github.io`  | **DNS only** (grey)  |

Use **DNS only / grey cloud** so GitHub can issue and serve its own Let's Encrypt certificate.
(If you later proxy through Cloudflare — orange cloud — set SSL/TLS mode to **Full** to avoid a
redirect loop.)

If you'd rather use apex A/AAAA records instead of the flattened CNAME:

```
A     @   185.199.108.153
A     @   185.199.109.153
A     @   185.199.110.153
A     @   185.199.111.153
AAAA  @   2606:50c0:8000::153
AAAA  @   2606:50c0:8001::153
AAAA  @   2606:50c0:8002::153
AAAA  @   2606:50c0:8003::153
CNAME www kevinamitshah.github.io
```

### 2. Attach the domain on GitHub (one step)

Either:

- **Via a file** — create `public/CNAME` containing exactly `kevinamitshah.com`, commit, push.
  The build copies it into `dist/` and GitHub picks up the custom domain automatically.

  ```bash
  echo "kevinamitshah.com" > public/CNAME
  git add public/CNAME && git commit -m "Attach custom domain" && git push
  ```

- **Or via the UI** — Settings → Pages → Custom domain → `kevinamitshah.com` → Save.

Then wait for the **DNS check** to pass and tick **Enforce HTTPS**.

> ⚠️ **Why this isn't done yet:** the moment a custom domain is attached, `kevinamitshah.github.io`
> starts redirecting to `kevinamitshah.com`. Until the Cloudflare DNS records above resolve, that
> means the site isn't viewable at *either* URL. So this step is intentionally left for when you're
> ready to point DNS — do step 1 and step 2 together. Everything else (build, deploy, workflow) is
> already live and working at the github.io URL.

### 3. Update `astro.config.mjs` if needed

`site` is already set to `https://kevinamitshah.com` (used for canonical URLs / sitemap). No change
needed when the domain goes live.
