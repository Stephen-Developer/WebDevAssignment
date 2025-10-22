````markdown
# Death Guard Army Builder

A small HTML5 web application that lets users build a **Warhammer 40 K Death Guard** army list.  
It runs entirely in the browser using **LocalStorage** — no backend required.

---

## 📁 Project Structure

    /
    ├── data/
    │   └── data.js             # Unit data
    ├── scripts/
    │   ├── utils.js            # Shared logic (add/remove units, storage)
    │   ├── main.js             # Builder page logic
    │   ├── unit.js             # Unit detail logic
    │   ├── army.js             # Army overview logic
    │   └── gallery.js          # Image gallery logic
    ├── styles/
    │   └── styles.css          # Global styling
    ├── index.html              # Builder
    ├── army.html               # Army view
    ├── unit.html               # Unit details
    ├── gallery.html            # Gallery
    └── about.html              # About page

---

## ⚙️ Features

- Build and save armies in-browser  
- Add / remove units with per-unit limits  
- Filter units by category (Character, Vehicle, etc.)  
- View detailed unit pages  
- Animated gallery of unit images  
- Persistent data via LocalStorage  
- Responsive layout for desktop and mobile  

---

## 🧩 Technical Notes

- Plain HTML, CSS, and JavaScript (no frameworks)  
- Scripts loaded with `<script ... defer>`  
- Scoped logic per page using IIFEs or `DOMContentLoaded`  
- Works without modules or bundlers  
- Must be served over HTTP for shared LocalStorage  

---

## 🖥️ Running Locally

**1 – Start a local web server**

LocalStorage is isolated for `file://` URLs in Firefox. Serve via `http://localhost`.

**Node.js**
```bash
npx http-server .
````

**Python 3**

```bash
python -m http.server 8000
```

**2 – Open in your browser**

```
http://localhost:8000/
```

---

## 🧱 Code Overview

**utils.js** – Core add/remove logic, enforces limits, updates LocalStorage
**main.js** – Displays unit grid, filters, totals
**unit.js** – Shows detailed unit info and add-to-army control
**army.js** – Renders current army list and total points
**gallery.js** – Manages image carousel, thumbnails, animations

---

## 🧭 Browser Support

* Chrome ✅
* Edge ✅
* Firefox ✅ (using `http://`)
* Safari ⚠️ untested

---

## 📜 License

Educational and personal-use project.
Free to copy or modify for learning.