# Empty Site

## Version

Version 1.

## Desciption

An empty site template for any use. Comes fully equipped with Gulp and several of its plugins (see Dependencies) to make your workflow quicker. Largely based on Udacity's [Web Tooling and Automation](https://www.udacity.com/course/web-tooling-automation--ud892) course.

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
5. Start building. Don't forget to add each JavaScript file you create to the concatenation order in the Gulp tasks 'scripts' and 'scripts-dist'.

### Unit-Testing-Manual Branch

1. Download or clone the repo.
2. cd into the project directory.
3. Run ```npm install```.
4. Set up your tests in the Jasmine tests folder and get specRunner.html running.
5. Start building. Don't forget to add each JavaScript file you create to the concatenation order in the Gulp tasks 'scripts' and 'scripts-dist'.

## Contents

### Development Mode

The Developmnt Mode folder (parent folder) includes:

1. **CSS Folder** - For Sass files output.
2. **Sass Folder** - For the project's Sass files.
3. **JS Folder** - For all scripts.
4. **IMG Folder** - For all images.
5. **Tests Folder** (unit testing branches only) - For Jasmine spec files.
	- Master - Contains only the JavaScript specs file. The specRunner will open once you run the gulp testing task.
	- unit-testing-manual - Contains the Jasmine library, the specRunner and whatever specs files you add.
6. **Dist Folder** - See "Production Mode"

As well as the files:

1. **gulpfile.js** - JavaScript file containing the tasks for gulp to perform. 
2. **index.html** - The base HTML file.
3. **package.json** and **package-lock.json** - NPM files including all the required dependencies. To install, run ```npm install```.
4. **README.md** - This file.

### Production Mode

To make it easier to prerpare for distribution, the site includes a seperate distribution folder, to the files are exported once they're run through Gulp. This is the "dist" folder.
The distribution folder already includes a CSS folder and a JS folder, for the site's CSS and JavaScript (respectively). A Gulp task deals particulalry with adding the photos folder and the index HTML file to the distribution folder every time they're changed.

## Dependencies

The site uses several tools to maximize compatibility:

1. **Gulp** - Gulp enables running tasks automatically. You can read more on the [Gulp website](https://gulpjs.com). Gulp is a Node.js tool, so it requires installing Node.
2. **Gulp-Postcss** with **Autoprefixer** Plugin - A Gulp plugin which adds the necessary browser prefixes to the CSS file. For more info check the [Gulp-postcss](https://www.npmjs.com/package/gulp-postcss) page and the [Autoprefixer](https://www.npmjs.com/package/autoprefixer) page on NPM.
3. **Gulp-Babel** - A Gulp plugin for the transpiler Babel. Converts the current ES version to the highly supported ES5. For more info check the plugin's [GitHub](https://github.com/babel/gulp-babel) repository.
4. **Gulp-Concat** - A Gulp plugin which combines all the ES5 JavaScript (Babel's output) files into one file. For more info check the [Gulp-concat](https://www.npmjs.com/package/gulp-concat) page on NPM.
5. **Gulp-Uglify** - A Gulp plugin which minimises the single JavaScript file (Concat's output). For more info check the [Gulp-uglify](https://www.npmjs.com/package/gulp-uglify) page on NPM.
6. **Gulp-Sourcemaps** - A Gulp plugin utilizing the source maps tool. For more info check the [Gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) page on NPM.
7. **Gulp-order** - A gulp plugin to set the order in which the JavaScript files will be concatenated. For more info, check the [Gulp-order](https://github.com/sirlantis/gulp-order) GitHub page.
8. **Gulp-Jasmine-Browser** - A headless browser extension for the unit-testing tool Jasmine. The site also includes **Jasmine-core** and **Puppeteer** in order to execute Jasmine tests from the command line. For more info check the [Gulp-jasmine-browser](https://www.npmjs.com/package/gulp-jasmine-browser) page on NPM or the [Jasmine documentation](https://jasmine.github.io/) page.

## Known Issues

There are no current issues at the time.