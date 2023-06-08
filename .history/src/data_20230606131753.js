/* archivo de data solo para manipular la data */
import data from './data/ghibli/ghibli.js';
// estas funciones son de ejemplo (funciones de ordenar, etc describe comportamiento de main.js)

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

export function alldata() { //función que toma la informacion de la data
  return data.films
}

//constante para hacer referencia a la funcion de tomar la data (alldata)
const result = alldata ();
console.log(result);