let alumnos =[

    {
        id:1,
        nombre:"Jorge",
        edad:28

    },

    {
        id:2,
        nombre:"Diana",
        edad:29

    },

    {
        id:3,
        nombre:"Paloma",
        edad:20

    },
    {
        id:4,
        nombre:"Sol",
        edad:20

    }


]


    let cursos = [

        {
            alumnoId:1,
            cursos:["Python","Diseño"]

        },
        {
            alumnoId:2,
            cursos:["Ethical Hacking","Electronica"]

        }

    ];

        let getAlumnoById = (id,callback) =>{
            for(let i=0; i<alumnos.length;i++)
            {
                if(alumnos[i].id == id){

                    callback(null,alumnos[i]);
                    return;

                }

            }

            callback("No se encontro el alumno");
        }



        let getCursosByAlumnoId = (id,callback) =>{

            for(let i=0;i<cursos.length;i++)
            {
                if(cursos[i].alumnoId == id)
                {
                    callback(null,cursos[i]);
                    return;

                }
                

            }

            callback("NO EXISTEN CURSOS PARA EL ALUMNO");

        }

        getAlumnoById(10,(error,objAlumno)=>{

            if(error){

                console.log(error);
            }
            else{
                getCursosByAlumnoId(10,(error,listaCursos) =>{
                    if(error){

                        console.log(error);
                    }

                    else{
                        console.log("Se ha encontrado los Sgtes Cursos para" + objAlumno.nombre);
                        console.log(listaCursos);
                    }

                });
            }

        });