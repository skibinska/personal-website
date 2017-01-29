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
  function toggleFixedHeader () {
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
  }
  function addListenerToSelector (selector) {
    var arrayOfElements = document.querySelectorAll(selector);
    Array.apply(null, arrayOfElements).forEach(function (element) {
      element.addEventListener('click', function (e) {
        e.preventDefault();
        var target = document.getElementById(element.getAttribute('href').slice(1));
        /* Check if the browser is Firefox, in which case documentElement is used to select the html document */
        var body = navigator.userAgent.indexOf('Firefox') > -1 ? document.documentElement : document.body;
        scroll(body, target.offsetTop, 500);
      });
    });
  }
  function scroll (element, toPosition, duration) {
    if (duration <= 0) { return; }
    var distance = toPosition - element.scrollTop;
    var tick = distance / duration * 10;
    setTimeout(function () {
      element.scrollTop += tick;
      scroll(element, toPosition, duration - 10);
    }, 10);
  }
  navIcon.addEventListener('click', toggleClass);
  window.addEventListener('scroll', toggleFixedHeader);
  addListenerToSelector('.intro--paragraph-pink');
  addListenerToSelector('.btn--intro');
  window.onload = addListenerToSelector('.navigation--item a');
})();
