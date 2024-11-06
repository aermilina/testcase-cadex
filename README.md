# Next.js Project

## Description
This project is built with Next.js and leverages several popular libraries for frontend development:

* Material UI for component creation
* styled-components for styling
* Formik to manage form handling 
* Yup to manage form validation
* Next.js API Router to implement backend functionality

## Styles and Animations
This project includes various stylistic elements and animations:

* Background Video: A YouTube video is used as the background for the first section.
* Sticky Header & Footer: The header is sticky, while the footer is fixed on mobile for better usability. On desktop, the footer is non-sticky.
* "Contact Us" Link Animations: Two animations for the "Contact Us" link:
* * SVG Animation: Shown when hovering over the link in the header.
* * Pulse Animation: Applied to buttons within various sections.
* Dynamic Gradient Animation: A gradient animation is used as the background for the third section.
* Smooth Scrolling Button: A "Down" button in the first section enables smooth scrolling to the next section.
* SPA Transitions: Smooth Single Page Application (SPA) transitions between pages enhance user experience.

## Optimization and SEO
To optimize performance and SEO, I have implemented the following techniques:

* Video Loading Delay: Delays video loading to improve initial page performance.
* SEO and Open Graph Tags: Includes meta tags for search engine optimization and social media sharing.
* Next Fonts: Optimizes font loading using the Next.js font management feature.
* YouTube Preconnect: Preconnects to YouTube to speed up video loading.

## Getting Started

First, you need to install necessary Node modules and pacakages:
```bash
yarn 
#or
npm install
```
Second, start the development server:

```bash
npm run dev
# or
yarn dev
```

You can also check the code by eslint 
``` bash 
yarn eslint --fix
```
## Hosting 

The project is deployed on Vercel. You can view it at [https://testcase-cadex-2.vercel.app/]https://testcase-cadex-2.vercel.app/
