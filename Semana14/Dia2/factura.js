class Factura extends Comprobante{

    factura_igv_porcentaje = 0;
    factura_igv_total = 0;

    constructor(comp_id,comp_fecha,fact_igv){
        
        super(comp_id,comp_fecha);
        this.factura_igv_porcentaje = fact_igv;

    
    }

    recalculo(){

        
        let total = 0;

            for (let i= 0;i<this.comprobante_detalle.length;i++)
            {
                let cantidad = this.comprobante_detalle[i].detalle_cant;
                let precio_unit = this.comprobante_detalle[i].detalle_punit;

                total += this.calcularSubTotal(cantidad,precio_unit);
            }   

            this.factura_igv_total = total * this.factura_igv_porcentaje/100;
            this.comprobante_total=total;


    }
}