# Linfeng Zhao Research Portfolio

Personal research website at the intersection of quantitative finance and large language models, published at https://lz3256.github.io/.

The site includes an introduction, ten research overviews, an applied research experience summary, links to earlier projects, topic filters, a light/dark theme, and responsive layouts. Project descriptions distinguish recorded findings from prototype or exploratory evidence.

## Edit and preview

Edit `index.html` for the introduction and project index. Project detail pages are in `research/`; CSS and JavaScript are in `assets/`. The site uses static files and needs no package installation or build service.

```bash
python3 -m http.server 8765 --bind 127.0.0.1
```

Open http://127.0.0.1:8765/ to preview. GitHub Pages publishes the root of the `main` branch; `.nojekyll` preserves the static layout.

## Credits

Website prepared with OpenAI Codex. The visual direction references the simple profile-and-research layout at https://you2xi2.github.io/; implementation and project content were written independently. No biography, photograph, resume, or research assets were copied from that site. Existing project covers were generated with Codex's built-in image tool. Dataset and research attributions are maintained in the linked project repositories.

## October 13, 2026 update

Updated the IV variance/calibration and TAQ transfer studies, and added the Retail Order Flow measurement study. The same static GitHub Pages layout is retained.
