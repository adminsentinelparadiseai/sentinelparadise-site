# Sentinel Paradise website

This is the new home of **www.sentinelparadise.ai** — a simple website made of plain files, hosted for free by GitHub Pages instead of Squarespace.

## What's in here

| File / folder | What it is |
|---|---|
| `index.html` | Home page |
| `capabilities.html` | Capabilities page (capability statement download) |
| `academy.html` | Sentinel Academy page |
| `home.html`, `new-page.html` | Tiny "forwarding" pages so old Squarespace links (`/home`, `/new-page`) still work |
| `404.html` | Friendly "page not found" page |
| `style.css` | Colors, fonts and layout for every page |
| `script.js` | Small extras: phone menu, booking calendar switch, question form |
| `images/` | All photos and graphics |
| `files/` | The Capability Statement PDF |

---

## Step 1 — Turn on GitHub Pages (about 2 minutes)

1. Open this repository on GitHub.
2. Click **Settings** (top of the page), then **Pages** (left side).
3. Under **Build and deployment → Source**, pick **Deploy from a branch**.
4. Under **Branch**, pick **main** and **/ (root)**, then click **Save**.
5. Wait 1–2 minutes and refresh. GitHub shows a link like
   `https://adminsentinelparadiseai.github.io/sentinelparadise-site/` — that's your new site, live.
   (Some images and links work best once your own domain is connected in Step 2.)

> Free GitHub accounts can only publish **public** repositories. If this repository is private, Pages won't be offered until you make it public (Settings → General → Danger Zone → Change visibility) or upgrade to GitHub Pro.

## Step 2 — Point sentinelparadise.ai at the new site

**A. Tell GitHub your domain**

1. Still in **Settings → Pages**, type `www.sentinelparadise.ai` into **Custom domain** and click **Save**.

**B. Change your domain's settings ("DNS")**

Log in to wherever your domain is managed. If you bought it through Squarespace, that's **Squarespace → Domains → sentinelparadise.ai → DNS settings**. (If it's at GoDaddy, Namecheap, Google/Squarespace Domains, Cloudflare, etc., look for "DNS" or "DNS records".)

1. **Delete** the old Squarespace records — the ones that point to Squarespace (usually 4 "A" records for `@` and a "CNAME" for `www` pointing to `ext-cust.squarespace.com`). **Leave any email records alone** (anything marked MX, TXT/SPF, DKIM, or "Google Workspace"/"Microsoft 365") so your email keeps working.
2. **Add these records:**

| Type | Host / Name | Value / Points to |
|---|---|---|
| CNAME | `www` | `adminsentinelparadiseai.github.io` |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

3. Save. Changes usually take 15 minutes to a few hours (rarely up to 48 hours).

**C. Turn on the padlock (https)**

Back in GitHub **Settings → Pages**, once the domain check shows a green tick, tick **Enforce HTTPS**. (If it's greyed out, wait an hour and check again.)

## Step 3 — Cancel Squarespace (only after the new site is working)

1. Visit `https://www.sentinelparadise.ai` and confirm you see the new design (try on your phone too).
2. **Keep the domain.** If your domain is registered through Squarespace, cancel only the **website plan**, not the domain — or transfer the domain out first. Your domain renewal is separate from the website subscription.
3. Your Cal.com booking calendar and email are not affected — they don't live on Squarespace.

---

## Making small changes later

You can edit text right on GitHub — no software needed:

1. Open the file (for example `index.html`), click the ✏️ pencil icon.
2. Change the words between the tags (for example `<p>`…`</p>`). Don't change the parts in `< >` brackets unless you know what they do.
3. Click **Commit changes**. The live site updates in about a minute.

To replace a photo: open the `images` folder → **Add file → Upload files** → upload a new picture **with exactly the same file name** → **Commit changes**.

## Good to know

- **Logo:** your Sentinel Paradise badge (`images/logo.png`) is used in the header and as the browser-tab icon. The original file is small (80×80), so if you have a larger version, upload it with the same name for a sharper look.
- **No personal names:** the site is branded only as "Sentinel Paradise". Your name was removed from the sample audit report, the myPECB screenshot and the Capability Statement PDF, and the PECB certificate picture was replaced with a text badge.
- **Booking calendar link:** your Cal.com address still contains your name (`cal.com/desirae-moore-…`), and the calendar shows your Cal.com display name. To change that, in Cal.com go to **Settings → Profile** and change the username and name (for example to `sentinelparadise`), then update the two places that use the link: `index.html` and `script.js` (search for `cal.com/`).
- **"Questions? Ask us!" form:** Squarespace forms only work on Squarespace. The new form opens the visitor's email app with their question addressed to **ops@sentinelparadise.ai**. If you'd rather receive submissions without the visitor's email app (e.g. via a free Formspree account), that's a small change.
- **Booking calendar:** still your live Cal.com calendar (15-minute and 30-minute options), unchanged.
- **Shop/cart:** the old site had an empty Squarespace cart icon; it was left out.
