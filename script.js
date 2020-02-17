$(function () {

  var flag = 0;

  $('.share').on('click', function () {
    if (flag == 0) {
      $('.one iframe').delay().fadeIn();
      document.getElementById("ifr1").style.display = "block";
      document.getElementById("msgPrincipal").style.display = "block";
      document.getElementById("ifr1").style.opacity = "3";
      flag = 1;
    }


    else {
      $('.one iframe').delay().fadeOut();
      document.getElementById("ifr1").style.display = "none";
      document.getElementById("msgPrincipal").style.display = "none";
      flag = 0;

      $('#msgPrincipal').delay().fadeOut();
    }
  });
});


$(document).ready(function () {
  setTimeout(function () {
    $("#msgPrincipal").fadeOut(1500);
  }, 3000);
});


