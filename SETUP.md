# Setup & Deployment Guide

A step-by-step guide to get your website live on Vercel.

---

## Step 1 — Install Node.js

Node.js lets you run the website locally and install packages.

1. Go to **https://nodejs.org**
2. Click the button that says **"LTS"** (the green/recommended one)
3. Download the installer for macOS and run it — click through all the defaults
4. When it finishes, open your **Terminal** app (search "Terminal" in Spotlight)
5. Type this and press Enter to confirm it worked:
   ```
   node --version
   ```
   You should see something like `v22.x.x`

---

## Step 2 — Install project dependencies

In Terminal, paste each line one at a time and press Enter:

```bash
cd /Users/ludmila/yoga-site
npm install
```

This downloads all the code libraries the site needs. It may take a minute.

---

## Step 3 — Preview the site on your computer

While still in Terminal:

```bash
npm run dev
```

Then open your browser and go to: **http://localhost:3000**

You should see your website! Press `Ctrl+C` in Terminal to stop it.

---

## Step 4 — Push to GitHub

GitHub stores your code and connects to Vercel for deployment.

1. Go to **https://github.com** and log in
2. Click the **+** button (top right) → **New repository**
3. Name it `yoga-site`
4. Leave it **Public** (or Private — your choice)
5. Click **Create repository** — do NOT add a README
6. GitHub will show you some commands. Copy and run them in Terminal:

```bash
cd /Users/ludmila/yoga-site
git init
git add .
git commit -m "Initial website build"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/yoga-site.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

---

## Step 5 — Deploy to Vercel

1. Go to **https://vercel.com** and log in
2. Click **"Add New Project"**
3. You'll see your GitHub repos listed — find `yoga-site` and click **Import**
4. On the next screen, leave everything at defaults
5. Click **Deploy**
6. Vercel will build and deploy your site — takes about 1–2 minutes
7. You'll get a live URL like `yoga-site.vercel.app` 🎉

Every time you make changes and push to GitHub, Vercel will automatically redeploy.

---

## Step 6 — Connect a custom domain (optional)

If you want `ludmilayegorova.com` instead of `yoga-site.vercel.app`:

1. In your Vercel project, go to **Settings → Domains**
2. Type your domain name and click **Add**
3. Follow the instructions to update your DNS settings (Vercel walks you through it)

---

## Quick reference

| Command | What it does |
|---|---|
| `npm run dev` | Start local preview at localhost:3000 |
| `npm run build` | Build the site for production |
| `git add . && git commit -m "message" && git push` | Save + upload changes to GitHub |
