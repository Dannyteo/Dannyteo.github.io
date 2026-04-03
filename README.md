# Dannyteo.github.io

Personal site (GitHub Pages): profile, blog, and credentials.

## Layout

- **Top-level pages:** `index.html`, `about.html`, `contact.html`, `credentials.html`, and other section pages.
- **Nested content:** `blog/` (posts + `atom.xml`), `assets/` (images, PDFs, and media), `css/main.css`, `app.js` (optional site-wide scripts).
- **`.nojekyll`** — GitHub Pages serves this as a static site (no Jekyll build).

## Local preview

- Open `index.html` directly, or use a static server so directory URLs behave like production:

  ```bash
  python3 -m http.server 8000
  ```

  Then visit `http://127.0.0.1:8000/`.
