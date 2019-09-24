let sumar = (a:number,b:number):number =>{
return a+b;


}

let suma:Number = sumar(4,3);

console.log(suma);

let mostrarData = (persona:any) =>{

    console.log(persona.nombre);
    console.log(persona.apellido);

}


    mostrarData({nombre:"Patrick",apellido:"Rodriguez"});