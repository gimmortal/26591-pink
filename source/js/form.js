(function() {
  var plus = document.querySelector(".page-form-travel__form-btn--plus");
  var minus = document.querySelector(".page-form-travel__form-btn--minus");
  var periods = document.querySelector("#travel-date");

  if (plus) {
    plus.addEventListener("click", function(event) {
      var daysCount = parseInt(periods.value, 10);
      event.preventDefault;
      daysCount++;
      if (daysCount > 366) {
        daysCount = 366;
      }
      periods.value = daysCount + " " + days(daysCount);
    });
  }

  if (minus) {
    minus.addEventListener("click", function(event) {
      event.preventDefault;
      var daysCount = parseInt(periods.value, 10);
      daysCount--;
      if(daysCount < 0) {
        daysCount = 0;
      }
      periods.value = daysCount + " " + days(daysCount);
    });
  }

  function days(daysCount) {
    if ((daysCount > 10) && (daysCount <= 20)) {
      return("дней");
    }
    var strCounter = String(daysCount);
    var lastDigit = strCounter[strCounter.length-1];
    switch (lastDigit) {
      case "1":
        return("день");
        break;
      case "2":
      case "3":
      case "4":
        return("дня");
        break;
      default:
        return("дней");
    }
  }
})();




//Travellers field controls
(function() {
  var moarCompanions = document.querySelector(".page-form-people__form-btn--plus");
  var lessCompanions = document.querySelector(".page-form-people__form-btn--minus");
  var companions = document.querySelector("input[name='travel-people__continuance']");
  var humans = "чел.";

  if (moarCompanions) {
    moarCompanions.addEventListener("click", function(event) {
      event.preventDefault;
      var companionsCount = parseInt(companions.value, 5);
      companionsCount++;
      if (companionsCount > 5) {
        companionsCount = 5;
        confirm("Регистрация только не более 5 человек");
      }
      companions.value = companionsCount + " " + humans;

      var travellersTable = document.querySelector("#travellers-table").innerHTML;
      var tableHolder = document.querySelector("#table-holder");
      tableHolder.innerHTML += travellersTable;
      var number = document.querySelectorAll(".page-form-people__btn");
      var ordinal = 1;
      for(i = 0; i < number.length; i++) {
        number[i].innerHTML = ordinal++;
      }
    });
  }

  if (lessCompanions) {
    lessCompanions.addEventListener("click", function(event) {
      event.preventDefault;
      var companionsCount = parseInt(companions.value, 5);
      companionsCount--;
      if (companionsCount < 0) {
        companionsCount = 0;
      }
      companions.value = companionsCount + " " + humans;

      var travellersTable = document.querySelector("#travellers-table").innerHTML;
      var tableHolder = document.querySelector("#table-holder");
      var lastTable = document.querySelector(".people-table:last-of-type");
      if (lastTable) {
        tableHolder.removeChild(lastTable);
      }
    });
  }

  var deleteTable = document.querySelector(".page-form-people__form-btn-delete");
  if (deleteTable) {
    deleteTable.addEventListener("click", function(event) {
      event.preventDefault;
      var table = document.querySelector(".travellers");
      deleteTable.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(table);
    });
  }
})();
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

