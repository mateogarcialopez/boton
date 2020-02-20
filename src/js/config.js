//------------------------------------------------------------------- CONFIGURACIÓN ------------------------------------------------------------------------------

  //MODIFICAR EL SIGUIENTE SELECTOR INCLUYENDO TODOS LOS ELEMENTOS QUE ABREN LA VENTANA DEL CHAT.
  //El selector es un selector CSS, cada selector de eir separado por comas y dentro de la cadena de texto.
  //.share selecciona el botón flotante. Los demás selectores corresponden a todos los elementos en la página que quieran abrir el chat. Se incluye por defecto el modal inicial y el enlace desde el carrusel principal
  export var opens_chat =   $('.share, .cuerpoPortalesChec, #dnn_ctr505_ViewEasyDNNGallery_ctl00_repImageSlider_imgImageSlider_2') 
  //FIN SELECTOR


  //MODIFICAR EL SIGUIENTE SELECTOR CON EL ID DEL MODAL INICIAL PARA CERRARLO AL HACER CLICK EN ÉL
  export var dialog_id = "modal"


  //------------------------------------------------------------------- FIN CONFIGURACIÓN ------------------------------------------------------------------------------