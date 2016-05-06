(function() {
  var header = document.querySelector('.header');
  var headerHeight = header.offsetHeight;
  document.onscroll = function() {
    if (window.scrollY > 360) {
      header.classList.add('header--fixed');
    } else {
      header.classList.remove('header--fixed');
    }

  }
})();
