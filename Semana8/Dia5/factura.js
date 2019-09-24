window.onload=function(){


    //Creamos nuestro Objeto global, para guardarlo en el LocalStorage
        var objfactura={

            fecha:'',
            nombre:'',
            direccion:'',
            dni:'',
            listadoProductos:[],
            total:''
        }

        //Empezamos a relacionar los input con nuestras variables

        var inputFecha=document.getElementById("inputFecha");
        var inputNombre=document.getElementById("inputNombre");
        var inputDni=document.getElementById("inputDni");
        var inputDireccion=document.getElementById("inputDireccion");

        var tProductos=document.getElementById("tProductos");

        var inputCant=document.getElementById("inputCant");
        var inputProd=document.getElementById("inputProd");
        var inputPrecio=document.getElementById("inputPrecio");
        var btnAgregar=document.getElementById("btnAgregar");
        var tdTotal=document.getElementById("tdTotal");

        var totalFactura = 0;

        function obtenerFactura()
        {
            var facturaTexto = localStorage.getItem("objFactura");
            var facturaJSON = JSON.parse(facturaTexto);

           var arregloProductos=facturaJSON.listadoProductos;
           //console.log(arregloProductos);

           var tr=document.createElement("tr");


            arregloProductos.forEach(function(){

                console.log(producto.precioUnitario);
                
                var td1 = document.createElement("td");

                var td2 = document.createElement("td");
                var td3 = document.createElement("td");
                var td4 = document.createElement("td");
                
                td1.innerHTML=producto.cantidad;
                td2.innerHTML=producto.producto;
                td3.innerHTML=producto.precioUnitario;
                td4.innerHTML=producto.valorVenta;

                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
            });

            tProductos.append(tr);
            

        }

        obtenerFactura();


        //estamos cambiando los valores de las propiedades del objeto factura con el valor 

        btnAgregar.addEventListener("click",function(){


            objfactura.fecha=inputFecha.value;
            objfactura.nombre=inputNombre.value;
            objfactura.dni=inputDni.value;
            objfactura.direccion=inputDireccion.value;


            var tr=document.createElement("tr");

            var td1=document.createElement("td");
            var td2=document.createElement("td");
            var td3=document.createElement("td");
            var td4=document.createElement("td");

            //Hemos obtenido los valores de los imput y los hemos agregado dentro de cada columna 
            //correspondiente para nuestro listado

            td1.innerHTML=inputCant.value;
            td2.innerHTML=inputProd.value;
            td3.innerHTML=inputPrecio.value;
            td4.innerHTML=parseInt(inputCant.value) * parseFloat(inputPrecio.value);

            totalFactura=totalFactura+parseInt(inputCant.value)*parseFloat(inputPrecio.value);

            tdTotal.innerHTML = totalFactura;

            objfactura.total=totalFactura;

            //aregamos cada columna ya con su contenido como elemento hijo de la fila
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);




            tProductos.appendChild(tr);


            //lo agregamos al arreglo de productos que tiene nuestro objFactura
            var objProducto={

                cantidad: inputCant.value,
                producto: inputProd.value,
                precioUnitario: inputPrecio.value,
                valorVenta: inputCant.value * inputPrecio.value

            }

                objfactura.listadoProductos.push(objProducto);
                console.log(objfactura);


                var facturaConvertida=JSON.stringify(objfactura);


                localStorage.setItem("objfactura",facturaConvertida);

                 inputCant.value="";
                 inputProd.value="";
                 inputPrecio.value="";



          


        })


}