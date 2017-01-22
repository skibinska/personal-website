(function () {
  'use strict';
  var navIcon = document.querySelector('.nav--icon');
  var navigation = document.querySelector('.navigation');
  var toggleClass = function () {
    this.classList.toggle('active');
    if (navigation.classList.contains('active')) {
      navigation.classList.remove('active', 'js-slide-down');
      navigation.classList.add('js-slide-up');
    } else {
      navigation.classList.remove('js-slide-up');
      navigation.classList.add('active', 'js-slide-down');
    }
  }.bind(navIcon);
  navIcon.addEventListener('click', toggleClass);
})();
