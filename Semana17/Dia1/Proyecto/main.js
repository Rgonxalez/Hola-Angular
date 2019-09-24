
window.onload = function() {
    


    let btnCrearRestaurante = $(`#crearRestaurante`);
    let btnobtenerRestaurante = $(`#obtenerRestaurante`);


    function inicializandoFirebase() {


        let firebaseConfig = {
            apiKey: "AIzaSyDwTC4C_AzseknLmKMjTKprb7ghIuRVW14",
            authDomain: "restaurantes-1ecec.firebaseapp.com",
            databaseURL: "https://restaurantes-1ecec.firebaseio.com",
            projectId: "restaurantes-1ecec",
            storageBucket: "",
            messagingSenderId: "888569567818",
            appId: "1:888569567818:web:6d6ee4687182a18ff6e4b3"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig); 

    }

        inicializandoFirebase();

        function getRestaurantes() 
        //Nos conectaremos a la Base de datos 
        { 
            var referencia = firebase.database().ref("Restaurantes");

            referencia.once("value",data =>{

                //console.log(data);

                data.forEach(fila =>{

                    console.log(fila.key);
                    console.log(fila.val().nombre);
                    console.log(fila.val().direccion);

                });

                


            });

            
            
        }

        
        let crearRestaurante = () =>{

            let nombre= "Cevichelas";
            let direccion = "No se camino a Alas Peruanas";

            let referencia = firebase.database().ref("restaurantes");

            const NuevoKey = referencia.push().key;

                referencia.child(NUEVOKEY).set(
                    {
                        nombre:nombre,
                        direccion:direccion


                    },

                    error =>{

                        if(error){

                            console.log(error);
                        }

                    }



                )


        }


        btnCrearRestaurante.click(crearRestaurante);

        getRestaurantes();





}