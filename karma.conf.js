const path = require('path');

// Karma configuration file
module.exports = function (karma) {
  karma.set({
    basePath: '',
    frameworks: ['jasmine', 'browserify'],
    mime: { 'text/x-typescript': ['ts','tsx'] },
    files: [
        { pattern: "./src/**/*.spec.ts" },
        { pattern: "./tests/app.bundle.js" }
    ],
    preprocessors: {
        "./tests/src/**/*.spec.ts" : ['browserify'],
        './tests/app.bundle.js': ['sourcemap']
    },
    browserify: {
      debug: true,
      plugin: ['tsify'],
      extensions: ['ts', 'tsx'],
      configure: function(bundle) {
        bundle.transform('tsify', { target: 'es6' });
      }
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
