window.onload=function(){

    var btnDescargar=document.getElementById("btnDescargar");

    var progressBar=document.getElementById("idProgreso");


    btnDescargar.onclick=function(){

        var xhr = new XMLHttpRequest();
        console.log(xhr);

        xhr.open("GET","https://i.imgur.com/WuGUUnL.jpg");

        xhr .responseType="text";

        xhr.onprogress=function(e){


            console.log(e);

            if(e.lengthComputable){

                var porcentaje = (e.loaded / e.total)*100;

                progressBar.style.width =`${porcentaje}%`;

            }


        }

      

        xhr.onloadstart = function(){

            console.log("Esta iniciando la carga del archivo");
        }

        xhr.onload = function(){

            console.log("esta cargando el archivo");

        }

        xhr.onloadend = function(){

            console.log("la carga ha finalizado");

        }


        
    }









}