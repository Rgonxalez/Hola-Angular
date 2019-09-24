window.onload = () =>{

    var mapGoogle;
    let divMapa = document.getElementById("mapa");




    function InicializandoFirebase() {  


    var firebaseConfig = {
        apiKey: "AIzaSyCmDT4IDg2dHM836j4hqeDh8aBxnSM3LCo",
        authDomain: "parking-6dc12.firebaseapp.com",
        databaseURL: "https://parking-6dc12.firebaseio.com",
        projectId: "parking-6dc12",
        storageBucket: "",
        messagingSenderId: "335233529773",
        appId: "1:335233529773:web:e155392fc2b47c54779324"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

    }

    InicializandoFirebase();


    function ConfigurarMaps() {

        mapGoogle = new google.maps.Map(divMapa,{

            center:{lat:-16,lng:-71},
            zoom:9
        });

        listenerMaps();

      }

        let crearNuevoParqueo = (lat,lng) =>{

            $('#modal').modal('show');

            let inputNombre = $('#inputNombre').val();
            let inputDireccion = $('#inputDireccion').val();
            let inputDescripcion = $('#inputDescripcion').val();
            let btnCrear = $(`#btnCrear`);


            btnCrear.click(()=>{

                let referencia = firebase.database().ref("Parking");
                const Nuevo_id = referencia.push().key;

                referencia.child(Nuevo_id).set(

                    {
                        nombre: inputNombre,
                        direccion: inputDireccion,
                        descripcion:inputDescripcion,
                        lat:lat,
                        lng:lng

                    },

                    error =>{

                        if(error){

                            console.log(error);
                        }

                    }
                )

            })


        }


      let listenerMaps = () =>{

        mapGoogle.addListener("click",coords => {

            let lat = coords.latLng.lat();
            let lng = coords.latLng.lng();

            console.log(lat,lng);
            crearNuevoParqueo(lat,lng);
        });

      }


      function ImprimirMarcadores(arregloMarcadores) {


        arregloMarcadores.forEach(({nombre,direccion,descripcion,lat,lng})=>{

            let miLatLng ={

                lat:lat,
                lng:lng
            }

            let marcador = new google.maps.Marker({
                position: miLatLng,
                icon:
                {
                     url:'./parking.png',scaledSize: new google.maps.Size(50,50)
                },

                title:nombre    
            });

            let info = new google.maps.InfoWindow({

                content: `<h4>${nombre}</h4>
                          <br/>
                          <strong>Direccion:</strong>${direccion}
                          <br/>
                          <strong>Descripcion:</strong>${descripcion}`

            })
            marcador.addListener("click",()=>{

                info.open(mapGoogle,marcador);

            })

            marcador.setMap(mapGoogle);

        });





        }

        function ObtenerParking() {

            let referencia = firebase.database().ref("Parking");

            referencia.on("value", data =>{


                let arregloData =[];

                data.forEach(espacio =>{
                    // console.log(espacio);
                    // console.log(espacio.val().nombre);
                    // console.log(espacio.val().direccion);
                    // console.log(espacio.val().descripcion);
                    // console.log(espacio.val().lat);
                    // console.log(espacio.val().lon);

                    let objTemporal = {
                        nombre:espacio.val().nombre,
                        direccion:espacio.val().direccion,
                        descripcion:espacio.val().descripcion,
                        lat:espacio.val().lat,
                        lng:espacio.val().lng

                    }

                    arregloData.push(objTemporal);
                    ImprimirMarcadores(arregloData);
                });
            });

          }


      ObtenerParking();
      ConfigurarMaps();



};