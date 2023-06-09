//import { data } from './data.js';  y aqui va la interración con el DOM

import { allData, filterDataDirector, filterDataProducer, sortDataYear } from './data.js';
//import data from './data/ghibli/ghibli.js';

const reproducer = document.getElementById("reproducer");
//reproducer.volume = 0.05; //5% de volumen

const cardcontainer = document.getElementById("animations");
const allTheMovies = allData();
function showMovies(movieList) {
    //crear un ciclo for que me muestre todos los elementos de mi arreglo en la consola
    for (let index = 0; index < movieList.length; index++) {
        const movie = movieList[index];
        //console.log(movie)
        const card = document.createElement("div")
        const image = document.createElement("img"); //creatElement=hace referencia a nuestro contenedor de imagen
        image.src = movie.poster; //src=img .poster=asi aparece en la data de ghibli
        image.classList.add("card"); //add es para añadir la classList
        image.classList.add("show");
        const segundoContenedor = document.createElement("div");
        segundoContenedor.classList.add("card");
        segundoContenedor.classList.add("hide");
        const titulo = document.createElement("p")
        titulo.textContent = movie.title;
        const descripcion = document.createElement("p")
        descripcion.textContent = movie.description;
        const director = document.createElement("p")
        director.textContent = movie.director;
        const productor = document.createElement("p")
        productor.textContent = movie.producer;
        const año = document.createElement("p")
        año.textContent = movie.release_date;


        segundoContenedor.appendChild(titulo)
        segundoContenedor.appendChild(descripcion)
        segundoContenedor.appendChild(director)
        segundoContenedor.appendChild(productor)
        segundoContenedor.appendChild(año)



        card.appendChild(image); //interación con DOM
        card.appendChild(segundoContenedor);
        cardcontainer.appendChild(card);

        card.addEventListener("click", (e) => { //e=parametro del evento
            if (image.classList.contains("show")) {
                image.classList.add("hide")
                image.classList.remove("show")
                segundoContenedor.classList.remove("hide")
                segundoContenedor.classList.add("show")
               
            }
            else {
                image.classList.add("show")
                image.classList.remove("hide")
                segundoContenedor.classList.remove("show")
                segundoContenedor.classList.add("hide")
            }




            //console.log(movie.title)
        })

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
            const masRecientes = sortDataYear(allTheMovies, 0)
            showMovies(masRecientes)
            break;
        case '1':
            const masAntiguas = sortDataYear(allTheMovies, 1)
            showMovies(masAntiguas)
            break;

    }
})


const btnClean = document.getElementById('clean');
btnClean.addEventListener('click', (e) => { //e=parametro del evento
    e.preventDefault(); //si no hay evento explicito(¿bien definido?) en el parametro te marcara un error 
    filterXDirector.value = 'all';
    filterXProducer.value = 'all';
    filterYear.value = 'all';
    //seguir evaluando
    showMovies(allTheMovies);
})





/*const searchMovie = document.getElementById("search");
searchMovie.addEventListener("input", searchMovie);
function searchMovie() {
  movieSection.innerHTML = "";
  // Agregar código para traer el input text, y sacar el texto de búsqueda
  const searchValue = document.getElementById("search").value;
  let filteredSearch = null;
  // Agregar código para filtrar por título 
  filteredSearch = data.films.filter(film => film["title"].toLowerCase().includes(searchValue.toLowerCase())); //toLowerCase devuelve el valor e includes incluye un elemnto en este caso titulo
  showMovies(filteredSearch)
}*/