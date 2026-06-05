const fs = require("fs");
const { execSync } = require("child_process");

const md = fs.readFileSync("README.md", "utf-8");
const bodyHtml = execSync("npx -y marked --gfm", {
  input: md,
  encoding: "utf-8",
}).trim();

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Jon Vallet - CV</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      background: #eef0f2;
    }
    .download-bar {
      position: sticky; top: 0; z-index: 10;
      background: #1e293b; color: #fff;
      padding: 12px 24px;
      display: flex; gap: 10px; align-items: center; justify-content: center;
      flex-wrap: wrap;
    }
    .download-bar .label {
      font-weight: 600; font-size: 15px;
      margin-right: auto;
    }
    .download-bar a {
      color: #fff; text-decoration: none;
      padding: 8px 20px;
      border: 1px solid rgba(255,255,255,0.3);
      border-radius: 6px;
      font-size: 14px;
      transition: background 0.15s;
    }
    .download-bar a:hover { background: rgba(255,255,255,0.12); }
    .cv-content {
      max-width: 820px; margin: 0 auto; padding: 40px 32px;
      background: #fff;
      min-height: 100vh;
    }
    h3 {
      font-size: 20px; color: #1e293b;
      border-bottom: 2px solid #1e293b;
      padding-bottom: 6px;
      margin: 36px 0 16px;
    }
    h3:first-of-type { margin-top: 0; }
    h4 { font-size: 17px; margin: 24px 0 4px; color: #334155; }
    p { margin: 8px 0; }
    ul, ol { margin: 6px 0 6px 22px; }
    li { margin: 3px 0; }
    strong { color: #1e293b; }
    a { color: #2563eb; }
    hr { border: none; border-top: 1px solid #e2e8f0; margin: 16px 0; }
    @media (max-width: 640px) {
      .download-bar { flex-direction: column; padding: 10px; }
      .download-bar .label { margin-right: 0; }
      .download-bar a { width: 100%; text-align: center; }
      .cv-content { padding: 24px 16px; }
    }
  </style>
</head>
<body>
  <div class="download-bar">
    <span class="label">Jon Vallet - CV</span>
    <a href="Jon_Vallet_CV.pdf">Download PDF</a>
    <a href="Jon_Vallet.docx">Download DOCX</a>
  </div>
  <div class="cv-content">
${bodyHtml}
  </div>
</body>
</html>`;

fs.writeFileSync("index.html", html);
