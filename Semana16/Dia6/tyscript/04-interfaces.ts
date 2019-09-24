interface iPersona{
    nombre:string,
    apellido:string,
    dni:number,
    talla?:Number //esta propeidad va decirle que va a ser opcional
}

    let persona2:iPersona = {

        nombre:"jorge",
        apellido:"Garnica",
        dni:66666666,
    }


    let mostrarDatos = (persona:iPersona)=>{

        console.log(persona.nombre);
        console.log(persona.apellido);
        console.log(persona.dni);

            if(persona.talla)
            {
                console.log(persona.talla);
            }

    }

    let objPersona:iPersona = {

        nombre:"jorge",
        apellido:"Garnica",
        dni:66666666,
        talla:1.89
    }

        mostrarDatos(objPersona);