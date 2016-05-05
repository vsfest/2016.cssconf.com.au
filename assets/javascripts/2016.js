(function() {
  var header = document.querySelector('.header');
  var headerHeight = header.offsetHeight;
  document.onscroll = function() {
    if (window.scrollY > headerHeight) {
      header.classList.add('header--off-screen');
    } else {
      header.classList.remove('header--off-screen');
    }
    if (window.scrollY > 540) {
      header.classList.add('header--fixed');
    } else {
      header.classList.remove('header--fixed');
    }

  }
})();
