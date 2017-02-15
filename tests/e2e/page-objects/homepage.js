'use strict';

module.exports = {
  url: function () {
    return this.api.launchUrl;
  },
  elements: {
    viewSiteButton: {
      selector: '.projects__overview .project:last-child .project__links .btn:first-child'
    },
    viewSourceButton: {
      selector: '.projects__overview .project:last-child .project__links .btn:last-child'
    }
  }
};
