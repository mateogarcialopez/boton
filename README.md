# Chatbot Lucy para Web
## Documentación

### Instalación
Para instalar el módulo, se deben añadir el directorio **src** en el directorio raiz de la página web.
Adicionalmente se deben añadir el siguiente código en la página en la que se quiere habilitar el botón del chat.
```
<!--Chat-->
  <div class="one">

    <div id="btnCerrar" style="display: none;">
      <i class="fa fa-times" aria-hidden="true"></i>
    </div>

    <div id="msgPrincipal" style="display: none;">
      <div><img src="./src//assets/img/chec.jpg" alt="" id="imgMsgPrincipal"></div>
      <div id="txtMsgPrincipal">Hola, soy Lucy tu asesora virtual, salúdame para iniciar una conversación</div>
    </div>
    <iframe id="ifr1"
      src='https://webchat.botframework.com/embed/produccionLucy?s=zEJLy6zJHYs.8cb15NkYILu07OQwxVE_-AH06On6Bdus5m0HOiHSH0k'></iframe>
  </div>
  <img title="Chatea Conmigo" class="share"
    src="https://lh3.googleusercontent.com/-pok8_tK_ayw/XR4R6-KzFMI/AAAAAAAAAPY/jOYwjGrVWM0cO4hANSGnNToK5IVgm-iNgCK8BGAs/s0/2019-07-04.jpg">
  <!--Chat-->

  <!-- Dependencies import -->
  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'> </script>
  <script src="./src/js/script.js" type="module"></script>
  <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"
    integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
  <!-- Dependencies import -->
```
Para mejorar el rendimiento se recomienda que el fragmento de código `Dependencies import` se ubique al final de la etiqueta `<body>`

### Configuración 
Para configurar el módulo se debe acceder al directorio *src/js/config.js*.

#### Opens Chat
La variable `opens_chat` agrupa todos los posibles elementos de la página que harán que el modal del chat se despliegue. Para añadir o modificar los elementos que abren el modal del chat, se debe editar el selector `jQuery` que inicializa la variable indicada anteriormente.
_El formato de selección es de tipo Selector jQuery_
**NO ELIMINAR EL SELECTOR .share**
**Ejemplo:**
```
export var opens_chat =   $('.share, .cuerpoPortalesChec, #boton1, .clase_boton2')
```

#### Modal
La variable `dialog_id` comprende el selector del modal inicial que debe cerrarse para abrir el diálogo del chat. Modificarlo por el selector adecuado que apunte al modal inicial de la página.
_El formato de selección es de tipo Selector jQuery_
```
export var dialog_id = $("#modal")
```
