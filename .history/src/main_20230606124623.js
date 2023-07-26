//import { example } from './data.js';
import data from './data/ghibli/ghibli.js';
console.log(example, data);

export function allData() { //función que toma la informacion de la data
  return data.films
}
//constante para hacer referencia a la funcion de tomar la data (alldata)
const result = allData ();












//Crear un sobreescritura al html, se hace con for of;
//Manipulación dinamica del DOM 