module.exports = {
  'src_folders': [
    'tests/e2e'
  ],
  'output_folder': './tests/e2e/reports',
  'selenium': {
    'start_process': true, // tells nightwatch to start/stop the selenium process
    'server_path': './node_modules/nightwatch/bin/selenium.jar',
    'host': '127.0.0.1',
    'port': 4444,
    'cli_args': {
      'webdriver.chrome.driver': './node_modules/nightwatch/bin/chromedriver'
    }
  },
  'test_settings': {
    'default': {
      'screenshots': {
        'enabled': false,
        'path': ''
      },
      'globals': {
        'waitForConditionTimeout': 5000
      },
      'desiredCapabilities': {
        'browserName': 'chrome'
      }
    },
    'chrome': {
      'desiredCapabilities': {
        'browserName': 'chrome',
        'javascriptEnabled': true // turn off to test progressive enhancement
      }
    }
  }
};

var BINPATH = './node_modules/nightwatch/bin/';
require('fs').stat(BINPATH + 'selenium.jar', function (err, stat) {
  if (err || !stat || stat.size < 1) {
    require('selenium-download').ensure(BINPATH, function (error) {
      if (error) throw new Error(error);
      console.log('✔ Selenium & Chromedriver downloaded to:', BINPATH);
    });
  }
});
