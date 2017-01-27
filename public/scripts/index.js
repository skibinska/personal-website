(function () {
  'use strict';
  var navIcon = document.querySelector('.nav--icon');
  var header = document.querySelector('.header');
  var toggleClass = function () {
    var navigation = document.querySelector('.navigation');
    this.classList.toggle('active');
    if (navigation.classList.contains('active')) {
      navigation.classList.remove('active', 'js-slide-down');
      navigation.classList.add('js-slide-up');
    } else {
      navigation.classList.remove('js-slide-up');
      navigation.classList.add('active', 'js-slide-down');
    }
  }.bind(navIcon);
  var toggleFixedHeader = function () {
    var parallax = document.querySelector('.parallax');
    var parallaxHeight = parallax.offsetHeight;
    if (document.body.scrollTop >= parallaxHeight) {
      console.log(document.body.scrollTop, ' scrollTop');
      header.classList.remove('header--default', 'js-slide-up');
      header.classList.add('js-header--fixed', 'js-slide-down');
    } else {
      header.classList.remove('js-header--fixed', 'js-slide-down');
      header.classList.add('header--default', 'js-slide-up');
    }
  };
  navIcon.addEventListener('click', toggleClass);
  window.addEventListener('scroll', toggleFixedHeader);
})();
