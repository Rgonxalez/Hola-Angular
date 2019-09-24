var titulo = $('h1');
var parrafo = $('#parrafo');
var modificarParrafo= $('#modificarParrafo');
var agregarClases = $('#agregarClases');
var agregarElementos = $('#agregarElementos');


console.log(titulo.html());


titulo.html("este titulo es mas corto");

parrafo.css("color","green").css("font-weight","bold").css("background-color","yellow");


modificarParrafo.click(function(){

        var primerparrafo = $("p:first");
        var segundoparrafo = $("p:eq(1)");

        primerparrafo.css("text-aling","justify");

        segundoparrafo.css("color","blue");


});

agregarClases.dblclick(function (){  

    $(this).removeClass("btn-info");
    //$(this).attr("class","btn btn-succes btn-block");

    $(this).addClass("btn").addClass("btn-danger").addClass("btn-block");

});

agregarElementos.click(function(){

    $('.row').prepend("<small> Este es una descripcion del titulo </small>");
    $('.row').append("<p> Hola soy un Parrafo nuevo </p>");

});

    $("p:eq(1)").click(function() { 

        $(this).toggleClass("text-danger");

     });


