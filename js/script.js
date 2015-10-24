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

