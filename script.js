$(document).ready(function () {
  setTimeout(function () {
    $("#msgPrincipal").fadeOut(1500);
  }, 6000);
});


$(function () {

  var flag = 0;
  var flag1 = 0;

  $('#btnCerrar').on('click', function () {
    document.getElementById('ifr1').style.display = 'none';
    flag = 0;
  });


  $('.share').on('click', function () {
    console.log(flag);
    if (flag == 0) {
      $('.one iframe').delay().fadeIn();
      document.getElementById("ifr1").style.display = "block";
      document.getElementById("btnCerrar").style.display = "block";
      if (flag1 == 0) {
        document.getElementById("msgPrincipal").style.display = "block";
      } else {
        document.getElementById("msgPrincipal").style.display = "none";
      }
      document.getElementById("ifr1").style.opacity = "3";
      flag = 1;
      flag1 = 1;
    }


    else {
      $('.one iframe').delay().fadeOut();
      document.getElementById("ifr1").style.display = "none";
      document.getElementById("msgPrincipal").style.display = "none";
      flag = 0;
    }
  });
});




