﻿<hr>

<div align="center">

# Rendering HTML Inside SVG: MERN Tech Stack Logo Visualization
</div>


<br>

---
# Project Overview 🛞

This project demonstrates an innovative technique of embedding HTML content within an SVG using the `<foreignObject>` tag, creating a dynamic and animated visualization of the MERN (MongoDB, Express, React, Node.js) technology stack.

<div align="center">
    <a href="https://nisal.lk" target="_blank" rel="noopener noreferrer">
        <img src="https://reactlogo.vercel.app/api/ReactLogo" width="10000" height="200" />
    </a>
</div>

---

---

<br>

## 🌟 Key Features
- Render HTML and CSS inside an SVG
- Animated technology stack icons
- Responsive design using viewport-relative units
- CSS animations for visual interest

## File Structure 📖

```
HTML-inside-SVG/
│
├── api/
│    └── logos.js         # NextJS/Vercel API Route for SVG Generation
│
│
├── README.md             # Project Documentation
└── package.json          # Project Dependencies
```

## 🛠 Technologies Used
- SVG
- CSS Animations
- HTML in SVG (`<foreignObject>`)
- Responsive Design Techniques

# 🚀 Installation & Setup

### Clone the Repository
```bash
git clone https://github.com/nisalherath/HTML-inside-SVG
cd HTML-inside-SVG
```

### Deployment Options
- **Vercel**: Simple serverless deployment
- **Netlify Functions**: Alternative serverless hosting
- **Express.js**: Traditional server-side rendering

## 🎨 Code Breakdown

### SVG Rendering Technique
The core of this project lies in using `<foreignObject>` to embed HTML:

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
  <foreignObject width="100%" height="100%">
    <div class="prof-card" xmlns="http://www.w3.org/1999/xhtml">
      <!-- Embedded HTML Content -->
    </div>
  </foreignObject>
</svg>
```

### Key CSS Animations

| Element            | Animation Type      |
|--------------------|--------------------|
| **MongoDB Leaf**  | Bouncing animation  |
| **Express Logo**  | 3D rotation         |
| **React Symbol**  | Orbital rotation    |
| **Node.js Polygon** | Y-axis spinning   |

## 🔍 How It Works

| Step                   | Description                                  |
|------------------------|----------------------------------------------|
| **SVG as a Canvas**    | Uses SVG as a full-page canvas              |
| **HTML Embedding**     | `<foreignObject>` allows rich HTML content  |
| **CSS Animations**     | Creates dynamic, engaging visuals           |
| **Responsive Design**  | Uses `calc()` and viewport units            |


## 🚧 Browser Compatibility

| Browser               | Compatibility |
|-----------------------|---------------|
| Google Chrome         | ✅ Supported  |
| Mozilla Firefox       | ✅ Supported  |
| Apple Safari          | ✅ Supported  |
| Microsoft Edge        | ✅ Supported  |
| Modern browsers with SVG and CSS3 support | ✅ Supported  |

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

| Step | Description |
|------|-------------|
| 1    | Fork the Project |
| 2    | Create your Feature Branch (`git checkout -b feature/AmazingFeature`) |
| 3    | Commit your Changes (`git commit -m 'Add some AmazingFeature'`) |
| 4    | Push to the Branch (`git push origin feature/AmazingFeature`) |
| 5    | Open a Pull Request |


<br>

---

## License 😽😽

This project is licensed under the [MIT License](LICENSE).

### Copyright (c) 2025 Nisal Herath

<hr>



<div align="center">

`This repository is maintained by Nisal Herath. All rights reserved.`
<br>
`By using this code, you agree to the terms outlined in the LICENSE file.`


### [nisal@nisal.lk](mailto:nisal@nisal.lk)

### [nisal.lk](https://nisal.lk)
</div>
