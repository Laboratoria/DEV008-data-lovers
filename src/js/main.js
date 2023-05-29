

import { athletes } from './athletes.js' 
console.log(athletes);

// import data from './data/lol/lol.js';


document.addEventListener("DOMContentLoaded", function() {
    //Obtener el elemento de la tabla
    const table = document.getElementById("resultado");
    const tbody = table.getElementsByTagName("tbody")[0];
  
    // Recorrer los datos de los atletas
    athletes.forEach(athlete => {
      // Crear una nueva fila
    const row = document.createElement("tr");
  
      //Crear celdas para cada propiedad del atleta
    const nameCell = document.createElement("td");
    nameCell.textContent = athlete.name;
    row.appendChild(nameCell);
  
    const genderCell = document.createElement("td");
    genderCell.textContent = athlete.gender;
    row.appendChild(genderCell);
  
    const heightCell = document.createElement("td");
    heightCell.textContent = athlete.height;
    row.appendChild(heightCell);
  
    const weightCell = document.createElement("td");
    weightCell.textContent = athlete.weight;
    row.appendChild(weightCell);
  
    const sportCell = document.createElement("td");
    sportCell.textContent = athlete.sport;
    row.appendChild(sportCell);
  
    const teamCell = document.createElement("td");
    teamCell.textContent = athlete.team;
    row.appendChild(teamCell);
  
    const nocCell = document.createElement("td");
    nocCell.textContent = athlete.noc;
    row.appendChild(nocCell);
  
      const ageCell = document.createElement("td");
      ageCell.textContent = athlete.age;
      row.appendChild(ageCell);
  
      const eventCell = document.createElement("td");
      eventCell.textContent = athlete.event;
      row.appendChild(eventCell);
  
      const medalCell = document.createElement("td");
      medalCell.textContent = athlete.medal;
      row.appendChild(medalCell);
  
      // Agregar la fila a la tabla
      tbody.appendChild(row);

    });
  });

//buscar el boton y luego
///eventlistener declarar buscar
//const nameFilter = document.getElementById("name");
//const genderFilter = document.getElementById("gender");
//const medalFilter = document.getElementById("medal");
//const teamFilter = document.getElementById("team");
//const sportFilter = document.getElementById("sport");
//const eventFilter = document.getElementById("event");


// Gender: Usando filter
const genderFilter = document.getElementById("gender");

const uniqueGenders = athletes.map((athlete) => athlete.gender)
  .filter((value, index, self) => self.indexOf(value) === index)
  .sort((a, b) => a.localeCompare(b));

uniqueGenders.forEach((gender) => {
  const option = document.createElement("option");
  option.textContent = gender;
  genderFilter.appendChild(option);
});

// Name: Usando filter
const uniqueNames = athletes.map((athlete) => athlete.name)
  .filter((value, index, self) => self.indexOf(value) === index)
  .sort((a, b) => a.localeCompare(b));
uniqueNames.forEach((name) => {
  const option = document.createElement("option");
  option.textContent = name;
  nameFilter.appendChild(option);
});



// Opción 3: SPORT 
const uniqueSports = athletes.map(athlete => athlete.sport)
  .filter((value, index, self) => self.indexOf(value) === index);
uniqueSports.forEach(sport => {
  const option = document.createElement('option');
  option.textContent = sport;
  sportFilter.appendChild(option);
});

// Opción 4: TEAM 
const uniqueTeam = athletes.map(athlete => athlete.team)
  .filter((value, index, self) => self.indexOf(value) === index);
uniqueTeam.forEach(team => {
  const option = document.createElement('option');
  option.textContent = team;
  teamFilter.appendChild(option);
});



// DECLARACIÓN DE MÍNIMOS Y MÁXIMOS
// EDAD
const ageMinFilter = document.getElementById('ageMin');
const ageMaxFilter = document.getElementById("ageMax");
// TALLA
const heightMinFilter = document.getElementById("heightMin");
const heightMaxFilter = document.getElementById("heightMax");
// PESO
const weightMinFilter = document.getElementById("weightMin");
const weightMaxFilter = document.getElementById("weightMax");


const weights = athletes.map(athlete => athlete.weight);
const minWeight = Math.min(...weights);
const maxWeight = Math.max(...weights);

for (let i = minWeight; i <= maxWeight; i++) {
  const optionMin = document.createElement('option');
  optionMin.value = i;
  optionMin.textContent = i;
  weightMinFilter.appendChild(optionMin);

  const optionMax = document.createElement('option');
  optionMax.value = i;
  optionMax.textContent = i;
  weightMaxFilter.appendChild(optionMax);
}