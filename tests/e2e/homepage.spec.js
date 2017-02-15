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
    homepage.assert.title('Ewelina Skibinska | Junior Front-end Web developer | Portfolio | Contact');
    homepage.expect.element('.header').to.be.present;
    homepage.expect.element('.intro').to.be.present;
    homepage.expect.element('.projects').to.be.present;
    homepage.expect.element('.employers').to.be.present;
    homepage.expect.element('.contact').to.be.present;
    homepage.expect.element('.footer').to.be.present;
    homepage.expect.element('.nav__icon').to.not.be.visible;
    browser.end();
  },

  'Checks if header changes class on scrolling': function (browser) {
    var homepage = browser.page.homepage();
    homepage.assert.attributeEquals('header', 'class', 'header');
    browser.execute('scrollTo(0,3000)');
    browser.assert.cssClassPresent('header', 'js-header--fixed');
    browser.execute('scrollTo(0,0)');
    browser.assert.cssClassNotPresent('header', 'js-header--fixed');
    browser.end();
  },

  'Checks if external links works': function (browser) {
    var homepage = browser.page.homepage();
    homepage.expect.element('.projects__overview .project:last-child .project__title').text.to.equal('CONTACT LIST');
    homepage.expect.element('@viewContactListSiteButton').text.to.equal('VIEW SITE');
    homepage.expect.element('@viewContactListSourceButton').text.to.equal('VIEW SOURCE');
    homepage.click('@viewContactListSiteButton');
    browser.url('http://contacts.skibinska.co.uk/contacts');
    browser.back();
    browser.assert.urlEquals('http://localhost:8000/');
    browser.end();
  },

  'Checks mobile view': function (browser) {
    browser.resizeWindow(320, 517);
    browser.expect.element('.employers').to.not.be.visible;
    browser.expect.element('.nav__icon').to.be.visible;
    browser.end();
  },

  'Checks navigation on mobile': function (browser) {
    browser.resizeWindow(320, 517);
    browser.click('.nav__icon').expect.element('.navigation').to.be.visible;
    browser.expect.element('.navigation__item:nth-child(3)').text.to.equal('CONTACT');
    // browser.click('.navigation__item:nth-child(3) a');
    browser.click('.nav__icon').expect.element('.navigation').to.not.be.visible;
    browser.end();
  }

};
