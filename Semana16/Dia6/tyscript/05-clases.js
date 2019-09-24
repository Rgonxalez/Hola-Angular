class Producto {
    constructor(codigo, nombre, inventario) {
        this.id = "qwerty123";
        this.codigo = codigo;
        this.nombre = nombre;
        this.inventario = inventario;
    }
    get Id() {
        return this.id;
    }
    sumarInventario(cantidad) {
        this.inventario = this.inventario + cantidad;
        return this.inventario;
    }
}
let mouse = new Producto(1, "Mouse Logitech", 20);
let inventarioFinal = mouse.sumarInventario(30);
console.log(inventarioFinal);
console.log(mouse.Id);
