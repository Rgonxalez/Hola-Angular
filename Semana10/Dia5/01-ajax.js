window.onload=function(){


        var btnTraerDatos = document.getElementById("btnTraerDatos");

        var tabla = document.getElementById("tabla");

        //esta funcion va a recibir los datos de la Api (regres) y en la 
        //tabla colocara los datos recibidos
        function ponerDatos(personas){

                tabla.innerHTML=`<thead>
                                
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Correo</th>
                        <th>Foto</th>
                
                </thead>`

            var tbody = document.createElement("tbody");
            tabla.appendChild(tbody);

            personas.forEach( function(persona){
                
                var tr = document.createElement("tr");

                var tdId = document.createElement("td");
                tdId.innerHTML=persona.id;
                tr.appendChild(tdId);


                var tdNombre=document.createElement("td");
                tdNombre.innerHTML=persona.first_name;
                tr.appendChild(tdNombre);


                var tdApellido=document.createElement("td");
                tdApellido.innerHTML=persona.last_name;
                tr.appendChild(tdApellido);

                var tdCorreo=document.createElement("td");
                tdCorreo.innerHTML=persona.email;
                tr.appendChild(tdCorreo);

                var avatar = document.createElement("img");
                avatar.setAttribute("src",persona.avatar);

                var tdImagen= document.createElement("td");
                tdImagen.appendChild(avatar);
                tr.appendChild(tdImagen);


                tbody.appendChild(tr);

            });
                
            

        }

        

        btnTraerDatos.onclick = function(){

            //creando mi objeto xhr
            var xhr = new XMLHttpRequest();

            console.log(xhr);

            //devolvera el estado actual del objeto

            console.log("readyState",xhr.readyState);



            //estara pendiente del readyState
            xhr.onreadystatechange = function(){

                switch(xhr.readyState){

                    case 1:

                    console.log("se ha ejecutado la funcion open()");
                    break;

                    case 2: 

                    console.log("Se ha disparado una peticion Http");
                    break;

                    case 3:
                    
                    console.log("ya estamos descargando los datos");
                    break;

                    case 4:

                    console.log("ya tenemos los datos, la operacion termino");
                    console.log("el codigo de estado es: " + xhr.status);

                    var json = JSON.parse(xhr.responseText);



                    console.log("el contenido de la solicitud es:",json.data);
                    ponerDatos(json.data);


                    
                    break;
                    

                    default:
                    
                    console.log("Error Inesperado");
                        

                }

            }

            // Recibira como variable la direccion de la API que nos dara los datos
            // GET , POST es el tipo de Peticion
            // Llegara has ta 1 (readyState)
            xhr.open("GET","https://reqres.in/api/users?page=2");

            // Segun lo que hayamos configurado en .open ejecutara la solicitud http
            xhr.send(null);


            
            


        }




}