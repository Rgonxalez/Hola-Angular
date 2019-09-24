let alumnos = [

    {
        id: 1,
        nombre: "Patricio la estrella",
        edad: 27

    },
    {
        id: 1,
        nombre: "Bob",
        edad: 25

    },

    {
        id: 3,
        nombre: "Arenita",
        edad: 20

    },

    {
        id: 4,
        nombre: "Don Cangrejo",
        edad: 40

    }



]



let cursos = [

    {
        idAlumno: 1,
        cursos: ["HTML", "jsx", "ionic"]

    },
    {
        idAlumno: 2,
        cursos: ["WebPack", "MongoDB", "Firebase"]

    }

]


// let getAlumnoById = (id) => {

//     for(let i=0;i<alumnos.length;i++)
//     {
//         if(alumnos[i].id === id){

//             return alumnos[i];

//         }

//     }

//     throw "ups no hay alumnos";
  
//}


    let getAlumnoById = async(id) =>{

            for(let i=0;i<alumnos.length;i++)
            {
                if(alumnos[i].id=== id)
                {
                        return alumnos[i];

                }

            }
            
            throw "Ups no hay el alumno"
    }

    let getCursosByAlumnoId = async(id) =>{

            for(let i=0;i<cursos.length;i++)
            {
                if(cursos[i].idAlumno === id)
                {
                    return cursos[i];

                }

            }
            throw "No se han encontrado cursos para el alumno";
    }

        let getGatos = async () =>{

            let alumno = await getAlumnoById(1);
            let curso = await getCursosByAlumnoId(1);

            // console.log(alumno);
            // console.log(curso);

            return [alumno,curso]
        }


        getGatos().then(([alumno,curso])=>{

            console.log(alumno);
            console.log(curso);
        }).catch((error)=>{

            console.log(error);
        })