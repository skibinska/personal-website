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
    browser.assert.attributeEquals('header', 'class', 'header');
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
    browser.click('.nav__icon').expect.element('.navigation').to.not.be.visible;
    browser.end();
  }
};
