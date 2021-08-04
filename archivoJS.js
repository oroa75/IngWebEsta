

    function onclickenbutton(msj) {
        saludo ="Hola \n Bienvenido a Javascript: "+msj;
        alert(saludo);
    }

    $(document).ready(function() {
    $( ".miclase" ).click(function() {
        let text= $(this).val();
        onclickenbutton( text );
      });
    });


   //2
/* se cambia por jquery el onload y el llamado al button

    window.onload = function(){
        document.getElementById('buttonEnviar').onclick = function()
   {
    onclickenbutton(" mis amigos");
   }
      
    };
    */