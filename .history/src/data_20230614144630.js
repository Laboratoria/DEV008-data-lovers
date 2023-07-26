// archivo de data solo para manipular la data
import data from './data/ghibli/ghibli.js';
export function allData() { //función que toma la informacion de la data
  return data.films
}

//constante para hacer referencia a la funcion de tomar la data (alldata)
const result = allData();
console.log(result);

//esto es para ordenar la data, entoces te  da tres posibilidades 
//1. < 0 .... entonces pondra primero a
//2. 0.... quedaria igual 
//3. > 0 .... entonces pondra primero b
export const orderData = (arrayData) => {
  arrayData.sort(function (a, b) {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
  
    return 0;
  });
  return arrayData;
};

export const orderData2 = (arrayData2) => {
  arrayData2.sort(function (a, b) {
    if (a.title < b.title) {
      return 1;
    }
    if (a.title >  b.title) {
      return -1;
    }
  
    return 0;
  });
  return arrayData2;
};
//Ordenado por fechas 
export const orderFecha = (arrayFecha) => {
  arrayFecha.sort(function (a, b) {
    if (a.release_date > b.release_date) {
      return 1;
    }
    if (a.release_date < b.release_date) {
      return -1;
    }
  
    return 0;
  });
  return arrayFecha;
};

export const orderFecha2 = (arrayFecha2) => {
  arrayFecha2.sort(function (a, b) {
    if (a.release_date < b.release_date) {
      return 1;
    }
    if (a.release_date >  b.release_date) {
      return -1;
    }
  
    return 0;
  });
  return arrayFecha2;
};


export function filtroDir(result, directorFiltro) {//esta variable es la que voy a enviar del otro lado no es la que esta arriba 
  return result.filter(item => item.director.includes(directorFiltro));
}
const directorHayaoMiyazaki = filtroDir(result, "Hayao Miyazaki")
const directorGoroMiyazaki = filtroDir(result, "Gorō Miyazaki")
const directorIsaoTakahata = filtroDir(result, "Isao Takahata")
const directorHiroyukiMorita = filtroDir(result, "Hiroyuki Morita")
const directorHiromasaYonebayashi = filtroDir(result, "Hiromasa Yonebayashi")
const directorYoshifumiKondo = filtroDir(result, "Yoshifumi Kondō")

