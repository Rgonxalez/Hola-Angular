var btn=document.getElementById("boton");


//muestra funcion anonima al recibir como parametro 'e'
// nos dara todas las propiedades del evento que se ha ejecutado


btn.onclick=function(e){

    console.log(e);
    //type es una propiedad que nos devuelve el tipo de evento
    console.log(e.type);

}


    var link = document.getElementById("hipervinculo");

    //Hay elementos con comportamientos Predefinidos
    link.onclick=function(e){

        e.preventDefault();
        
    }


        var cuadrado=document.getElementById("cuadrado");
        var redondo=document.getElementById("redondo");
        

    function click(e)
    {

        console.log(e);

        console.log(e.target);

        console.log(e.target.getAttribute("goles"));


        if(e.target.getAttribute("id") === "cuadrado")
        {

            console.log("es un cuadrado Brasileño");


        }

        else
        {
            e.target.setAttribute("goles","3");
            console.log("este es un redondo guerrero");
            console.log(e.target.getAttribute("goles"));

            
        }

        console.log(`x => ${e.clientX} Respecto a la Ventana`);
        console.log(`Y => ${e.clientX} Respecto a la Ventana`);

          //offSetX y offsetY posiciones respecto al elemento

          console.log(`X => ${e.offsetX} respecto al elemnto`);
        
          console.log(`Y => ${e.offsetY} respecto al elemnto`);
  


          if(e.altKey==true){

            console.log("Me has hecho click presionando Alt");

          }

          if(e.shiftKey === true){

            console.log("Me has hecho click presionando Shift");

          }

          if(e.ctrlKey === true){

            console.log("Me has hecho click presionando Control");

          }

          console.log(this);


    }


      
        cuadrado.onclick=click;
        redondo.onclick=click;