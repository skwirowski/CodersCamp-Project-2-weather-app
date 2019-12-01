# Weather Application
Weather application build during Coders Camp web programming course.

## Authors:
- [MartaJaszewska](https://github.com/MartaJaszewska)
- [Katarzyna](https://github.com/katarzyna-stepczynska)
- [ŁukaSz](https://github.com/Webskey)
- [Paweł Skwirowski](https://github.com/skwirowski)

## Project technological stack:
1. JavaScript ES6 + linters
2. Webpack
3. HTML5
4. CSS3 - LESS Preprocessor
5. Trello for project and tasks management

## Application features:
1. Get weather forecast by city name typed in input window. Polish city names has suggestions.
2. Get weather forecast based on browsers  geolocation.
3. Fill input with city name using browsers speach recognition.
4. Save default city name to local store and use it by default on next application use.

## Application sections:
1. Input location methods.
2. Current weather and meteorological data.
3. Weather forecast for current day.
4. Weather forecast for next days.

## How to start using application:
1. Clone/download repository to hard drive,
2. Open `index.html` file.

You can also run `npm install` script to install npm dependencies and check development mode.

# Available scripts:
## `npm run build`
Use to manually rebuild JavaScript files via Webpack module bundler.

## `npm start`
Use to start development server. Server will auto reload browser after detecting change of JavaScript file.

## `npm run watch`
Use to run Webpack bundler in `--watch` mode. It will rebuild JavaScript files automatically after every change in `js` files.

# Project initial setup
## Webpack content:
1. Babel transpiler (with async/await),
2. Development server,
3. Less compiler.
4. Minifying css file for production build.

## Linters:
1. ESLint,
2. Prettier.

## How to add new JS scripts:
1. Create new JavaScript file.
2. Import file in main `index.js` script or in any other JS file that is (or its parent is) imported to main script.

## How to apply styling:
1. Create new stylesheet with `.less` extension,
2. Import stylesheet in main `styles.less` file.

# Working in development mode & creating production bundle
Webpack is divided into three files: common, dev and prod. Each setup is run by npm scripts.

## To work in development mode you need to:
1. Comment out link to production css stylesheet file
```html
  <!-- production stylesheet file -->
  <link href="./dist/main.bundle.css" rel="stylesheet">

  -->

  <!-- production stylesheet file -->
  <!-- <link href="./dist/main.bundle.css" rel="stylesheet"> -->
```
2. Comment out production JavaScript source file
```html
  <!-- production source file -->
  <script src="./dist/main.bundle.js"></script>

  -->

  <!-- production source file -->
  <!-- <script src="./dist/main.bundle.js"></script> -->
```
3. Uncomment development JavaScript source file
```html
  <!-- development source file -->
  <!-- <script src="./dist/assets/main.bundle.js"></script> -->

  -->

  <!-- development source file -->
  <script src="./dist/assets/main.bundle.js"></script>
```
4. Run `npm start` script to start **development server**

## To create production build you need to:
1. Uncomment link to production css stylesheet file
```html
  <!-- production stylesheet file -->
  <!-- <link href="./dist/main.bundle.css" rel="stylesheet"> -->

  -->

  <!-- production stylesheet file -->
  <link href="./dist/main.bundle.css" rel="stylesheet">
```
2. Unomment production JavaScript source file
```html
  <!-- production source file -->
  <!-- <script src="./dist/main.bundle.js"></script> -->

  -->

  <!-- production source file -->
  <script src="./dist/main.bundle.js"></script>
```
3. Comment development JavaScript source file
```html
  <!-- development source file -->
  <script src="./dist/assets/main.bundle.js"></script>

  -->

  <!-- development source file -->
  <!-- <script src="./dist/assets/main.bundle.js"></script> -->
```
4. Run `npm run build` script to create **production bundle**
