
let numeritos = [9,6,4,['x','y','z'],100,90,60];

let segundo = numeritos[1];
let primero = numeritos[0];


console.log(primero);
console.log(segundo);

let [uno,dos,tres,[xx,yy,zz], ... elresto] = numeritos;

console.log(uno);
console.log(dos);
console.log(tres);
console.log(tres+uno);


console.log(xx);
console.log(yy);
console.log(zz);

console.log(elresto);


let cevichelas = {

    id:1,
    precio:30,
    descripcion:"Ceviche mas Chelas, plato preferido de codigo",
    componentes:["cerveza","Ceviche"],
    oferta:{
        descuento:5,
        condicion:"sabados y domingos"
    }

}

    //let precio = cevichelas.precio;
    //let descripcion = cevichelas.descripcion;

    //console.log(precio);

    //console.log(descripcion);

    let {id,descripcion,precio:cuantoEsta} = cevichelas;

    console.log(descripcion);
    console.log(cuantoEsta);


    let {componentes:[pri,seg]} = cevichelas;

    console.log(pri);

    let {oferta:{condicion,descuento}} = cevichelas;
    console.log(condicion);
    console.log(descuento);