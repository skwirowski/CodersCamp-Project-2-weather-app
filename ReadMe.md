# Weather Application

## How to start using application:
1. Clone/download repository to hard drive,
2. Run `npm install` script to install npm dependencies.

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
