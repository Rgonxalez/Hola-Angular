class Comprobante{

    comprobante_id = 0;
    comprobante_fecha = new Date();
    comprobante_total = 0;
    comprobante_detalle = [];

    constructor(comp_id,comp_fecha){

        this.comprobante_id = comp_id;
        this.comprobante_fecha = comp_fecha;

    }

    anadirDetalle(objProducto)
    {
        this.comprobante_detalle.push(objProducto);

    }

    mostrarFechaComprobante(){

        console.log(this.comprobante_fecha);

    }


    mostrarComprobante(){

            console.log("Resumen Comprobante",this);


    }


    calcularSubTotal(cantidad,prec_unit){

        return cantidad*prec_unit;

    }

}