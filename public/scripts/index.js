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
    var intro = document.querySelector('.intro');
    var parallaxHeight = parallax.offsetHeight;
    if (document.body.scrollTop >= parallaxHeight) {
      console.log(document.body.scrollTop, ' scrollTop');
      header.classList.remove('js-slide-up');
      header.classList.add('js-header--fixed', 'js-slide-down');
      intro.style.paddingTop = '90px';
    } else {
      header.classList.remove('js-header--fixed', 'js-slide-down');
      header.classList.add('js-slide-up');
      intro.style.paddingTop = '0px';
    }
  };
  navIcon.addEventListener('click', toggleClass);
  window.addEventListener('scroll', toggleFixedHeader);
})();
