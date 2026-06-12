#!/bin/bash
# Requires Node.js and md-to-pdf
# npm install -g md-to-pdf

md-to-pdf README.md --stylesheet cv-print.css --launch-options '{"args": ["--no-sandbox"]}' && mv README.pdf Jon_Vallet_CV.pdf
