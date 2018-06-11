![express-marko-logo](public/img/logo.png)
# Express Marko Starter v1
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
## Dependency
This project uses the following modules as dependency
- @lasso/marko-taglib
    The Lasso.js includes a taglib for Marko for easily injecting <script> and <link> tags into a page, as well as resource URLs for images and other types of front-end resources.
- compression
- cookie-parser
- debug
- express
- http-errors
- lasso
- lasso-babel-transform
- lasso-marko
- marko
- pino
- babel-preset-env

## Changelog
### v1
- Basic application setup
- Express framework
- MarkoJS
- MaterializeCSS
- LassoJS
- Pino Logger