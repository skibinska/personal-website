(function () {
  'use strict';
  var navIcon = document.querySelector('.nav--icon');
  var toggleClass = function () {
    this.classList.toggle('open');
  }.bind(navIcon);
  navIcon.addEventListener('click', toggleClass);
})();
