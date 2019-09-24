window.onload = function () {

    let btnObtenerDatos = document.getElementById("obtenerDatos");
    let inputNombre = document.getElementById("nombre");
    let inputDireccion = document.getElementById("direccion");
    let btnEnviarDatos = this.document.getElementById("enviarDatos")



    btnObtenerDatos.onclick = function () {

        fetch("https://prueba-183a5.firebaseio.com/restaurantes.json").then((respuesta) => {

            console.log(respuesta);

            return respuesta.json();
        }).then((respuestaJson) => {

            console.log(respuestaJson);

        }).catch((error) => {

            console.log(error);
        });

    }

    btnEnviarDatos.onclick = () => {

        let nombre = inputNombre.value;
        let direccion = inputDireccion.value;


        let objRestaurante = {

            nombre: nombre,
            direccion: direccion
        }


        let configuracion = {

            method: 'POST',
            //datos que vamos a enviar al servidor
            body: JSON.stringify(objRestaurante),
            headera: { 'Content-type': 'application/json' }
        }

    

    fetch("https://prueba-183a5.firebaseio.com/restaurantes.json",configuracion).then((respuesta) => {

                                                                                return respuesta.json();
                                                                            }).then((respuestaJson) => {

                                                                                console.log(respuestaJson);

                                                                            });



    }

}


