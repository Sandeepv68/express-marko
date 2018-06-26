![express-marko-logo](public/img/logo.png)
# Express Marko Starter v1

[![Greenkeeper badge](https://badges.greenkeeper.io/SandeepVattapparambil/express-marko.svg)](https://greenkeeper.io/)

Express Marko Starter kit contains an Express sample application combined with MarkoJS for templating, Client-Side, Server-Side Rendering and MaterializeCSS for UI-UX.

> **Note:**  Please read the following documentations before continuing
- MarkoJS https://markojs.com/
- MarkoJS Docs https://markojs.com/docs/getting-started/
- ExpressJS Docs https://expressjs.com/
- MaterializeCSS https://materializecss.com/

## Table of Contents
<!--ts-->
* [About](#express-marko-starter-v1)
* [Installation](#installation)
* [Dependency](#dependency)
* [Changelog](#changelog)
    * [v1](#v1)
<!--te-->

## Installation
Download the package from
```https://github.com/SandeepVattapparambil/express-marko.git```
then ```cd <into-project-folder>``` and
```sh
npm i
npm start
```
and then you will see your app running with logs on your terminal
```sh
[2018-06-11T08:02:16.474Z] INFO (Express Marko/8248 on Sandeep-HP): Application middlewares initialized
[2018-06-11T08:02:16.480Z] INFO (Express Marko/8248 on Sandeep-HP): Application routes initialized
[2018-06-11T08:02:16.487Z] INFO (Express Marko/8248 on Sandeep-HP): Application started and is running on port 3000
```
then go to ```http://localhost:3000```

Or you can use the [express-marko-generator](https://www.npmjs.com/package/express-marko-generator).

## Dependency
This project uses the following modules as dependency
- **@lasso/marko-taglib**
    * The Lasso.js includes a taglib for Marko for easily injecting <script> and <link> tags into a page, as well as resource URLs for images and other types of front-end resources.
- **compression**
    * The Nodejs compression middleware for compressing server responses.
- **cookie-parser**
    * Parse Cookie header and populate req.cookies with an object keyed by the cookie names. Optionally you may enable signed cookie support by passing a secret string, which assigns req.secret so it may be used by other middleware.
- **debug**
    * A tiny JavaScript debugging utility modelled after Node.js core's debugging technique. Works in Node.js and web browsers.
- **express**
    * Fast, unopinionated, minimalist web framework for node.
- **http-errors**
    * Create HTTP errors for Express, Koa, Connect, etc. with ease.
- **lasso**
    * Lasso.js is an eBay open source Node.js-style JavaScript module bundler that also provides first-level support for optimally delivering JavaScript, CSS, images and other assets to the browser.
    This tool offers many different optimizations such as a bundling, code splitting, lazy loading, conditional dependencies, compression and fingerprinted resource URLs. Plugins are provided to support pre-processors and compilers such as Less, Stylus and Marko. This developer-friendly tool does not require that you change the way that you already code and can easily be adopted by existing applications.
- **lasso-babel-transform**
    * Lasso.js transform that uses Babel to transpile ES6 code to ES5.
- **lasso-marko**
    * Plugin for the Lasso.js to support compilation and transport of Marko template files. Templates are compiled using the Marko compiler that produces a CommonJS module as output.
- **marko**
    * Marko is an isomorphic UI library built in JavaScript.
- **pino**
    * Extremely fast node.js logger, inspired by Bunyan. It also includes a shell utility to pretty-print its log files.
- **babel-preset-env**
    * The move makes it much easier to release and develop in sync with the rest of Babel!

## Changelog
### v1
- Basic application setup
- Express framework
- MarkoJS
- MaterializeCSS
- LassoJS
- Pino Logger