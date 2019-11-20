# Weather Application

## How to start using application:
1. Clone/download repository to hard drive,
2. Run `npm install` script to install npm dependencies.

# Available scripts:
## `npm run build`
Use to manually rebuild JavaScript files via Webpack module bundler.

## `npm start`
Use to start development server. Server will auto reload browser after detecting change of JavaScript file.

# Project initial setup
## Webpack content:
1. Babel transpiler (with async/await),
2. Development server,
3. Less compiler *(production version is not added yet)*.

## Linters:
1. ESLint,
2. Prettier.

## How to add new JS scripts:
1. Create new JavaScript file.
2. Import file in main `index.js` script or in any other JS file that is (or its parent is) imported to main script.

## How to apply styling:
1. Create new stylesheet with `.less` extension,
2. Import stylesheet in main `styles.less` file.
