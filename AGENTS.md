# CV repo

Single `README.md` (markdown) is the source of truth for the CV content.  
`index.html` is tracked in git and served via GitHub Pages.  
`Jon_Vallet_CV.pdf` and `Jon_Vallet.docx` are **not** tracked — the workflow uploads them as release assets.

## Convert

| Output  | Command                                                      | Dependency                                  |
|---------|--------------------------------------------------------------|---------------------------------------------|
| PDF     | `convert-to-pdf.sh` or `md-to-pdf README.md --stylesheet cv-print.css && mv README.pdf Jon_Vallet_CV.pdf` | `npm install -g md-to-pdf`   |
| DOCX    | `convert-to-doc.sh` or `pandoc -f markdown -t docx README.md -o Jon_Vallet.docx` | `pandoc`                        |
| HTML    | `node build-html.js`                                        | `npm install -g marked`                        |

## GitHub Actions

Workflow at `.github/workflows/build-cv.yml` auto-regenerates PDF, DOCX, and HTML on push to `master` touching `README.md`, `cv-print.css`, or `build-html.js`. It commits `index.html` and uploads `Jon_Vallet_CV.pdf` / `Jon_Vallet.docx` as assets to the `cv-latest` release.  
To serve via GitHub Pages, enable **Settings → Pages → Deploy from branch `master`, root `/`**.
