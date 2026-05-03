# Frosty Delights

A small landing page for a fictional ice cream shop, built with [Next.js](https://nextjs.org). The point of this repo is to teach the full deployment workflow — every step, from a fresh Mac to a website served to the public over HTTPS (HyperText Transfer Protocol Secure). This README covers getting it running on your laptop. The deployment part comes after.

If you've never opened a terminal before, that's fine. Start at the top and follow along.

---

## What you'll need

- A Mac.
- An internet connection.
- About 20 minutes the first time. Way less every time after.

That's it. We'll install everything else as we go.

---

## Step 1 — Open Terminal

The Terminal is an app that ships with macOS. It lets you type commands instead of clicking buttons. We'll use it for everything in this guide.

To open it:

1. Press `Cmd + Space` to open Spotlight (the system-wide search bar).
2. Type `Terminal`.
3. Press `Enter`.

A small window opens with a blinking cursor. That's the Terminal. When this guide says "run X", it means "type X into that window and press Enter".

---

## Step 2 — Install Homebrew

Homebrew is a *package manager*. A package manager is a program that installs and updates other programs for you. Instead of going to a website, downloading an installer, and double-clicking it, you type one command and Homebrew handles the rest.

Run this command (you can copy and paste — `Cmd + V` works in Terminal):

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

It will ask for your Mac password. Type it (you won't see any characters appear — that's normal) and press `Enter`. The install takes a few minutes.

When it finishes, it will print **"Next steps"** with two `eval` commands that look something like this:

```bash
echo >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)" >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

Copy and run those exact lines from your own terminal output — they make Homebrew available in future Terminal sessions. (Don't copy mine; the path can differ on Intel Macs.)

Verify Homebrew works:

```bash
brew --version
```

You should see something like `Homebrew 4.x.x`. If you do, move on.

---

## Step 3 — Install Git

Git is a version control system. It tracks every change to a project's files and lets multiple people collaborate without overwriting each other. GitHub is a website that hosts Git projects (the "hub" part). They are not the same thing — Git is the tool, GitHub is one place that stores Git projects.

Install it:

```bash
brew install git
```

Verify:

```bash
git --version
```

---

## Step 4 — Install Node.js

Next.js (the framework this project is built with) runs on Node.js. Node.js is a runtime that lets JavaScript run outside a browser. `npm` (Node Package Manager) is bundled with Node.js — it installs JavaScript libraries the same way Homebrew installs Mac programs.

Install it:

```bash
brew install node
```

Verify both at once:

```bash
node --version
npm --version
```

You should see version numbers (something like `v22.x.x` for Node and `10.x.x` for npm).

---

## Step 5 — Tell Git who you are

Git stamps every change with your name and email. Set those once and you're done forever:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Use your real name and the email tied to your GitHub account.

---

## Step 6 — Get the code

"Cloning" a repo means downloading a copy of the project, including its full history of changes, onto your machine.

First, pick a folder for your projects. The Desktop works fine while you're learning:

```bash
cd ~/Desktop
```

`cd` means "change directory" (move into a folder). `~` is shorthand for your home folder.

Now clone:

```bash
git clone https://github.com/Nickatak/deployment_learning.git
```

That creates a new folder called `deployment_learning`. Move into it:

```bash
cd deployment_learning
```

Sanity check — list the files:

```bash
ls
```

You should see things like `package.json`, `src`, `public`, `README.md`.

---

## Step 7 — Install the project's dependencies

Almost every JavaScript project relies on libraries written by other people. Those libraries are listed in `package.json`. `npm install` reads that list and downloads everything into a folder called `node_modules`.

```bash
npm install
```

It takes a minute or two the first time. You may see a few warnings — those are usually fine. If you see actual `ERR!` lines, copy the error and ask Nick.

When it's done, you'll have a `node_modules` folder. Don't worry about it — it's managed for you.

---

## Step 8 — Run the development server

This is the moment of truth:

```bash
npm run dev
```

After a second or two you'll see something like:

```
- Local:        http://localhost:3000
```

Open a browser and go to **http://localhost:3000**. You should see Frosty Delights.

`localhost` means "this very computer". Port `3000` is just a number that identifies which program on your machine is responding — Next.js picked it. Nobody else on the internet can see this address; it only exists on your laptop.

While the dev server is running, every time you save a change to a file, the page auto-updates in the browser. Try it — open `src/components/Hero.tsx` in any text editor, change "Frosty Delights" to anything else, save, and watch the browser.

---

## Step 9 — Stop the server

When you're done, go back to the Terminal window where the server is running and press `Ctrl + C`. The server stops and you get your prompt back.

To start it again later, `cd` back into the project folder and run `npm run dev`.

---

## Project structure (quick tour)

```
deployment_learning/
├── src/
│   ├── app/
│   │   ├── layout.tsx         the page shell (fonts, <html>, <body>)
│   │   ├── page.tsx           the home page — pulls in each section
│   │   └── globals.css        site-wide CSS, theme colors
│   └── components/            one file per section of the page
│       ├── Nav.tsx
│       ├── Hero.tsx
│       ├── PressLogos.tsx
│       ├── Featured.tsx
│       ├── MeetOwner.tsx
│       ├── Gallery.tsx
│       ├── LocationHours.tsx
│       └── Footer.tsx
├── public/
│   └── images/                all images served by the site
├── design/
│   └── figma_export.png       the original Figma design, for reference
└── package.json               project metadata + dependency list
```

To change the look of, say, the Meet Amy section, you'd edit `src/components/MeetOwner.tsx`. The dev server will hot-reload your changes.

---

## Production build

`npm run dev` is a development mode — fast feedback, big debug output, slow page loads. It's not what you'd serve to real visitors.

For real deployment we use a *production build*: an optimized, minified version of the site.

```bash
npm run build
npm start
```

`npm run build` takes the source code and produces an optimized output. `npm start` then serves that optimized version, also on http://localhost:3000.

You'll do this on the server you deploy to, not on your laptop. We'll get there.

---

## When things go wrong

**`command not found: brew` (or `git`, or `node`)**
The terminal can't find the program. Usually means the install hasn't been added to your `PATH`. Close the Terminal and open a new one — most install scripts only take effect in new sessions. If that doesn't work, re-read the "Next steps" output from Homebrew and run those `eval` lines.

**`Port 3000 is already in use`**
Something else is already using that port — most often, a previous `npm run dev` you forgot to stop. Either find that Terminal window and `Ctrl + C` it, or run `npm run dev -- -p 3001` to use a different port.

**`npm install` shows red `ERR!` lines**
Copy the full error and ask Nick. Most "npm install" issues are caused by the wrong Node version or a network blip.

**Page won't load at http://localhost:3000**
Check that `npm run dev` is still running and shows "Ready". If it crashed, the Terminal will say so — read the error and ask if you're stuck.
