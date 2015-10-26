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
