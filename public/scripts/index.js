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
  function addListenersToNavLinks () {
    var navLinks = document.querySelectorAll('.navigation--item a');
    Array.apply(null, navLinks).forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        /* Get id name without # for each link */
        var target = document.getElementById(link.getAttribute('href').slice(1));
        /* Check if the browser is Firefox, in which case documentElement is used to select the html document */
        var element = navigator.userAgent.indexOf('Firefox') > -1 ? document.documentElement : document.body;
        scroll(element, target.offsetTop, 500);
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
  document.querySelector('.intro--paragraph-pink').addEventListener('click', function (e) {
    e.preventDefault();
    scroll(document.body, document.querySelector('#contact').offsetTop, 500);
  });
  document.querySelector('.btn--intro').addEventListener('click', function (e) {
    e.preventDefault();
    scroll(document.body, document.querySelector('#projects').offsetTop, 500);
  });
  navIcon.addEventListener('click', toggleClass);
  window.addEventListener('scroll', toggleFixedHeader);
  window.onload = addListenersToNavLinks;
})();
