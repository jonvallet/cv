# CV repo

Single `README.md` (markdown) is the source of truth for the CV content.  
Generated outputs (`Jon_Vallet_CV.pdf`, `Jon_Vallet.docx`, `index.html`) are tracked in git — regenerate after editing `README.md`.

## Convert

| Output  | Command                                                      | Dependency                                  |
|---------|--------------------------------------------------------------|---------------------------------------------|
| PDF     | `convert-to-pdf.sh` or `md-to-pdf README.md --stylesheet cv-print.css -o Jon_Vallet_CV.pdf` | `npm install -g md-to-pdf`   |
| DOCX    | `convert-to-doc.sh` or `pandoc -f markdown -t docx README.md -o Jon_Vallet.docx` | `pandoc`                        |
| HTML    | `node build-html.js`                                        | `npm install -g marked`                        |

## GitHub Actions

Workflow at `.github/workflows/build-cv.yml` auto-regenerates PDF, DOCX, and HTML on push to `main` touching `README.md`, `cv-print.css`, or `build-html.js`. To serve via GitHub Pages, enable **Settings → Pages → Deploy from branch `main`, root `/`**.
