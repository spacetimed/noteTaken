# noteTaken

![](https://img.shields.io/github/deployments/spacetimed/notetaken/Production?label=vercel&logo=vercel) 
![](https://img.shields.io/badge/license-MIT-green) 
![](https://img.shields.io/badge/library-react-blueviolet)

A lightweight, minimalist **markdown note taker** for web browsers.

This project is meant to provide "quick note taking" with a markdown preview, offering an easy "copy to clipboard" option prior to departure.

## 📺  Demo
![](assets/preview0.png)
[View a live demo at **https://note-taken.vercel.app/**](https://note-taken.vercel.app/)

<br>

## 🗂 Architecture
* React
* SASS / SCSS
* Material UI (MUI)
* Remark (markdown parsing)
* Vercel hosted
* A custom written `CodeEditor` component
* Responsive rescaling, adapts to viewport

<br>

## ⚠️  Planned fixes
* [!] Avoid using `dangerousSetInnerHtml`; find a better alternative
* [!] **Bug fix:** Cursor location is incorrect if word wrap occurs in the code editor
* **Bug fix:** Cursor location is incorrect on mobile
* Responsiveness breaks under "extreme" resolutions (very small width resolutions)
* Support for tables (using remark-gfm plugin)
* Code cleanup

<br>

## 🛠 Compatability
* As of **June 2022** - Expected to work in most modern browsers