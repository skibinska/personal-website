'use strict';

module.exports = {
  url: function () {
    return this.api.launchUrl;
  },
  elements: {
    viewContactListSiteButton: {
      selector: '.projects__overview .project:last-child .project__links .btn:first-child'
    },
    viewContactListSourceButton: {
      selector: '.projects__overview .project:last-child .project__links .btn:last-child'
    }
  }
};
