interface iProducto{
    codigo:number;
    nombre:string;
    inventario:number;

    sumarInventario(cantidad:number):number;

}

    class Producto implements iProducto{

        public codigo:number;
        public nombre:string;
        public inventario:number;
        private id:string = "qwerty123";

        constructor(codigo:number,nombre:string,inventario:number)
        {

            this.codigo=codigo;
            this.nombre=nombre;
            this.inventario=inventario;

        }


        get Id():string {

            return this.id;

        }

        sumarInventario(cantidad:number):number{

            this.inventario = this.inventario+cantidad;
            return this.inventario;
        }


    }

    let mouse:Producto = new Producto(1,"Mouse Logitech",20);
    
    let inventarioFinal:number = mouse.sumarInventario(30);
    console.log(inventarioFinal);

    console.log(mouse.Id);