import { filterDataDirector } from '../src/data.js';


describe('Casos de prueba para la funcion de filtrado de director', () => {
  it('dada una coleccion de peliculas y un nombre de director nos debe retornar solo peliculas de ese director', () => {
    const peliculas = [
      { 
        director: "Dan"
      },
      { 
        director: "Carlos"
      },
      { 
        director: "Camila"
      }
    ]

    const director = 'Dan'
    expect(filterDataDirector(peliculas, director)).toEqual([{director:'Dan'}])
  });

  it('SI peliculas no es un array debe retornar un arreglo vacio', () => {
    const director = 'Dan'
    expect(filterDataDirector(null, director)).toEqual([])
  });



});



