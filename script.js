//Desaparecer en mensaje principal del chat despues de x segundos
$(document).ready(function () {
  setTimeout(function () {
    $("#msgPrincipal").fadeOut(1500);
  }, 5000);
});


$(function () {

  var flag = 0;
  var flag1 = 0;

  //Funcion para cerrar el chat desde la X
  $('#btnCerrar').on('click', function () {
    document.getElementById('ifr1').style.display = 'none';
    flag = 0;
  });

//controlar el abrir y cerrar el chat desde el boton
  $('.share, .contenido').on('click', function () {

    if (flag == 0) {
      $('.one iframe').delay().fadeIn();

      //---------------cerrar la ventana modal-----------------------------
      document.getElementById("modal").style.display = "none";
      //---------------cerrar la ventana modal-----------------------------
      
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




