
function patrick(target,key){

    console.log("Ya pero despues me llevas a comer");

}
    
    

    
    class Persona{

        private nombre:string;
        private apellido:string;

        constructor(nombre:string, apellido:string){

            this.nombre = nombre;
            this.apellido = apellido;

        }

        @patrick
        saludar(){

            console.log(`Hola soy ${this.nombre} ${this.apellido} y me voy a consumir unas cevichelas`);

        }

            
    }

    let alumnoCodigo:Persona = new Persona("Jorge","Garnica");
    alumnoCodigo.saludar();