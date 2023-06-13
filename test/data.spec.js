import { filterDataDirector } from "../src/data.js";

describe("Casos de prueba para la funcion de filtrado de director", () => {
  it("dada una coleccion de peliculas y un nombre de director nos debe retornar solo peliculas de ese director", () => {
    const peliculas = [
      {
        director: "Hayao Miyazaki",
      },
      {
        director: "Yoshifumi Kondō",
      },
      {
        director: "Isao Takahata",
      },
    ];

    const director = "Hayao Miyazaki";

    expect(filterDataDirector(peliculas, director)).toEqual([
      { director: "Hayao Miyazaki" },
    ]);
  });

  it("SI peliculas no es un array debe retornar un arreglo vacio", () => {
    const director = "Hayao Miyazaki";
    expect(filterDataDirector(null, director)).toEqual([]);
  });
});
// parte de la data para probar los test
const allTheMovies = [
  {
    title: "Castle in the Sky",
    director: "Hayao Miyazaki",
    producer: "Isao Takahata",
    release_date: "1986",
    rt_score: "95",
  },
  {
    title: "Kiki's Delivery Service",
    producer: "Hayao Miyazaki",
    release_date: "1989",
    rt_score: "96",
  },
  {
    title: "My Neighbor Totoro",
    director: "Hayao Miyazaki",
    producer: "Hayao Miyazaki",
    release_date: "1988",
    rt_score: "93",
  },
  {
    title: "Grave of the Fireflies",
    director: "Isao Takahata",
    producer: "Toru Hara",
    release_date: "1988",
    rt_score: "97",
  },
];

describe(
  "caso de prueba para la función de productor, esta retorna las peliculas según el productor seleccionado"
),
  () => {
    it("Debería retornar una función", () => {
      expect(typeof filterDataProducer).toBe("function");
    });

    it("Debería retornar el productor Toru Hara: la pelicula [Grave of the Fireflies]", () => {
      const dataProductor = filterDataProducer(alltheMovies, ["Toru Hara"]);
      expect(dataProductor.title).toEqual("Grave of the Fireflies");

      it("SI Toru Hara no es un productor debe retornar un arreglo vacio", () => {
        const productor = "Toru Hara";
        expect(filterDataProducer(null, productor)).toEqual([]);
      });
    });
  };
