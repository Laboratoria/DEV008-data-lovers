//import { data } from './data.js';  y aqui va la interración con el DOM

import {
  allData,
  filterDataDirector,
  filterDataProducer,
  sortDataYear,
} from "./data.js";
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
    const card = document.createElement("div");
    const image = document.createElement("img"); //creatElement=hace referencia a nuestro contenedor de imagen
    image.src = movie.poster; //src=img .poster=asi aparece en la data de ghibli
    image.classList.add("card"); //add es para añadir la classList
    image.classList.add("show");
    const secondContainer = document.createElement("div");
    secondContainer.classList.add("card");
    secondContainer.classList.add("hide");
    const title2 = document.createElement("p");
    title2.textContent = movie.title;
    const description2 = document.createElement("p");
    description2.textContent = movie.description;
    const director = document.createElement("p");
    director.textContent = movie.director;
    const producer2 = document.createElement("p");
    producer2.textContent = movie.producer;
    const year = document.createElement("p");
    year.textContent = movie.release_date;

    secondContainer.appendChild(title2); //appendchild son nodos que conectan jerarquías de padre e hijo
    secondContainer.appendChild(description2);
    secondContainer.appendChild(director);
    secondContainer.appendChild(producer2);
    secondContainer.appendChild(year);

    card.appendChild(image); //interación con DOM
    card.appendChild(secondContainer);
    cardcontainer.appendChild(card);

    card.addEventListener("click", (e) => {
      //e=parametro del evento
      if (image.classList.contains("show")) {
        image.classList.add("hide");
        image.classList.remove("show");
        secondContainer.classList.remove("hide");
        secondContainer.classList.add("show");
      } else {
        image.classList.add("show");
        image.classList.remove("hide");
        secondContainer.classList.remove("show");
        secondContainer.classList.add("hide");
      }

      //console.log(movie.title)
    });
  }
  return;
}
showMovies(allTheMovies);

//filtrar por director

const filterXDirector = document.getElementById("filters__director");
filterXDirector.addEventListener("change", () => {
  document.getElementById("animations").innerHTML = ""; //innerHTML y campo vacio nos ayuda a limpiar los elementos del DOM
  if (filterXDirector.value == "all") {
    showMovies(allTheMovies);
  } else {
    showMovies(filterDataDirector(allTheMovies, filterXDirector.value)); //se usa allTheMovies para que funcione
  }
});

//filtrar por productor
const filterXProducer = document.getElementById("filters__producer");
filterXProducer.addEventListener("change", () => {
  document.getElementById("animations").innerHTML = "";
  if (filterXProducer.value == "all") {
    showMovies(allTheMovies);
  } else {
    showMovies(filterDataProducer(allTheMovies, filterXProducer.value));
  }
});

// Ordenar los años de menor a mayor y viceversa
const filterYear = document.getElementById("filters__year");
filterYear.addEventListener("change", () => {
  document.getElementById("animations").innerHTML = "";
  switch (filterYear.value) {
    case "0":
      const moreRecent = sortDataYear(allTheMovies, 0);
      showMovies(moreRecent);
      break;
    case "1":
      const older = sortDataYear(allTheMovies, 1);
      showMovies(older);
      break;
  }
});

const btnClean = document.getElementById("clean");
btnClean.addEventListener("click", (e) => {
  //e=parametro del evento
  e.preventDefault(); //si no hay evento explicito(¿bien definido?) en el parametro te marcara un error
  filterXDirector.value = "all";
  filterXProducer.value = "all";
  filterYear.value = "all";
  //seguir evaluando
  showMovies(allTheMovies);
});
