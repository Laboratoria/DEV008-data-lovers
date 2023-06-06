//import { data } from './data.js';  y aqui va la interración con el DOM

import { allData,filterDataDirector, filterDataProducer,  sortDataYear } from './data.js';
//import data from './data/ghibli/ghibli.js';

const reproducer = document.getElementById("reproducer");
//reproducer.volume = 0.03; //5% de volumen

const cardcontainer = document.getElementById("animations");
const allTheMovies = allData();
function showMovies(movieList) {
    //crear un ciclo for que me muestre todos los elementos de mi arreglo en la consola
    for (let index = 0; index < movieList.length; index++) {
        const movie = movieList[index];
        console.log(movie)
        const image = document.createElement("img"); //creatElement=hace referencia a nuestro contenedor de imagen
        image.src = movie.poster; //src=img .poster=asi aparece en la data de ghibli
        image.classList.add("card"); //add es para añadir la classList
        document.getElementById("animations").appendChild(image); //interación con DOM
    }
    return
}
showMovies(allTheMovies)

//filtrar por director

const filterXDirector = document.getElementById('filters__director')
filterXDirector.addEventListener('change', () => {
    document.getElementById("animations").innerHTML = '';//innerHTML y campo vacio nos ayuda a limpiar los elementos del DOM
  if (filterXDirector.value == 'all') {
      showMovies((allTheMovies));               
  } else {
      showMovies(filterDataDirector((allTheMovies), filterXDirector.value));//se usa allTheMovies para que funcione                
  }
})


//filtrar por productor
const filterXProducer = document.getElementById('filters__producer')
filterXProducer.addEventListener('change', () => {
    document.getElementById("animations").innerHTML = '';
  if (filterXProducer.value == 'all') {
      showMovies((allTheMovies));               
  } else {
      showMovies(filterDataProducer((allTheMovies), filterXProducer.value));             
  }
})

 // Ordenar los años de menor a mayor y viceversa
 const filterYear = document.getElementById('filters__year');
 filterYear.addEventListener('change', () => {
    document.getElementById("animations").innerHTML = '';
    switch (filterYear.value) {
        case '0':
            const masRecientes= sortDataYear(allTheMovies, 0)
            showMovies(masRecientes)                    
            break;
        case '1':
            const masAntiguas = sortDataYear(allTheMovies, 1)
            showMovies(masAntiguas)
            break;
    
  }
   })