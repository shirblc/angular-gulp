# Angular-Gulp

## Version

Version 1 (currently in development).

Built using the [gulp-site-template](https://github.com/shirblc/gulp-site-template) repo.

## Requirements

- Node.js

## Installation and Usage

### Developers

1. Download or clone the repo.
2. cd into the project directory.
3. cd into frontend.
4. Run ```npm install``` to install dependencies.
5. Run ```gulp serve``` to start the local server.
6. Open localhost:3000.

**For your convenience,** this project utilises Gulp's 'watch' functionality. In order to activate it  while developing, run ```gulp watch```. For more information about Gulp watch, check the [Gulp documentation](https://gulpjs.com/docs/en/getting-started/watching-files/).

## Contents

### Components

**Located in:** [src/app/components](./src/app/components)

1. **Sample component** - A sample component meant as an example. Feel free to delete.
2. **Error page** - A sample error page, to which the user is redirected whenever the route doesn't match an existing route (already configured in the routing module). Feel free to configure according to your needs.

### Services

**Located in:** [src/app/services](./src/app/services)

1. **Sample service** - Provided in the app root. A sample service meant as an example. Feel free to delete.

### Production Scripts

The project contains two production-ready scripts:

1. **server.js** - Contains a basic Express server with compression, in order to serve files in a production environment.
2. **env-config.js** - Contains a script to find and replace environment variables (in src/environments) with configured environment variables from the hosting environment. This script is an optional adjustment - feel free to delete it if you don't need it.

## Dependencies

### Gulp

The site uses several tools to maximise compatibility:

1. **Gulp** - Gulp enables running tasks automatically. You can read more on the [Gulp website](https://gulpjs.com). Gulp is a Node.js tool, so it requires installing Node.
2. **Gulp-Postcss** with **Autoprefixer** Plugin - A Gulp plugin which adds the necessary browser prefixes to the CSS file. For more info check the [Gulp-postcss](https://www.npmjs.com/package/gulp-postcss) page and the [Autoprefixer](https://www.npmjs.com/package/autoprefixer) page on NPM.
3. **Browserify** (with vinyl-source-stream and vinyl-buffer) - A library for bundling modular code. Browserify bundles up the main module (AppModule) and converts it from TypeScript to ES6. For more info, check the [Browserify repo](https://github.com/browserify/browserify) and Gulp's [Browserify + Gulp recipe](https://github.com/gulpjs/gulp/blob/master/docs/recipes/browserify-uglify-sourcemap.md).
4. **Gulp-Babel** - A Gulp plugin for the transpiler Babel. Converts Browserify's ES6 output to the highly supported ES5. For more info check the plugin's [GitHub](https://github.com/babel/gulp-babel) repository.
5. **Gulp-Uglify** - A Gulp plugin which minimises the single ES5 file (Babel's output). For more info check the [Gulp-uglify](https://www.npmjs.com/package/gulp-uglify) page on NPM.
6. **Gulp-Sourcemaps** - A Gulp plugin utilizing the source maps tool. For more info check the [Gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) page on NPM.
7. **Gulp-Rename** - A gulp plugin used to rename files. Used to rename the main module JS and to change the directory name of all HTML files. For more info check the [Gulp-rename](https://www.npmjs.com/package/gulp-rename) page on NPM.
8. **Gulp-replace** - A string replace plugin for Gulp. Used to change the templateUrls in the final JS file. For more info, check the [Gulp-replace](https://www.npmjs.com/package/gulp-replace) page on NPM.
9. **Gulp-Jasmine-Browser** - A headless browser extension for the unit-testing tool Jasmine. The site also includes **Jasmine-core** and **Puppeteer** in order to execute Jasmine tests from the command line. For more info check the [Gulp-jasmine-browser](https://www.npmjs.com/package/gulp-jasmine-browser) page on NPM or the [Jasmine documentation](https://jasmine.github.io/) page.

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
13. **core-js** - Modular standard library for JavaScript. Contains polyfills. For more information, check the [GitHub repo](https://github.com/zloirock/core-js).

For more information about Angular's required NPM packages, check the [Angular docs](https://angular.io/guide/npm-packages).

### Production Dependencies

1. **Express** - This project uses Express in order to run a basic server in deployment. This server is used to send the static files and script to the user. For more information, check the [Express website](https://expressjs.com).
2. **Compression** - A Node extension used to compress production files when sending them from the Express server to the client. For more information, check the [compression NPM page](https://www.npmjs.com/package/compression).
2. **dotenv** - A Node extension for accessing environment variables. Used by the frontend while in production mode. For more information, check the [dotenv NPM page](https://www.npmjs.com/package/dotenv).

## Hosting

If you want to clone and host your own version, you can do so by using the following guide (the following commands are for Heroku, but they can be adjusted depending on your host):

1. Create a Heroku account (skip this step if you already have an account).
2. Install the Heroku command line interface.
3. In your Terminal, enter `heroku login`. This triggers logging in via the CLI.
4. Enter `heroku create <APP_NAME>` (with your own app name). If successful, Heroku returns the live version's URL (will be referred to as <LIVE_URL>) and the Git repo link (will be referred to as <GIT_URL>).
5. Add your environment variables (if there are any).
6. Make sure you're in the top directory (FSND-capstone). In your terminal, enter `git remote add heroku-client <GIT_URL>`.
7. Enter `git push heroku-client master`. This triggers the app build. If successful, you'll get a 'Verifying deploy... done.' message.
8. All done! Now you can visit your <GIT_URL> to see the live app.

## Known Issues

There are no current issues at the time.
