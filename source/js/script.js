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

//Кнопки
function removePreview(num) {
  queue = queue.filter(function (element) {
    return element.num != num;
  });
  num.parentNode.removeChild(num);
}
var elements = document.querySelectorAll(".page-form-travel__wrap-js");
for (var i = 0; i < elements.length; i++) {
  initNumberField(elements[i]);
}

  function initNumberField(parent) {
    var input = parent.querySelector("input");
    var minus = parent.querySelector(".page-form-travel__form-btn--minus");
    var plus = parent.querySelector(".page-form-travel__form-btn--plus");

    minus.addEventListener("click", function (c) {
      c.preventDefault();
      changeNumber(false);
    });

    plus.addEventListener("click", function (c) {
      c.preventDefault();
      changeNumber(true);
    });

    function changeNumber(operation) {
      var value = Number(input.value);
      if (isNaN(value)) {
        value = 0;
      }
      if (operation) {
        input.value = value + 1;
      } else {
        input.value = value - 1;
      }
    }
  }

//Форма

(function() {
  if(!('FormData' in window)) {
    return;
  }

  var form = document.querySelector('.page-form-all');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    var data = new FormData(form);

    request(data, function(response) {
      console.log(response);
    });
  });

  function request(data, fn) {
    var xhlh = new XMLHttpRequest();
    var time = (new Date()).getTime();

    xhlh.open('post', 'https://echo.htmlacademy.ru/adaptive?' + time);

    xhlh.addEventListener('readystatechange', function() {
      if(xhlh.readyState == 4) {
        fn(xhlh.responseText);
      }
    });

    xhlh.send(data);

  }
})();

