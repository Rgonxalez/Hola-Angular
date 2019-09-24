
var productos=[
    {codigo:"0001",descripcion:"laptop Toshiba", precio:4500.00,imagen:"https://place-hold.it/100x100", existencias:45,estado:"activo"},
    {codigo:"0002",descripcion:"Mouse Razer", precio:400.00, imagen:"https://place-hold.it/100x100", existencias:20,estado:"inactivo"},
    {codigo:"0003",descripcion:"Tablet Lenovo", precio:700.00, imagen:"https://place-hold.it/100x100",existencias:30,estado:"activo"}

]

    var contenedor=document.getElementById("contenedor");

    var tabla = document.createElement("table");

    tabla.setAttribute("border","2");

    tabla.innerHTML=`<tr>
                    <th>Codigo</th>
                    <th>Descripcion</th>
                    <th>Precio</th>
                    <th>Imagen</th>
                    <th>Existencias</th>
                    <th>Estado</th>
                    </tr>`;
    

        for(var i=0;i<productos.length;i++)
        {

            var trfila=document.createElement("tr");
            // creando las 6 columnas en cada vuelta
            var tdCodigo=document.createElement("td");
            var tdDescripcion=document.createElement("td");
            var tdpPrecio=document.createElement("td");
            var tdImagen=document.createElement("td");
            var tdExistencias=document.createElement("td");
            var tdEstado=document.createElement("td");

            var imagen=document.createElement("img");
            imagen.setAttribute("src",productos[i].imagen);


            //colocando el contenido en cada td

            tdCodigo.innerHTML=productos[i].codigo;
            tdDescripcion.innerHTML=productos[i].descripcion;
            tdpPrecio.innerHTML=productos[i].descripcion;
            tdImagen.appendChild(imagen);
            tdExistencias.innerHTML=productos[i].descripcion;
            tdEstado.innerHTML=productos[i].estado;
                    if(productos[i].estado=="inactivo")
                    {

                    tdEstado.style.color="red";

                    }

                    else
                    {

                    tdEstado.style.color="green";   
                    }
    
            // INYECTANDO LOS TD dentro del TR O FILA
            trfila.appendChild(tdCodigo);
            trfila.appendChild(tdDescripcion);
            trfila.appendChild(tdpPrecio);
            trfila.appendChild(tdImagen);
            trfila.appendChild(tdExistencias);
            trfila.appendChild(tdEstado);


            // Inyactamos toodo el tr o fila en la tabla

            tabla.appendChild(trfila);

        }


    contenedor.appendChild(tabla);