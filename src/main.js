//import { data } from './data.js';  y aqui va la interración con el DOM

import { alldata } from './data.js';
//import data from './data/ghibli/ghibli.js';

const reproducer = document.getElementById("reproducer");
//reproducer.volume = 0.03; //5% de volumen

const cardcontainer = document.getElementById("animations");
const allthemovies = alldata();
function showmovies(movieList) {
    //crear un ciclo for que me muestre todos los elementos de mi arreglo en la consola
    for (let index = 0; index < allthemovies.length; index++) {
        const movie = allthemovies[index];
        console.log(movie)
        const image = document.createElement("img"); //creatElement=hace referencia a nuestro contenedor de imagen
        image.src = movie.poster; //src=img .poster=asi aparece en la data de ghibli
        image.classList.add("card"); //add es para añadir la classList
        document.getElementById("animations").appendChild(image); //interación con DOM
    }
    return
}
showmovies(allthemovies)



//console.log(example, data.films);
