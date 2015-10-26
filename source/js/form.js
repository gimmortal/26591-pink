
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

(function(formpost) {
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

