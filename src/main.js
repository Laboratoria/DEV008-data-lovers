//importación data
import { filterName } from "./data.js";
import data from "./data/got/got.js";
//import { filterData, sortData} from "./data.js";

//console.log(data);
//const trono = (data);

//funcion muestra de tarjetas
const GOTcontainer = document.getElementById("gotImg");

function gotImgCreator(gotImages) { 
    GOTcontainer.innerHTML="";

    for (const got of gotImages ) {
        const imagen = document.createElement("div");
        imagen.setAttribute("id", "fullName");
        imagen.setAttribute("class", "family");
        imagen.innerHTML=
        ` <div class="card">
                    <div><h2 class="nombrePersonaje" id="nombrecompleto" >${got.fullName}</h2>
                    <img class="got-image.url" src=${got.imageUrl}
                        alt="Imagen GOT" width=150 height=150 ></img>
                    <p id="familia">${got.family}</p>
                    <p id="titulo">${got.title}</p>
                    <p id="nacimiento">${got.born} - ${got.death}</p>
                    </div>
            </div>`
    GOTcontainer.append(imagen);
}
}
gotImgCreator(data.got);



/*const busqueda = document.getElementById("buscador").addEventListener('keyup', e => filterData);
console.log(filterData); */

document.getElementById("buscador").addEventListener('keyup', () => {
    filterName ();
    console.log("aquí va el filtrado");
})
    

//console.log(busqueda)
//console.log(this.value);


//const filtrado = lastName.filterCasas(function(lastName){
//return lastName > 0
//});

//console.log(lastName);
//console.log.filtrado;


//hacer constantes de los contenedores de busqueda 
const filtroabc = document.getElementById("ordenalfabetico")
const filtrocasa= document.getElementById("filtro-casas")
const filtrovivomuerto= document.getElementById("Estado")


//const sortData = document.getElementById("ordenalfabetico").addEventListener()

//Prueba de JS//



//import { lastName } from './data/got/got.js';
//console.log( lastName )
