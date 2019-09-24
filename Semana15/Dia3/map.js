let numeros = [4,9,16,25,36,49];

let mitades = numeros.map((numero)=>{

    return numero/2;

});


let raiz = numeros.map((elemento)=>{

    return Math.sqrt(elemento);

});


console.log(mitades);
console.log(raiz);