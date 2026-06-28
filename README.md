# The Process Drifts

**The Process Drifts** is a one-page website about entropy in quality engineering.

It explains how processes naturally drift into disorder unless quality systems notice, measure, and correct them. The site uses a minimal terminal-inspired design, plain HTML, CSS, and JavaScript.

## Live Concept

Every process drifts. Quality is how we notice.

The site explores:

- Entropy as disorder, drift, uncertainty, and decay
- How entropy appears in quality systems
- Tool wear, gage drift, supplier variation, process variation, and outdated work instructions
- Human attention, inspection fatigue, and habituation
- Anti-entropy tools like audits, calibration, SPC, control plans, PPAP, CAR/SCAR, and 5 Whys
- A draggable entropy scale with real-world quality examples
- A quality archive log
- A hidden philosophical notes layer
- An animated micro SPC chart
- A collapse mode that visually demonstrates disorder

## Project Files

The website is intentionally simple and beginner-friendly.

```text
index.html
README.md
assets/
  signal-integrity.png
```

## How To Open Locally

1. Download or open the project folder.
2. Make sure `index.html` and the `assets` folder are in the same place.
3. Double-click `index.html`.
4. The site will open in your browser.

No backend, server, build step, or installation is required.

## How To Publish With GitHub Pages

1. Open your GitHub repository.
2. Upload these files to the top level of the repository:

```text
index.html
README.md
assets/
  signal-integrity.png
```

3. Go to **Settings**.
4. Go to **Pages**.
5. Under **Build and deployment**, choose:

```text
Source: Deploy from a branch
Branch: main
Folder: /root
```

6. Click **Save**.

GitHub will publish the website and give you a link that looks like:

```text
https://your-username.github.io/the-process-drifts/
```

## Updating The Website

To update the website later:

1. Edit `index.html`.
2. Commit the change to GitHub.
3. GitHub Pages will automatically rebuild and update the live site.

If the visual image changes, make sure the updated image stays here:

```text
assets/signal-integrity.png
```

The HTML expects that exact file path.

## Built With

- HTML
- CSS
- JavaScript

No frameworks. No backend. No unnecessary tooling.

## Note

This project is both technical and poetic by design. It treats quality engineering as a system of attention: a way to see drift before drift becomes failure.
