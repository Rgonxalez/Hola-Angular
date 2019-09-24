$(".cuadrado").draggable();

//permite cambiar el tamaño
$(".cuadrado").resizable();
//permite reordenar mi lista 

$(".bandas").sortable({

    update:function(){

        console.log("Se ha ordenado la Lista");

    }

});

$(".cajita").draggable();

//cuando otro elemento se suelte dentro de este 
$(".cajota").droppable({

        drop:function (evento) {

            console.log("Soldado Caido");
            console.log(evento);
            $(this).css("background-color","yellow");
            $(this).css("border-radius","50%");
               
        }

});


$("#btnAnimar1").click(function () {  

    //$(".efecto1").effect("explode");

    $(".efecto1").toggle("shake",100);

});


//mostrara inforamcion de la imagen si esta contiene atributo tittle
$("#imagen").tooltip();
