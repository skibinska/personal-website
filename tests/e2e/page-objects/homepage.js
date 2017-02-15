'use strict';

module.exports = {
  url: function () {
    return this.api.launchUrl;
  },
  elements: {
    header: {
      selector: '.header'
    },
    intro: {
      selector: '.intro'
    },
    projects: {
      selector: '#projects'
    },
    employers: {
      selector: '.employers'
    },
    contact: {
      selector: '.contact'
    },
    footer: {
      selector: '.footer'
    },
    hamburgerIcon: {
      selector: '.header .nav__icon'
    },
    navigateToContact: {
      selector: '.navigation__item:nth-child(3) a'
    },
    contactListTitle: {
      selector: '.projects__overview .project:last-child .project__title'
    },
    contactListSiteBtn: {
      selector: '.projects__overview .project:last-child .project__links .btn:first-child'
    },
    contactListSourceBtn: {
      selector: '.projects__overview .project:last-child .project__links .btn:last-child'
    }
  },
  commands: [
    {
      validateHomepage: function () {
        return this
              .verify.visible('@header')
              .verify.visible('@intro')
              .verify.visible('@projects')
              .verify.visible('@contact')
              .verify.visible('@footer');
      }
    }
  ]
};
