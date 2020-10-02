const gulp = require("gulp");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");
const sourcemaps = require("gulp-sourcemaps");
const browserSync = require("browser-sync").create();
const browserify = require("browserify");
const tsify = require("tsify");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const rename = require("gulp-rename");
const replace = require("gulp-replace");
const fs = require("fs");
var Server = require('karma').Server;

// LOCAL DEVELOPMENT TASKS
// ===============================================
//copies the html to the disribution folder
function copyHtml()
{
	return gulp
		.src("src/app/**/*.html")
		.pipe(rename({dirname:""}))
		.pipe(gulp.dest("./localdev/app"));
}

//copies the index html to the disribution folder
function copyIndex()
{
	return gulp
		.src("index.html")
		.pipe(gulp.dest("./localdev"));
}

//copies the images folder to the distribution folder
function copyImgs()
{
	return gulp
		.src("src/assets/img/*")
		.pipe(gulp.dest("localdev/assets/img"));
}

//sets gulp to add prefixes with Autoprefixer after Dreamweaver outputs the Sass filee to CSS
//once the prefixer finishes its job, outputs the file to the distribution folder
function styles()
{
	return gulp
		.src("src/css/*.css")
		.pipe(postcss([autoprefixer()]))
		.pipe(gulp.dest("./localdev/css"));
}

//deals with transforming the scripts while in development mode
function scripts()
{
	var b = browserify({
		debug: true
	}).add("src/main.ts").plugin(tsify, {target: "es6"});

	return b.bundle()
      .pipe(source("src/main.ts"))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
				.pipe(replace(/(templateUrl: '.)(.*)(.component.html)/g, (match) => {
					let componentName = match.substring(15, match.length-15);
					let newString = `templateUrl: './app/${componentName}.component.html`
					return newString;
				}))
        .pipe(babel({presets: ["@babel/preset-env"]}))
				.pipe(rename("app.bundle.js"))
      .pipe(sourcemaps.write("./"))
      .pipe(gulp.dest("./localdev"));
}

//watch files for changes and then run the appropriate tasks
function watch()
{
	gulp.watch("src/app/**/*.html", copyHtml)
	gulp.watch("index.html", copyIndex);
	gulp.watch("src/assets/img/*", copyImgs);
	gulp.watch("src/css/*.css", styles);
	gulp.watch("src/**/*.ts", scripts);
}

// PRODUCTION TASKS
// ===============================================
//copies the html to the disribution folder
function copyHtmlDist()
{
	return gulp
		.src("src/app/**/*.html")
		.pipe(rename({dirname:""}))
		.pipe(gulp.dest("./dist/app"));
}

//copies the index html to the disribution folder
function copyIndexDist()
{
	return gulp
		.src("index.html")
		.pipe(replace(/src="app.bundle.js"/, () => {
			let newString = `src="app.bundle.min.js"`
			return newString;
		}))
		.pipe(gulp.dest("./dist"));
}

//copies the images folder to the distribution folder
function copyImgsDist()
{
	return gulp
		.src("src/assets/img/*")
		.pipe(gulp.dest("dist/assets/img"));
}

//sets gulp to add prefixes with Autoprefixer after Dreamweaver outputs the Sass filee to CSS
//once the prefixer finishes its job, outputs the file to the distribution folder
function stylesDist()
{
	return gulp
		.src("src/css/*.css")
		.pipe(postcss([autoprefixer()]))
		.pipe(gulp.dest("./dist/css"));
}

//deals with transforming and bundling the scripts while in production mode
function scriptsDist()
{
	var b = browserify({
		debug: true
	}).add("src/main.ts").plugin(tsify, {target: "es6"});

	return b.bundle()
      .pipe(source("src/main.ts"))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
		.pipe(replace(/(templateUrl: '.)(.*)(.component.html)/g, (match) => {
						let componentName = match.substring(15, match.length-15);
						let newString = `templateUrl: './app/${componentName}.component.html`
						return newString;
					}))
        .pipe(babel({presets: ["@babel/preset-env"]}))
				.pipe(uglify())
				.pipe(rename("app.bundle.js"))
      .pipe(sourcemaps.write("./"))
      .pipe(gulp.dest("./dist"));
}

//prepare for distribution
gulp.task('dist', gulp.parallel(
	copyHtmlDist,
	copyIndexDist,
	copyImgsDist,
	stylesDist,
	scriptsDist
));

// TESTING TASKS
// ===============================================
// import all the tests to main file
// credit for this goes to @hackerhat
// https://github.com/facebook/create-react-app/issues/517#issuecomment-417943099
function setupTests() {
	return gulp.src('src/tests.ts')
	.pipe(replace(/\/\/ test-placeholder/, (match) => {
		let newString = '';

		function readDirectory(directory) {
	    fs.readdirSync(directory).forEach((file) => {
	      const fullPath = path.resolve(directory, file);
				const regularExpression = /\.spec\.ts$/;

	      if (fs.statSync(fullPath).isDirectory()) {
	        readDirectory(fullPath);
	      }

	      if (!regularExpression.test(fullPath)) return;

				let hugIndex = fullPath.indexOf('app');
				let newPath = './' + fullPath.substring(hugIndex);
	      newString += `import "${newPath}";
				`;
	    });
	  }

		readDirectory(path.resolve(__dirname, 'src'));

			return newString;
		}))
	.pipe(rename("tests.specs.ts"))
	.pipe(gulp.dest('src/'))
}

// bundle up the code before the tests
function bundleCode() {
	var b = browserify({
		debug: true
	}).add("src/main.ts").transform(function(file) {
		var data = '';
    return through(write, end);

    function write (buf) {
			let codeChunk = buf.toString("utf8");
			// inline the templates
			let replacedChunk = codeChunk.replace(/(templateUrl: '.)(.*)(.component.html')/g, (match) => {
				let componentName = match.substring(16, match.length-16);
				let componentTemplate;

				if(componentName == 'app') {
					componentTemplate = fs.readFileSync(__dirname + `/src/app/${componentName}.component.html`);
				}
				else {
					componentTemplate = fs.readFileSync(__dirname + `/src/app/components/${componentName}/${componentName}.component.html`);
				}

				let newString = `/* istanbul ignore next */
				template: \`${componentTemplate}\``
				return newString;
			});

			data += replacedChunk
		}

    function end () {
        this.queue(data);
        this.queue(null);
    }
	}).plugin(tsify, { target: 'es6' }).transform(require('browserify-istanbul')({
		instrumenterConfig: {
                  embedSource: true
                },
		ignore: ['**/node_modules/**', '**/*.mock.ts', '**/*.spec.ts'],
		defaultIgnore: false
	}));

	return b.bundle()
			.pipe(source("src/main.ts"))
			.pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
			.pipe(rename("app.bundle.js"))
			.pipe(sourcemaps.write())
			.pipe(gulp.dest("./tests"));
}

// bundle tests - for testing
function bundleTests() {
	var b = browserify().add("tests/src/base.spec.ts").plugin(tsify, {target: "es6"});

	return b.bundle()
			.pipe(source("tests/src/base.spec.ts"))
			.pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
			.pipe(rename("tests.bundle.js"))
			.pipe(sourcemaps.write())
			.pipe(gulp.dest("./tests"));
}

// add inline templates for testing
function addTemplates() {
	return gulp.src('src/**/*.ts', {base: "./"})
	.pipe(replace(/(templateUrl: '.)(.*)(.component.html')/g, (match) => {
					let componentName = match.substring(16, match.length-16);
					let componentTemplate;

					if(componentName == 'app') {
						componentTemplate = fs.readFileSync(__dirname + `/src/app/${componentName}.component.html`);
					}
					else {
						componentTemplate = fs.readFileSync(__dirname + `/src/app/components/${componentName}/${componentName}.component.html`);
					}

					let newString = `template: \`${componentTemplate}\``
					return newString;
				}))
	.pipe(gulp.dest('./tests'))
}

// automatic testing in whatever browser is defined in the Karma config file
function unitTest()
{
	return new Server({
	    configFile: __dirname + '/karma.conf.js'
	  }).start();
}

gulp.task('test', gulp.series(
	setupTests,
	bundleCode,
	addTemplates,
	unitTest
))

//boot up the server
gulp.task("serve", function() {
	browserSync.init({
		server: {
			baseDir: "./localdev"
		},
		single: true
	});
});

//exports for gulp to recognise them as tasks
exports.copyHtml = copyHtml;
exports.copyIndex = copyIndex;
exports.copyImgs = copyImgs;
exports.styles = styles;
exports.scripts = scripts;
exports.scriptsDist = scriptsDist;
exports.unitTest = unitTest;
exports.watch = watch;
exports.bundleTests = bundleTests;
