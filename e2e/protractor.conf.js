const { SpecReporter, StacktraceOption } = require('jasmine-spec-reporter');

exports.config = {
  specs: [
    './src/**/*.spec.ts'
  ],
  exclude: ['**/node_modules/**'],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      binary: '/usr/bin/google-chrome',
      args: [
        '--headless',
        '--disable-gpu',
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-extensions',
        '--disable-dev-shm-usage'
      ]
    }
  },
  allScriptsTimeout: 11000,
  logLevel: 'ERROR',
  directConnect: true,
  seleniumAddress: 'http://localhost:4444',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {},
    random: true
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, '../tsconfig.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: StacktraceOption.PRETTY
      }
    }));
  }
};
