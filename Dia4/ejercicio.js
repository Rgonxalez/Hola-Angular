var principal=document.getElementById("principal");

var nuevoDiv =document.createElement("div");


var footer=document.getElementById("pie");

nuevoDiv.innerHTML="Este es un texto de Prueba";

nuevoDiv.setAttribute("id","nuevoDiv");


nuevoDiv.setAttribute("nombre","unaSeccion");

nuevoDiv.style.backgroundColor="rgba(200,200,200,0.5)"

principal.appendChild(nuevoDiv);


footer.innerHTML="<h1> Titulo del Pie </h1>";



var miH1=document.createElement("h1");
miH1.innerHTML="Titulo del Pie";
footer.appendChild(miH1);


