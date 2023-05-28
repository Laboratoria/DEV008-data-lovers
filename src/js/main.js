import { athletes } from "/./src/js/athletes.js";

// Importa la base de datos desde athletes.js
//buscar el boton y luego
///eventlistener declarar buscar


//buscar el boton y luego
///eventlistener declarar buscar

const nameFilter = document.getElementById("name");
const genderFilter = document.getElementById("gender");
const medalFilter = document.getElementById("medal");
const teamFilter = document.getElementById("team");
const sportFilter = document.getElementById("sport");
const eventFilter = document.getElementById("event");

// Gender: Usando filter
const uniqueGenders = athletes
  .map((athlete) => athlete.gender)
  .filter((value, index, self) => self.indexOf(value) === index)
  .sort((a, b) => a.localeCompare(b));
uniqueGenders.forEach((gender) => {
  const option = document.createElement("option");
  option.textContent = gender;
  genderFilter.appendChild(option);
});


// Name: Usando filter
const uniqueNames = athletes
  .map((athlete) => athlete.name)
  .filter((value, index, self) => self.indexOf(value) === index)
  .sort((a, b) => a.localeCompare(b));
uniqueNames.forEach((name) => {
  const option = document.createElement("option");
  option.textContent = name;
  nameFilter.appendChild(option);
});

// MEDAL: Usando filter
const uniqueMedals = athletes
  .map((athlete) => athlete.medal)
  .filter((value, index, self) => self.indexOf(value) === index)
  .sort((a, b) => a.localeCompare(b));

uniqueMedals.forEach((medal) => {
  const option = document.createElement("option");
  option.textContent = medal;
  medalFilter.appendChild(option);
});

// EVENT: Usando filter
const uniqueEvents = athletes
  .map((athlete) => athlete.event)
  .filter((value, index, self) => self.indexOf(value) === index)
  .sort((a, b) => a.localeCompare(b));

uniqueEvents.forEach((event) => {
  const option = document.createElement("option");
  option.textContent = event;
  eventFilter.appendChild(option);
});

//  SPORT : Usando filter
const uniqueSports = athletes
  .map((athlete) => athlete.sport)
  .filter((value, index, self) => self.indexOf(value) === index)
  .sort((a, b) => a.localeCompare(b));

uniqueSports.forEach((sport) => {
  const option = document.createElement("option");
  option.textContent = sport;
  sportFilter.appendChild(option);
});

//  TEAM : Usando filter
const uniqueTeams = athletes
  .map((athlete) => athlete.team)
  .filter((value, index, self) => self.indexOf(value) === index)
  .sort((a, b) => a.localeCompare(b));

uniqueTeams.forEach((team) => {
  const option = document.createElement("option");
  option.textContent = team;
  teamFilter.appendChild(option);
});

// DECLARACIÓN DE MÍNIMOS Y MÁXIMOS
// EDAD
const ageMinFilter = document.getElementById("ageMin");
const ageMaxFilter = document.getElementById("ageMax");

// EDAD :filtros
const ages = athletes.map((athlete) => athlete.age);
const minAge = Math.min(...ages);
const maxAge = Math.max(...ages);

for (let i = minAge; i <= maxAge; i++) {
  const optionMin = document.createElement("option");
  optionMin.value = i;
  optionMin.textContent = i + " años";
  ageMinFilter.appendChild(optionMin);

  const optionMax = document.createElement("option");
  optionMax.value = i;
  optionMax.textContent = i + " años";
  ageMaxFilter.appendChild(optionMax);
}








