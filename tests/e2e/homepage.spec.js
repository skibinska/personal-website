'use strict';

var baseUrl = 'http://localhost:8000/';

module.exports = {
  beforeEach: function (browser) {
    browser
      .url(baseUrl)
      .waitForElementVisible('body', 1000);
  },

  'Checks if elements exist on the page - desktop view': function (browser) {
    var homepage = browser.page.homepage();
    homepage
            .validateHomepage()
            .verify.visible('@employers')
            .expect.element('@hamburgerIcon').to.not.be.visible;
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
    var contactsListPage = 'http://contacts.skibinska.co.uk/contacts';
    var homepage = browser.page.homepage();
    homepage
            .assert.containsText('@contactListSiteBtn', 'VIEW SITE')
            .assert.containsText('@contactListSourceBtn', 'VIEW SOURCE')
            .click('@contactListSiteBtn')
            .assert.attributeContains('@contactListSiteBtn', 'href', contactsListPage)
            .navigate(contactsListPage);
    browser
          .back()
          .assert.urlEquals(baseUrl)
          .end();
  },

  'Checks if elements exist on the page - mobile view': function (browser) {
    var homepage = browser.page.homepage();
    browser.resizeWindow(320, 517);
    homepage
            .validateHomepage()
            .verify.visible('@hamburgerIcon')
            .expect.element('@employers').to.not.be.visible;
    browser.end();
  },

  'Checks navigation on mobile': function (browser) {
    var homepage = browser.page.homepage();
    browser.resizeWindow(320, 517);
    homepage
            .verify.visible('@hamburgerIcon')
            .click('@hamburgerIcon')
            .verify.visible('.navigation')
            .assert.containsText('@navigateToContact', 'CONTACT')
            .click('@hamburgerIcon')
            .expect.element('.navigation').to.not.be.visible;
    browser.end();
  }
};
