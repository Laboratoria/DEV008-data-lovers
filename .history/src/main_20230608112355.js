//Crear un sobreescritura al html, se hace con for of;
//Manipulación dinamica del DOM 
//import { example } from './data.js';
import { allData } from './data.js';
const contenedorDePortadas = document.getElementById ("animations");//para vincular el primer contenedor con el DOM
const contenedorDePeliculas = allData();//vinculando toda la data a al primer contenedor 

function pintarPosters(listaDePeliculas) { //estoy pintando los posters para eso es la función
  for (let index = 0; index < listaDePeliculas.length; index++) {
    const pelis = listaDePeliculas[index];
    console.log(pelis)

    const caja = document.createElement("div");
       
    const posters = document.createElement("img");//caja para las imagenes 
    posters.src = pelis.poster; //src es como js identifica las imagenes // poster es por que asi estan las imagenes en la data de ghibli 
    posters.classList.add("soloPosters");  //vinculando con las clases, ejemplo class list //add para añadir
   
    const titulo = document.createElement("p")
    titulo.innerText = pelis.title;
    titulo.classList.add("soloTitulo")
    
    const año = document.createElement("p")
    año.innerText = pelis.release_date;
    año.classList.add("soloAño")
    
    document.getElementById("caja").appendChild(posters);//appendChild hace la magia "interaccion con el DOM"
    document.getElementById("caja").appendChild(titulo);
    document.getElementById("caja").appendChild(año);
  }
  return

}

pintarPosters(contenedorDePeliculas)










