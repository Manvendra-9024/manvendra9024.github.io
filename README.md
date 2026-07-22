# Manvendra Singh — Portfolio Website

A multi-page personal portfolio site for Manvendra Singh, Data Analyst.

## Folder Structure

```
Portfolio/
│
├── index.html          # Home — hero intro, quick stats, CTA
├── about.html           # About, Experience, Academic, Skills (all in one page with anchors)
├── projects.html         # All 21 projects, grouped by category
├── contact.html          # Contact details + front-end contact form
│
├── css/
│   └── style.css        # Shared stylesheet for all pages
│
├── js/
│   └── script.js        # Shared behavior: nav, animations, skill bars, contact form
│
├── images/
│   └── profile.png      # Profile photo (used in nav + hero avatar)
│
├── assets/
│   └── MS_Resume_ManvendraSingh.pdf   # Downloadable resume (linked from the hero button)
│
└── README.md
```

## How the pages connect

All four pages share the same navbar and load the same `css/style.css` and `js/script.js`, so styling and behavior (mobile menu, scroll-reveal animations, active-link highlighting) stay consistent everywhere.

- **Experience, Academic, and Skills** live on `about.html` as sections (`#experience`, `#academic`, `#skills`) rather than separate files, since your original single-page site treated them as sub-sections of "About." The nav links to `about.html#experience` etc. from every page.
- **Projects** are grouped into three categories on `projects.html`: Data Analytics & BI Dashboards, Automation & Machine Learning, and Software & Web Development.

## Running it locally

No build step needed — it's plain HTML/CSS/JS. Two options:

1. **Just open it:** double-click `index.html` to open it in a browser. (Note: on some browsers, `fetch`-based features can be blocked when opening files directly via `file://` — this site doesn't use any, so it should work fine.)
2. **Local server (recommended):** from inside the `Portfolio/` folder, run:
   ```
   python3 -m http.server 8000
   ```
   then open `http://localhost:8000` in your browser. This behaves closer to how it will work once hosted.

## Deploying it

Any static hosting works, since there's no backend:
- **GitHub Pages:** push this folder to a repo, enable Pages in repo settings, pointed at the root.
- **Netlify / Vercel:** drag-and-drop the `Portfolio` folder onto their dashboard, or connect the repo.

## Things to double-check before publishing

- **Resume file:** `assets/MS_Resume_ManvendraSingh.pdf` is your actual uploaded resume PDF — if you update your resume later, replace this file (keep the same filename, or update the `href` in `index.html`'s hero button).
- **Profile photo:** `images/profile.png` is the photo you uploaded, used as both the nav icon and the hero avatar. Swap the file (same name) to update it everywhere at once.
- **Contact form:** `contact.html`'s form currently opens the visitor's email client with the message pre-filled (via `mailto:`) — it does not submit silently in the background. If you want real in-page submission without opening an email client, wire it to a service like [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com) (both have free tiers) by changing the form's `action` and removing the JS `submit` handler in `js/script.js`.
- **21 projects:** most of these have a one-line description written from the title alone since only 4 had detail in your resume — consider adding real specifics (what data, what tool, what outcome) for each before sending this to recruiters, or trimming to your strongest 6–8 with more depth.
- **GitHub project links:** three of the "View details" links point to GitHub *issues* pages rather than repositories — worth double-checking those are the links you intend to share, since issue pages read differently to a visitor than a project repo would.
