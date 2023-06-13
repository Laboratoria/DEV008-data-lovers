import data from "./data/ghibli/ghibli.js";
// estas funciones son de ejemplo (funciones de ordenar, etc describe comportamiento de main.js)

export const example = () => {
  return "example";
};

export const anotherExample = () => {
  return "OMG";
};

export function allData() {
  //función que toma la informacion de la data
  return data.films;
}

//filtro por director
export const filterDataDirector = (data, nameDirector) => {
  if (!Array.isArray(data)) {
    return [];
  }
  const newDataDirector = data.filter(
    (movie) => movie.director == nameDirector
  );
  return newDataDirector;
};

//filtro por productor
export const filterDataProducer = (data, nameProducer) => {
  const newDataProducer = data.filter(
    (movie) => movie.producer == nameProducer
  );
  return newDataProducer;
};

//filtro por año ascendente y descendnte
export const sortDataYear = (data, key) => {
  const dataYear = data.sort((a, b) => {
    if (key === 0) {
      return b.release_date - a.release_date;
    } else {
      return a.release_date - b.release_date;
    }
  });
  return dataYear;
};

//constante para hacer referencia a la funcion de tomar la data (alldata)
const result = allData();

//console.log(result);

//function tarjetas ()
//const dataStudioGhibli = data.films;   {}
//const displayCardGhibli = (ghibliData) => {}
//ghibliData.forEach(arr) => {}
//¿cómo visualizar los "posters"?
