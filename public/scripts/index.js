(function () {
  'use strict';
  var navIcon = document.querySelector('.nav--icon');
  var navigation = document.querySelector('.navigation');
  var toggleClass = function () {
    this.classList.toggle('active');
    if (navigation.classList.contains('active')) {
      navigation.classList.remove('active', 'slideDown');
      navigation.classList.add('slideUp');
    } else {
      navigation.classList.remove('slideUp');
      navigation.classList.add('active', 'slideDown');
    }
  }.bind(navIcon);
  navIcon.addEventListener('click', toggleClass);
})();
