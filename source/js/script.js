$(document).ready(function() {

  var owl = $("#owl-pink");

  owl.owlCarousel({
    items : 3, //10 items above 1000px browser width
    itemsDesktop : [1000,5], //5 items between 1000px and 901px
    //navigationText: false,
    pagination: false,
    navigation: false, // Show next and prev buttons
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true

  });

  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
  $(".play").click(function(){
    owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
  })
  $(".stop").click(function(){
    owl.trigger('owl.stop');
  })
});

$('.page-main-price__control').click(function(e) {
  var index = $('.page-main-price__control').index(this);
  $('.page-main-price__control').removeClass('.page-main-price__control--active');
  $(this).addClass('.page-main-price__control--active');
  $('.page-main-price__table')
    .css('margin-left', -(index * $('.page-main-price__table td').width()));
});

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
