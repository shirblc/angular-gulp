# Angular-Gulp Template

## Version

Version 1.

## Desciption

An Angular-Gulp template including Angular (version 9) and Gulp as a build tool. The template uses Gulp for CSS and HTML processing and Webpack for packaging Angular's modules.

Built using the [gulp-site-template](https://github.com/shirblc/gulp-site-template) repo, with Angular and TypeScript related adjustments.

**Important!** This version was built for Adobe Dreamweaver or Adobe Brackets users. Therefore it doesn't include several important tools:

1. Linting - Both Dreamweaver and Brackets have linting built into their interface, using the popular ESLint. As such, there was no need to install the Gulp-ESLint extension.
2. Live Editing - Both Dreamweaver and Brackets have Live Editing built into their interface (as "Real-time Preview". As such, there was no need to install the BrowserSync extension.
3. Sass - Both Dreamweaver and Brackets come with a build-in Sass/SCSS/Less conversion tool. As such, there was no need to install the Gulp-Sass extension.

## Requirements

- Node.js

## Installation and Usage

### Master Branch

1. Download or clone the repo.
2. cd into the project directory.
3. Run ```npm install```.
4. Set up your tests in the Jasmine specs folder.
5. Start building. Don't forget to add any components, services etc to the main module.
6. Run using ```gulp serve```.

## Contents

### General

The main folder contains three folders:

1. **dist Folder** - Contains the distribution-ready files.
2. **src Folder** - Contains the source files.
3. **Tests Folder** - For Jasmine spec files. Contains only the JavaScript specs file. The specRunner will open once you run the gulp testing task.

The main folder also contains the following files:

1. **gulpfile.js** - JavaScript file containing the tasks for gulp to perform.
2. **index.html** - The base HTML file.
3. **package.json** and **package-lock.json** - NPM files including all the required dependencies. To install, run ```npm install```.
4. **README.md** - This file.
5. **tsconfig.json** - The TypeScript compiler configuration file.
6. **webpack.config.js** - Webpack configuration file.

### Development Mode

The Developmnt Mode (src) folder (parent folder) includes:

1. **CSS Folder** - For Sass files output.
2. **Sass Folder** - For the project's Sass files.
3. **App Folder** - For all scripts.
	- **Components Folder** - Contains the app's components.
	- **Services Folder** - Contains the app's services.
	- **app-routing** - The file containing the application's router.
	- **App Component** - HTML and TypeScript files containing the app's base component.
	- **App Module** - The TypeScript file containing the app's main module.
4. **Assets Folder** - For all images and other assets.
5. **Environments Folder** - Contains the app's environments configuration.
6. **Main.ts** - Angular TypeScript file defining the current environment (development by default) and bootstrapping the main module.

### Production Mode

To make it easier to prerpare for distribution, the site includes a seperate distribution folder, to the files are exported once they're run through Gulp. This is the "dist" folder.
The distribution folder already includes a CSS folder and a JS folder, for the site's CSS and JavaScript (respectively). A Gulp task deals particulalry with adding the photos folder and the index HTML file to the distribution folder every time they're changed.

## Dependencies

The site uses several tools to maximize compatibility:

### Gulp

1. **Gulp** - Gulp enables running tasks automatically. You can read more on the [Gulp website](https://gulpjs.com). Gulp is a Node.js tool, so it requires installing Node.
2. **Gulp-Postcss** with **Autoprefixer** Plugin - A Gulp plugin which adds the necessary browser prefixes to the CSS file. For more info check the [Gulp-postcss](https://www.npmjs.com/package/gulp-postcss) page and the [Autoprefixer](https://www.npmjs.com/package/autoprefixer) page on NPM.
3. **Gulp-Babel** - A Gulp plugin for the transpiler Babel. Converts the current ES version to the highly supported ES5. For more info check the plugin's [GitHub](https://github.com/babel/gulp-babel) repository.
4. **Gulp-Uglify** - A Gulp plugin which minimises the single JavaScript file (Concat's output). For more info check the [Gulp-uglify](https://www.npmjs.com/package/gulp-uglify) page on NPM.
5. **Gulp-Sourcemaps** - A Gulp plugin utilizing the source maps tool. For more info check the [Gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) page on NPM.
6. **Gulp-Jasmine-Browser** - A headless browser extension for the unit-testing tool Jasmine. The site also includes **Jasmine-core** and **Puppeteer** in order to execute Jasmine tests from the command line. For more info check the [Gulp-jasmine-browser](https://www.npmjs.com/package/gulp-jasmine-browser) page on NPM or the [Jasmine documentation](https://jasmine.github.io/) page.
7. **Webpack-Stream** - A Webpack plugin for Gulp, used to bundle Angular modules. For more info, check the [GitHub repository](https://github.com/shama/webpack-stream) and the [Webpack integration guide](https://webpack.js.org/guides/integrations/#gulp).

### Angular

1. **@angular/animations** - Angular's animations library.
2. **@angular/common** - Angular's commonly needed services, pipes and directives.
3. **@angular/compiler** - Angular's template compiler.
4. **@angular/compiler-cli** - Command-line interface to invoke Angular's compiler.
5. **@angular/core** - Critical runtime parts of the Angular framework.
6. **@angular/forms** - Support for template-driven and reactive forms.
7. **@angular/platform-browser** - Everything DOM and browser-related.
8. **@angular/platform-browser-dynamic** - Providers and methods for compiling and running the app.
9. **@angular/router** - Angular's router module.
10. **rxjs** - Contains an implementation of observables, which many Angular APIs use.
11. **typescript** - TypeScript language server, which Angular uses.
12. **zone.js** - Implementation of zones for JavaScript (used by Angular).

For more information about Angular's required NPM packages, check the [Angular docs](https://angular.io/guide/npm-packages).

On top of Angular's dependencies, this build also utilises the following tools for Angular's operation and processing:

1. **@ngtools/webpack** - Webpack 4 plugin used to compile Angular components and modules. For more information, check the [NPM page](https://www.npmjs.com/package/@ngtools/webpack).
2. **angular-router-loader** - A Webpack loader for Angular that works with the Angular router. Check the [NPM page](https://www.npmjs.com/package/angular-router-loader) for more information.
3. **angular2-template-loader** - A Webpack loader that inlines Angular templates and stylesheets into components. For more information, check the [NPM page](https://www.npmjs.com/package/angular2-template-loader).
4. **core-js** - Modular standard library for JavaScript. Contains polyfills. For more information, check the [GitHub repo](https://github.com/zloirock/core-js).

## Known Issues

There are no current issues at the time.
