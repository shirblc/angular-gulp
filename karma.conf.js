const path = require('path');

// Karma configuration file
module.exports = function (karma) {
  karma.set({
    basePath: '',
    frameworks: ['jasmine', 'browserify'],
    mime: { 'text/x-typescript': ['ts','tsx'] },
    files: [
        { pattern: "./src/tests.specs.ts" },
        { pattern: "./tests/app.bundle.js" }
    ],
    preprocessors: {
        "./src/tests.specs.ts" : ['browserify'],
        './tests/app.bundle.js': ['sourcemap']
    },
    browserify: {
      debug: true,
      transform: [
      // Inline the templates and its SVGs
        function(file) {
          var data = '';
          return through(write, end);

          // write the stream, replacing templateUrls and SVGs
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

              let newString = `template: \`${componentTemplate}\``
              return newString;
            });

            data += replacedChunk
          }

          // finish the stream
          function end () {
              this.queue(data);
              this.queue(null);
            }
        },
        // run browserify-istanbul
        require('browserify-istanbul')({
          ignore: ['**/node_modules/**', '**/*.mock.ts', '**/*.spec.ts', '**/*.interface.ts'],
          defaultIgnore: false
        })],
      plugin: [['tsify', { target: 'es6' }]],
      extensions: ['ts', 'tsx']
    },
    coverageIstanbulReporter: {
      dir: path.resolve(__dirname, './coverage/angular-gulp'),
      reports: ['html', 'lcovonly', 'text-summary']
    },
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    reporters: ['progress', 'kjhtml', 'coverage', 'coverage-istanbul'],
    port: 9876,
    logLevel: 'DEBUG',
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true
  });
};
