//import data from "./data/got/got.js";

import got from "./data/got/got";

// estas funciones son de ejemplo
//export const sortData = (fullName)

/*export function filterData () {
const searchNombre= got.filter ( data => `${got.firstName.toLowersCase()} ${got.lastName.toLowersCase()}`.includes(main.busqueda.value.toLowersCase));
console.log(filterData)
console.log(searchNombre)
gotImgCreator(gotImages)  

} */


export function filterName ()
let got = [
  {firstName: '', lastName: ''},
];

let apellido = fullName.filter(personaje => personaje.fullName === 'apellido');
let nombre = fullName.filter(personaje => personaje.firstName === 'nombre');
let familia = fullName.filter(personaje => personaje.familia === 'familia');

console.log(apellido);
console.log(nombre);
console.log(familia);


  
  /*var input, filter, firstName, lastName;
  input = document.getElementById("buscador");
  filter = input.value.toUpperCase();
  firstName = document.getElementById("firtName");
  lastName = section.getElementByTagName("lastName");
  h1 =lastName.getElementsByClassName("lastName")


  for (i = 0; i<div.length; i++){
    h1 = h1[i].getElementById("filtro-casas")[0];
    textValue = x.textValue || x.innerHTML;

    if (textValue.toUpperCase().indexOf(filter) > -1) {
      h1[i].style.diplay= "";
    }else{
      h1[i].style.diplay = "none";
    }
  }
} */




  //export function filterData(){

//}

//export const anotherExample = () => {
  //return 'OMG';
//};

//export const data = () => {
  //console.log ( data.got)
  

//}



//console.log( lastName)



//}