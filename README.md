# MDEN — Professional Training Website (Landing)

This repository contains a production-ready static landing site for MDEN — a training platform for AI, Machine Learning, Data Science, and Web Design.

Branch
- site-mden-landing — development branch containing the full landing site (index.html, styles.css, script.js, logo.svg, README.md).

Files added in this branch
- index.html — main landing page with sections: Home, Courses, Instructors, Pricing, Testimonials, FAQ, Contact, Enroll.
- styles.css — polished theme-based styles with three palettes and responsive layout.
- script.js — small interactive scripts: mobile nav, theme/palette switcher, demo contact form, accessibility helpers.
- logo.svg — scalable SVG logo representing AI (neural motif), Data (bar chart), and Web (code bracket).
- README.md — this file.

What I did
- Created the site files and pushed them to branch site-mden-landing.
- The branch commit: d08a5d498d6164cde0e24d8a205ce2c100faab21 (see repo commit list for details).
- Prepared a PR-ready branch (site-mden-landing) so you can review changes before merging into main.

How to preview locally
1. Clone the repo (or fetch the branch):
   git clone git@github.com:Elnoumery/site-mden.git
   cd site-mden
   git checkout site-mden-landing

2. Open index.html in your browser or run a local server:
   python -m http.server 8000
   # then open http://localhost:8000

Quick overview of features
- Responsive landing page with clear information architecture: Courses, Instructors, Pricing, Testimonials, FAQ, Contact.
- Three color palettes (Default / Ocean / Sunset) toggleable by visitors.
- Accessible focus states, keyboard nav support, and semantic markup.
- SEO basics: meta description, Open Graph tags, JSON-LD Organization schema.
- SVG logo included and used as favicon.
- Demo contact form (client-side): ready to be wired to Formspree, Netlify Forms, or a serverless endpoint.

Contact form integration options
- Formspree: set form action to https://formspree.io/f/<your-id> and method POST. No server required.
- Netlify Forms: deploy to Netlify and add data-netlify="true" to the <form> element and include <input type="hidden" name="form-name" value="contact">.
- Serverless: implement a serverless function (AWS Lambda, Netlify Functions, Vercel) that accepts POST and forwards to email or stores submissions.

Notes for production
- Replace placeholder instructor images (currently using via.placeholder.com) with real photos under /assets or /images.
- Update Organization URL and logo URL in the JSON-LD in `index.html` (currently uses example.com).
- Add analytics, privacy/consent banner, and any required legal pages (Terms / Privacy).

How to add/replace this README in the repo (commands)
1. Checkout the branch:
   git checkout site-mden-landing

2. Save this README content into `README.md` at the repo root.

3. Stage, commit, and push:
   git add README.md
   git commit -m "Add comprehensive README for MDEN site"
   git push origin site-mden-landing

Open a PR
- Visit: https://github.com/Elnoumery/site-mden/compare/main...site-mden-landing?expand=1
- Or use the CLI to create a PR against `main` with the title: "Add MDEN landing site — initial commit"

Next recommended steps
1. Review the branch content and open the PR to `main`.
2. Replace placeholder assets and update copy.
3. Wire the contact form to a provider.
4. Merge to main and enable GitHub Pages (or deploy to Netlify/Vercel).