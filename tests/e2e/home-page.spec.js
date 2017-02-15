'use strict';

module.exports = {
  beforeEach: function (browser) {
    browser
      .url('http://localhost:8000/')
      .waitForElementVisible('body', 1000);
  },

  'Checks if elements exist on the page': function (browser) {
    browser.assert.title('Ewelina Skibinska | Junior Front-end Web developer | Portfolio | Contact');
    browser.expect.element('.header').to.be.present;
    browser.expect.element('.intro').to.be.present;
    browser.expect.element('.projects').to.be.present;
    browser.expect.element('.employers').to.be.present;
    browser.expect.element('.contact').to.be.present;
    browser.expect.element('.footer').to.be.present;
    browser.expect.element('.nav__icon').to.not.be.visible;
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
    browser.expect.element('.projects__overview .project:last-child .project__title').text.to.equal('CONTACT LIST');
    browser.expect.element('.projects__overview .project:last-child .project__links .btn:first-child').text.to.equal('VIEW SITE');
    browser.expect.element('.projects__overview .project:last-child .project__links .btn:last-child').text.to.equal('VIEW SOURCE');
    browser.click('.projects__overview .project:last-child .project__links .btn:first-child');
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
