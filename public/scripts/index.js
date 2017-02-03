(function () {
  'use strict';
  var PersonalWebsite = {
    props: {
      header: null,
      navIcon: null
    },
    init: function () {
      this.props.header = document.querySelector('.header');
      this.props.navIcon = document.querySelector('.nav__icon');

      this.bindEvents();
    },
    bindEvents: function () {
      window.addEventListener('scroll', PersonalWebsite.toggleFixedHeader);
      PersonalWebsite.props.navIcon.addEventListener('click', PersonalWebsite.toggleClass);
      PersonalWebsite.addScrollToElement('.intro__paragraph-pink');
      PersonalWebsite.addScrollToElement('.btn__intro-projects');
      PersonalWebsite.addScrollToElement('.navigation__item a');
    },
    toggleClass: function () {
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
        PersonalWebsite.props.header.style.paddingBottom = '40px';
      } else {
        PersonalWebsite.props.header.style.paddingBottom = '0px';
      }
    },
    toggleFixedHeader: function () {
      var intro = document.querySelector('.intro');
      var headerHeight = PersonalWebsite.props.header.offsetHeight;
      var parallaxHeight = document.querySelector('.parallax').offsetHeight;
      if (document.body.scrollTop >= parallaxHeight) {
        PersonalWebsite.props.header.classList.remove('js-slide-up');
        PersonalWebsite.props.header.classList.add('js-header--fixed', 'js-slide-down');
        intro.style.paddingTop = headerHeight + 'px';
      } else {
        PersonalWebsite.props.header.classList.remove('js-header--fixed', 'js-slide-down');
        PersonalWebsite.props.header.classList.add('js-slide-up');
        intro.style.paddingTop = '0px';
      }
    },
    addScrollToElement: function (selector) {
      var arrayOfElements = document.querySelectorAll(selector);
      Array.apply(null, arrayOfElements).forEach(function (element) {
        element.addEventListener('click', function (e) {
          e.preventDefault();
          var target = document.getElementById(element.getAttribute('href').slice(1));
          /* Check if the browser is Firefox, in which case documentElement is used to select the html document */
          var body = navigator.userAgent.indexOf('Firefox') > -1 ? document.documentElement : document.body;
          PersonalWebsite.scroll(body, target.offsetTop, 500);
        });
      });
    },
    scroll: function (element, toPosition, duration) {
      if (duration <= 0) { return; }
      var distance = toPosition - element.scrollTop;
      var tick = distance / duration * 10;
      setTimeout(function () {
        element.scrollTop += tick;
        PersonalWebsite.scroll(element, toPosition, duration - 10);
      }, 10);
    }
  };
  PersonalWebsite.init();
})(window);
