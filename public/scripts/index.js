(function () {
  'use strict';
  var navIcon = document.querySelector('.nav--icon');
  var header = document.querySelector('.header');
  var toggleClass = function () {
    var navigation = document.querySelector('.navigation');
    var isOpen = false;
    this.classList.toggle('active');
    if (navigation.classList.contains('active')) {
      navigation.classList.remove('active', 'js-slide-down');
      navigation.classList.add('js-slide-up');
      isOpen = false;
    } else {
      navigation.classList.remove('js-slide-up');
      navigation.classList.add('active', 'js-slide-down');
      isOpen = true;
    }
    if (window.innerWidth < 768 && isOpen === true) {
      header.style.paddingBottom = '40px';
    } else {
      header.style.paddingBottom = '0px';
    }
  }.bind(navIcon);
  var toggleFixedHeader = function () {
    var parallax = document.querySelector('.parallax');
    var intro = document.querySelector('.intro');
    var parallaxHeight = parallax.offsetHeight;
    var headerHeight = header.offsetHeight;
    if (document.body.scrollTop >= parallaxHeight) {
      header.classList.remove('js-slide-up');
      header.classList.add('js-header--fixed', 'js-slide-down');
      intro.style.paddingTop = headerHeight + 'px';
    } else {
      header.classList.remove('js-header--fixed', 'js-slide-down');
      header.classList.add('js-slide-up');
      intro.style.paddingTop = '0px';
    }
  };
  navIcon.addEventListener('click', toggleClass);
  window.addEventListener('scroll', toggleFixedHeader);
})();
