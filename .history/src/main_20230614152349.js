import { allData, orderData, orderData2, orderFecha, orderFecha2, filtroDir, filtroProduc} from './data.js';
const contenedorDePortadas = document.getElementById("animations");//para vincular el primer contenedor con el DOM
const arrayObjetos = allData();//vinculando toda la data a al primer contenedor 


function pintarPosters(listaDePeliculas) { //estoy pintando los posters para eso es la función
  for (let index = 0; index < listaDePeliculas.length; index++) {
    const pelis = listaDePeliculas[index];


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

    caja.appendChild(posters);//appendChild hace la magia "interaccion con el DOM"
    caja.appendChild(titulo);
    caja.appendChild(año);
    document.getElementById("animations").appendChild(caja);

  
  
    const caja2 = document.createElement("div");
    
    const descripcion = document.createElement("p")
    descripcion.innerText = pelis.description;
    descripcion.classList.add("soloDescripcion")

    const directores = document.createElement("p")
    directores.innerText = pelis.director;
    directores.classList.add("soloDirectores")

    const productores = document.createElement("p")
    productores.innerText = pelis.producer;
    productores.classList.add("soloProductores")


    caja2.appendChild(descripcion);//appendChild hace la magia "interaccion con el DOM"
    caja2.appendChild(directores);
    caja2.appendChild(productores);

    document.getElementById("animations").appendChild(caja2);


  }
  return

}

pintarPosters(arrayObjetos)

//Ordenar de la A-Z
const filtroaz = document.getElementById('filters__initial');
filtroaz.addEventListener('change', () => {
  document.getElementById("animations").innerHTML = '';
  switch (filtroaz.value) {
  case '0':
    const az = orderData(arrayObjetos)
    pintarPosters(az)
    break;
  case '1':
    const za = orderData2(arrayObjetos)
    pintarPosters(za)
    break;

  }
})


//Ordenar por año
const filtroFecha = document.getElementById('filters__year');
filtroFecha.addEventListener('change', () => {
  document.getElementById("animations").innerHTML = '';
  switch (filtroFecha.value) {
  case '0':
    const añoAcendente = orderFecha(arrayObjetos)
    pintarPosters(añoAcendente)
    break;
  case '1':
    const añoDesendente = orderFecha2(arrayObjetos)
    pintarPosters(añoDesendente)
    break;

  }
})

//filtro por director

const filtroD = document.getElementById("filters__director");
filtroD.addEventListener("change", () => {
  document.getElementById("animations").innerHTML = '';
  if (filtroD.value === "all"){ //valor de la opcion igual a todos 
    pintarPosters(arrayObjetos)
  }else {
    pintarPosters(filtroDir(arrayObjetos, filtroD.value))
  }

});

//filtro por productor

const filtroP = document.getElementById("filters__producer");
filtroP.addEventListener("change", () => {
  document.getElementById("animations").innerHTML = '';
  if (filtroP.value === "all"){ //valor de la opcion igual a todos 
    pintarPosters(arrayObjetos)
  }else {
    pintarPosters(filtroProduc(arrayObjetos, filtroP.value))
  }

});





// Boton de limpiar filtros 
const botonDeLimpiar = document.getElementById ("clean");
botonDeLimpiar.addEventListener("click", () =>{
  document.getElementById("animations").innerHTML = "";// se le esta diciendo que el html quede vacio 
  filtroFecha.value = "0"
  filtroaz.value = "0"
  filtroD.value ="animations"
  filtroP.value ="animations"
  pintarPosters((arrayObjetos));// aqui vuelvo a mostrar todas las peliculas de la pantalla 
});












