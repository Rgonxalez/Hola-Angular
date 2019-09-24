//es un evento que se ejecuta pero cuando se carguen todos los elementos del HTML DOM

window.onload =function(){
    //va todo nuestro codigo que queramos ejecutar

    var body=document.querySelector("body");
    body.style.cursor="url('./img/iconfinder_website_-_pencil_3440848.png') 20 100, auto";


    //var lapicero=document.getElementById("lapicero");


    //va a ser el evento cuando nosotros movamos el mouse
    body.onmousemove=function(e){

        console.log(`la posicion x =>${e.offsetX}`
        );

        console.log(`la posicion en y => ${e.offsetY}`
        );


      
        // lapicero.style.left = `${e.offsetX-26}px`;
        // lapicero.style.top = `${e.offsetY-100}px`;




        var punto=document.createElement("div");

        punto.style.width = "2px";
        punto.style.height = "2px";
        punto.style.borderRadius = "50%";

        punto.style.backgroundColor = "lightblue";

        punto.style.position="absolute";
        punto.style.left=`${e.offsetX}px`;
        punto.style.top=`${e.offsetY}px`;

        punto.style.boxShadow="0 0 6px #fff";

        this.appendChild(punto);
        

    }

}