(function() {
  var header = document.querySelector('.header');
  var headerHeight = header.offsetHeight;
  document.onscroll = function() {
    if (window.scrollY > 360) {
      header.classList.add('header--fixed');
    } else {
      header.classList.remove('header--fixed');
    }
    if (window.scrollY > 420) {
      document.body.classList.add('logo--bg');
    } else {
      document.body.classList.remove('logo--bg');
    }
  }
})();
