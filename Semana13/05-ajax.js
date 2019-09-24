
    function llenarDatosDataTable(){

        var tablaProductos = $('#listaProductos');
        tablaProductos.DataTable({
            "ajax":{
                type:"GET",
                url:"https://5d4b6adb00dbb10014879b12.mockapi.io/productos",
                timeout:1500,
                dataSrc:""

            },
            "columns":[

                {data:"prod_nom"},
                {data:"prod_desc"},
                {data:"prod_prec"}
            ],

            "language":{

                "lengthMenu":"Mostrando _MENU_ elementos",
                "search":"Buscar"
            }

        });
    }

    
    function imprimirServicios(arregloServicios){

        var divRow = $(`.row`);
        var tabla = `<table id="tablaServicios" class="table"> 
                    <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Precio</th>
                                <th>Imagen</th>
                            </tr>
                    </thead>
                    </table>`;

        divRow.html(tabla);

        var tablaServicios = $(`#tablaServicios`);
        var tbody = `<tbody id="tbody"></tbody>`
        tablaServicios.append(tbody);
        var tbodyServicios = $("tbody");

        arregloServicios.forEach(function(servicios){

            var tr = $('<tr></tr>');
            var td1 = $(`<td>${servicios.serv_nom}</td>`);
            var td2 = $(`<td>${servicios.serv_desc}</td>`);
            var td3 = $(`<td>${servicios.serv_price}</td>`);
            var img = $(`<img src="${servicios.serv_img}" width="150px"/>`);
            var td4 = $(`<td></td>`);

            td4.append(img);
            


            tr.append(td1).append(td2).append(td3).append(td4);
            tbodyServicios.append(tr);


        });

            tablaServicios.DataTable();


    }



    function obtenerServicios(){
    $.ajax({
        type:"GET",
        url:"http://mockapi.com/jfsnduifhsduifdsi",
        url:"https://5d4b6adb00dbb10014879b12.mockapi.io/servicios",
        timeout:1000, //ms
        data:null,
        //exito!
        success:function(respuesta){
            //lo que quiera ejecutar cuando mi petición haya tenido exito

            console.log(respuesta);

            imprimirServicios(respuesta);

        },
        error:function(){
            console.log("Ha ocurrido un error, no tenemos internet");

        },

        beforeSend:function () {

            console.log("codigo que se ejecutara antes de hacer la peticion ");

        },


        complete:function(xhr){


            console.log(xhr.status);
        }




    });




}


    function crearServicios(servicio){

        $.ajax({
            
            type:"POST",
            url:"https://5d4b6adb00dbb10014879b12.mockapi.io/servicios",
            timeout:1000,
            data:JSON.stringify(servicio),
            contentType:"application/json",
            success:function(respuesta){
                
                
                console.log("respuesta");
                obtenerServicios();
            },
            
            error:function(error)
            {
                console.log(error);

            },
            beforeSend:function()
            {
                console.log("codigo ejecutado antes de enviar la DATA")
            }

        })

    }


    var anadirServicios = $("#anadirServicios");
    
        anadirServicios.click(function(e)
        {

            e.preventDefault();

            var divRow = $(".row");

            var formulario = `<form>
                                <table class="table">
                                    <tr>
                                        <td>NOMBRE</td>                                      
                                        <td><input class="form-control" "type="text" name="serv_nom"></td>
                                    </tr>
                                    <tr>
                                        <td>DESCRIPCION</td>                                    
                                        <td><input class="form-control" type="text" name="serv_desc"></td>
                                    </tr>
                                    <tr>
                                        <td>PRECIO</td>                        
                                        <td><input class="form-control" type="number" name="serv_price"></td>
                                    </tr>
                                </table>
                                <input type="submit" value="Crear" class="btn btn-primary">
                                </form>`

            divRow.html("");
            divRow.html(formulario);

            var miFormulario = $('form');
            miFormulario.submit(function(e){

                e.preventDefault();
                
                var misDatos = miFormulario.serializeArray();
                console.log("Datos form",misDatos);

                    var objServicio={};



                    misDatos.forEach(function(input){
                    objServicio[input.name] = input.value;


                    });

                    console.log(objServicio);
                    crearServicios(objServicio);
                   
                    
            

        });


    });


    llenarDatosDataTable();
    obtenerServicios();

