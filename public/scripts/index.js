var PersonalWebsite = (function (document, window) {
  'use strict';
  var PersonalWebsite = function () {
    var header, hamburgerIcon;

    init();

    function init () {
      header = document.querySelector('.header');
      hamburgerIcon = document.querySelector('.nav__icon');

      bindEvents();
    }

    function bindEvents () {
      window.addEventListener('scroll', toggleFixedHeader);
      hamburgerIcon.addEventListener('click', toggleHeaderAnimation);
      addScroll('.intro__paragraph-pink');
      addScroll('.navigation__item a');
    }

    function toggleFixedHeader () {
      var intro = document.querySelector('.intro');
      var headerHeight = header.offsetHeight;
      var parallaxHeight = document.querySelector('.parallax').offsetHeight;
      if (document.body.scrollTop >= parallaxHeight) {
        header.classList.remove('js-slide-up');
        header.classList.add('js-header--fixed', 'js-slide-down');
        intro.style.paddingTop = headerHeight + 'px';
      } else {
        header.classList.remove('js-header--fixed', 'js-slide-down');
        header.classList.add('js-slide-up');
        intro.style.paddingTop = '0px';
      }
    }

    function toggleHeaderAnimation () {
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
      resizeHeaderOnMobile(isOpen);
    }
    /**
    *  @param {Boolean} isOpen
    **/
    function resizeHeaderOnMobile (isOpen) {
      if (window.innerWidth < 768 && isOpen === true) {
        header.classList.add('active');
      } else {
        header.classList.remove('active');
      }
    }

    /**
    *  @param {String} selector
    **/
    function addScroll (selector) {
      var arrayOfElements = document.querySelectorAll(selector);
      Array.apply(null, arrayOfElements).forEach(function (element) {
        element.addEventListener('click', function (e) {
          e.preventDefault();
          var target = document.getElementById(element.getAttribute('href').slice(1));
          scroll(document.body, target.offsetTop, 300);
        });
      });
    }
    /**
    *  @param {HTMLElement} element
    *  @param {HTMLElement} toPosition
    *  @param {Number} duration
    **/
    function scroll (element, toPosition, duration) {
      if (duration <= 0) { return; }
      var distance = toPosition - element.scrollTop;
      var tick = distance / duration * 10;
      setTimeout(function () {
        element.scrollTop += tick;
        scroll(element, toPosition, duration - 10);
      }, 10);
    }
  };
  return PersonalWebsite;
})(document, window);

document.addEventListener('DOMContentLoaded', function () {
  var pw = new PersonalWebsite();
});
