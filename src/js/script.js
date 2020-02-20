import { opens_chat, dialog_id } from "./config";

//Ocultar el mensaje principal del chat despues de x segundos
$(document).ready(function () {
  
});


$(function () {

  var flag = 0;
  var to;

  //Funcion para cerrar el chat desde la (X)
  $('#btnCerrar').on('click', function () {
    document.getElementById('ifr1').style.display = 'none';
    flag = 0;
  });

//Controlar el abrir y cerrar el chat desde el boton
    opens_chat.on('click', function () { 
      $("#msgPrincipal").show();

    if (flag == 0) {
      $('.one iframe').delay().fadeIn();

      dialog_id.hide(); 
      
      document.getElementById("ifr1").style.display = "block";
      document.getElementById("btnCerrar").style.display = "block";

      to = setTimeout(function () {
        $("#msgPrincipal").fadeOut(1500);
      }, 15000);

      document.getElementById("ifr1").style.opacity = "3";
      flag = 1;
    }else {
      $('.one iframe').delay().fadeOut();
      document.getElementById("ifr1").style.display = "none";
      document.getElementById("msgPrincipal").style.display = "none";
      flag = 0;
      clearTimeout(to);
    }
  });
});




