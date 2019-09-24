window.onload=function(){

    var body=document.getElementById("cuerpo");
    var nombre=document.getElementById("inputNombre");
    var apellido=document.getElementById("inputApellido");
    var  color=document.getElementById("inputColor");
    var guardar=document.getElementById("inputGuardar");
    var borrar=document.getElementById("btnBorrar");



    function obtener(){

        var nombreGuardado=localStorage.getItem("nombre");
        var apellidoGuardado=localStorage.getItem("apellido");
        var colorGuardado=localStorage.getItem("color");

        //debugger;
        if(nombreGuardado && apellidoGuardado && colorGuardado)
        {


            body.style.backgroundColor=colorGuardado;
            color.value=colorGuardado;
            nombre.value=nombreGuardado;
            apellido.value=apellidoGuardado;
        }else{

            console.log(" no hay nada guardado");

        }


    }



            //obtener();


            function obtenerObjeto(){

                var objPreferenciasString=localStorage.getItem("objPreferencias");

                var objPreferenciasJson=JSON.parse(objPreferenciasString);

                console.log("Objeto Convertido",objPreferenciasJson);

                if(objPreferenciasJson){


                    body.style.backgroundColor=objPreferenciasJson.color;
                    color.value=objPreferenciasJson.color;
                    nombre.value=objPreferenciasJson.nombre;
                    apellido.value=objPreferenciasJson.apellido;
                }
                else{

                    console.log("a ocurrido un error");
                }

            }

            obtenerObjeto();


            borrar.onclick = function(){


                localStorage.removeItem("nombre");

                localStorage.removeItem("apellido");

                localStorage.removeItem("color");

                localStorage.removeItem("objPreferencias");
            }



        guardar.addEventListener("click",function(e){

            e.preventDefault();
            localStorage.setItem("nombre",nombre.value);
            localStorage.setItem("apellido",apellido.value);
            localStorage.setItem("color",color.value);



            var objPreferencias={


                nombre:nombre.value,
                apellido:apellido.value,
                color:color.value
            }

            //console.log(objPreferencias);

            var preferenciasTexto=JSON.stringify(objPreferencias);
            localStorage.setItem("objPreferencias",preferenciasTexto);

            console.log(preferenciasTexto);


            //localStorage.setItem(JSON.stringify(objPreferencias));



        });


}