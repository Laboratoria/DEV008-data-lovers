// estas funciones son de ejemplo
import { athletes } from "/./src/js/athletes.js";

///tabla de medallas

// Obtén la referencia al elemento canvas
const canvas = document.getElementById("chart");
const ctx = canvas.getContext("2d");

// Obtén los datos de medallas de los atletas
const medals = athletes.map((athlete) => athlete.medal);
const goldCount = medals.filter((medal) => medal === "Gold").length;
const silverCount = medals.filter((medal) => medal === "Silver").length;
const bronzeCount = medals.filter((medal) => medal === "Bronze").length;

// Configura los datos y opciones para la gráfica de barras
const data = {
  labels: ["Oro", "Plata", "Bronce"],
  datasets: [
    {
      label: "Medallas por participante",
      data: [goldCount, silverCount, bronzeCount],
      backgroundColor: ["Gold", "Silver", "Cooper"],
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
      max: Math.max(goldCount, silverCount, bronzeCount) + 1,
    },
  },
};

// Crea la instancia de la gráfica de barras
new Chart(ctx, {
  type: "bar",
  data: data,
  options: options,
});

///  Gráfico de genero
//  <canvas id="chartGender"></canvas>
const ctx1 = document.getElementById("chartGender").getContext("2d");
const genders = athletes.map((athlete) => athlete.gender);
const femCount = genders.filter((gender) => gender === "F").length;
const masCount = genders.filter((gender) => gender === "M").length;


const datag = {
  labels: ["Masculino","Femenino"],
  datasets: [
    {
      label: "Participantes por genero",
      data: [ masCount,femCount],
      backgroundColor: [ "blue","red"],
    },
  ],
};

// Crea la instancia del pie
new Chart(ctx1, {
  type: "pie",
  data: datag,

});

