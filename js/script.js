var link = document.querySelector('.page-header-menu__open-btn');
var popup = document.querySelector('.page-header-menu__popup');
var close = popup.querySelector('.page-header-menu__popup-close');

link.addEventListener('click', function(event) {
  event.preventDefault();
  popup.classList.add('page-header-menu__popup--show');
}, false);

close.addEventListener('click', function(event) {
  event.preventDefault();
  popup.classList.remove('page-header-menu__popup--show');
}, false);

window.addEventListener('keydown', function(event) {
  if (event.keyCode == 27 && popup.classList.contains('page-header-menu__popup--show')) {
    popup.classList.remove('page-header-menu__popup--show');
  }
}, false);
