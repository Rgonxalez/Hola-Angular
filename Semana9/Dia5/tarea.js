window.onload = function(){

    var tbody = document.getElementById("tbody");
    var inputBuscar=document.getElementById("buscar");

    var personas = [
        {
            id: 1,
            nombres: 'Patrick',
            apellidos: 'Rodriguez',
            edad: 27
        },
        {
            id:2,
            nombres: 'Jorge',
            apellidos: 'Garnica',
            edad:27
        },
        {
            id:3,
            nombres: 'Jorge Osmar',
            apellidos: 'Montesinos Aramayo',
            edad:28
        },
        {
            id:4,
            nombres:'Christian',
            apellidos:'Cabrera',
            edad:26
        },
        {
            id:5,
            nombres:'Azucena',
            apellidos:'Rodriguez',
            edad:42
        }
    ];


  

    function rellenarCeldas(arregloPersonas){

        var personasConsideradas=[];

        if(arregloPersonas != null){

            personasConsideradas= arregloPersonas;
        }

        else{

            personasConsideradas=personas;
        }
        
        var tr = " ";

        


        personasConsideradas.forEach(function(persona){
            
            tr = tr + `<tr>
          
        
                            <td>${persona.id}</td>
                            <td>${persona.nombres}</td>
                            <td>${persona.apellidos}</td>
                            <td>${persona.edad}</td>
    
    
                       </tr>`

            
        });
    
        tbody.innerHTML=tr;
        

    }
        rellenarCeldas();
    

    inputBuscar.onkeyup=function(e){
        

        console.log(e.target.value);

        var textoFiltrado=this.value;

        var filtrado=personas.filter(function(persona){

           //va devolver un arreglo con todo lo que hemos filtrado

            return persona.nombres.toLowerCase().includes(textoFiltrado.toLowerCase())||
                   persona.apellidos.toLowerCase().includes(textoFiltrado.toLowerCase())||
                 persona.edad == (parseInt(textoFiltrado));
        });
    
      
        rellenarCeldas(filtrado);

    }


}