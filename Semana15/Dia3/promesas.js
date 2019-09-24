
let miPromesa = () => {

    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            
                resolve("algo ha pasado y hemos tenido exito ejecutandolo");

        }, 2000);

    });

}

    miPromesa().then(respuesta =>{

        console.log("exito!!!!");
        console.log(respuesta);


    }).catch(error =>{

        console.log("error");
    });