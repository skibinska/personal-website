'use strict';

module.exports = {
  beforeEach: function (browser) {
    var baseurl = 'http://localhost:8000';
    browser
      .url(baseurl)
      .waitForElementVisible('body', 1000);
  },

  'Checks if elements exist on the page': function (browser) {
    var homepage = browser.page.homepage();
    homepage
            .assert.title('Ewelina Skibinska | Junior Front-end Web developer | Portfolio | Contact')
            .verify.visible('@header')
            .verify.visible('@intro')
            .verify.visible('@projects')
            .verify.visible('@employers')
            .verify.visible('@contact')
            .verify.visible('@footer')
            .expect.element('@hamburgerIcon').to.not.be.visible;
    // homepage.navigate()
    //         .validateHomepage();
    browser.end();
  },

  'Checks if header changes class on scrolling': function (browser) {
    browser.assert.attributeEquals('header', 'class', 'header');
    browser.execute('scrollTo(0,3000)');
    browser.assert.cssClassPresent('header', 'js-header--fixed');
    browser.execute('scrollTo(0,0)');
    browser.assert.cssClassNotPresent('header', 'js-header--fixed');
    browser.end();
  },

  'Checks if external links works': function (browser) {
    var homepage = browser.page.homepage();
    homepage.assert.containsText('@contactListTitle', 'CONTACT LIST')
            .assert.containsText('@contactListSiteBtn', 'VIEW SITE')
            .assert.containsText('@contactListSourceBtn', 'VIEW SOURCE')
            .click('@contactListSiteBtn');
    browser.url('http://contacts.skibinska.co.uk/contacts')
           .back()
           .assert.urlEquals('http://localhost:8000/')
           .end();
  },

  'Checks mobile view': function (browser) {
    var homepage = browser.page.homepage();
    browser.resizeWindow(320, 517);
    homepage.expect.element('@employers').to.not.be.visible;
    browser.end();
  },

  'Checks navigation on mobile': function (browser) {
    var homepage = browser.page.homepage();
    browser.resizeWindow(320, 517);
    homepage.verify.visible('@hamburgerIcon')
            .click('@hamburgerIcon')
            .verify.visible('.navigation')
            .assert.containsText('@navigateToContact', 'CONTACT')
            .click('@hamburgerIcon')
            .expect.element('.navigation').to.not.be.visible;
    browser.end();
  }

  // homepage.click('@navigateToContact');
};
