//current date and time function
$(document).ready(function () {
  var interval = setInterval(function () {
    var momentNow = moment();

    $("#currentDay").html(
      momentNow.format(" YYYY MMMM DD ") +
        " " +
        momentNow.format("dddd").substring(0, 3).toUpperCase()
    );

    $("#currentTime").html(momentNow.format("A hh :mm:ss"));
  }, 100);



  //color codes the current time and future times
  function updateTime() {
    var currentHour = moment().format("hh");
    $("input").each(function () {
      var calendarHour = parseInt($(this).attr("id"));
      if (calendarHour > currentHour) {
        $(this).css("background", "red");
      } else if (calendarHour < currentHour) {
        $(this).css("background", "green");
      }
      else  {
        $(this).css("background", "grey");
      }
    });
  }
  updateTime();
  
  //Clear and refresh the page
  $("#clear").on("click", function () {
    localStorage.clear()
    window.location.href = window.location.href;
  });

  
  //save buttons
  $("#saveBtn9").on("click", function () {
    var timeDay = $(this).parent().attr("id");

    var textContent = $("#9").val().trim();

    localStorage.setItem(timeDay, textContent);

    console.log(timeDay, textContent);
  });

  $("#9am").children("input").val(localStorage.getItem("9am"));

  $("#saveBtn10").on("click", function () {
    var timeDay = $(this).parent().attr("id");

    var textContent = $("#10").val().trim();

    localStorage.setItem(timeDay, textContent);

    console.log(timeDay, textContent);
  });
  $("#10am").children("input").val(localStorage.getItem("10am"));

  $("#saveBtn11").on("click", function () {
    var timeDay = $(this).parent().attr("id");

    var textContent = $("#11").val().trim();

    localStorage.setItem(timeDay, textContent);

    console.log(timeDay, textContent);
  });
  $("#11am").children("input").val(localStorage.getItem("11am"));

  $("#saveBtn12").on("click", function () {
    var timeDay = $(this).parent().attr("id");

    var textContent = $("#12").val().trim();

    localStorage.setItem(timeDay, textContent);

    console.log(timeDay, textContent);
  });
  $("#12pm").children("input").val(localStorage.getItem("12pm"));

  $("#saveBtn1").on("click", function () {
    var timeDay = $(this).parent().attr("id");

    var textContent = $("#1").val().trim();

    localStorage.setItem(timeDay, textContent);

    console.log(timeDay, textContent);
  });
  $("#1pm").children("input").val(localStorage.getItem("1pm"));

  $("#saveBtn2").on("click", function () {
    var timeDay = $(this).parent().attr("id");

    var textContent = $("#2").val().trim();

    localStorage.setItem(timeDay, textContent);

    console.log(timeDay, textContent);
  });
  $("#2pm").children("input").val(localStorage.getItem("2pm"));

  $("#saveBtn3").on("click", function () {
    var timeDay = $(this).parent().attr("id");

    var textContent = $("#3").val().trim();

    localStorage.setItem(timeDay, textContent);

    console.log(timeDay, textContent);
  });
  $("#3pm").children("input").val(localStorage.getItem("3pm"));

  $("#saveBtn4").on("click", function () {
    var timeDay = $(this).parent().attr("id");

    var textContent = $("#4").val().trim();

    localStorage.setItem(timeDay, textContent);

    console.log(timeDay, textContent);
  });
  $("#4pm").children("input").val(localStorage.getItem("4pm"));

  $("#saveBtn5").on("click", function () {
    var timeDay = $(this).parent().attr("id");

    var textContent = $("#5").val().trim();

    localStorage.setItem(timeDay, textContent);

    console.log(timeDay, textContent);
  });
  $("#5pm").children("input").val(localStorage.getItem("5pm"));
});
