import { athletes } from './js/athletes';

// Función para buscar y filtrar los atletas
function buscar() {
  const genderFilter = document.getElementById('gender').value;
  const medalFilter = document.getElementById('medal').value;
  const teamFilter = document.getElementById('team').value.toLowerCase();
  const sportFilter = document.getElementById('sport').value.toLowerCase();
  const eventFilter = document.getElementById('event').value.toLowerCase();

  // DECLARACIÓN DE MÍNIMOS Y MÁXIMOS
  // EDAD
  const ageMinFilter = parseInt(document.getElementById('ageMin').value);
  const ageMaxFilter = parseInt(document.getElementById('ageMax').value);
  // TALLA
  const heightMinFilter = parseInt(document.getElementById('heightMin').value);
  const heightMaxFilter = parseInt(document.getElementById('heightMax').value);
  // PESO
  const weightMinFilter = parseInt(document.getElementById('weightMin').value);
  const weightMaxFilter = parseInt(document.getElementById('weightMax').value);

  //
  athletes.forEach(team => {
    const optionTeam = document.createElement('team');
    optionTeam.textContent =team.team;
    teamFilter.appendChild(optionTeam);
  });


  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = '';

  const filteredAthletes = athletes.filter((athlete) => {
    return (
      (genderFilter === '' || athlete.gender === genderFilter) &&
      (medalFilter === '' || athlete.medal === medalFilter) &&

      (isNaN(ageMinFilter) || athlete.age >= ageMinFilter) &&
      (isNaN(ageMaxFilter) || athlete.age <= ageMaxFilter) &&

      (isNaN(heightMinFilter) || athlete.age >= heightMinFilter) &&
      (isNaN(heightMaxFilter) || athlete.age <= heightMaxFilter) &&

      (isNaN(weightMinFilter) || athlete.age >= weightMinFilter) &&
      (isNaN(weightMaxFilter) || athlete.age <= weightMaxFilter) &&

      (teamFilter === '' || athlete.team.toLowerCase().includes(teamFilter))&&
      (sportFilter === '' || athlete.team.toLowerCase().includes(sportFilter))&&
      (eventFilter === '' || athlete.team.toLowerCase().includes(eventFilter))
    );
  });

  filteredAthletes.forEach((athlete) => {
    const resultItem = document.createElement('div');
    resultItem.classList.add('result-item');

    resultItem.innerHTML = `
      <h3>${athlete.name}</h3>
      <p>Género: ${athlete.gender}</p>
      <p>Altura: ${athlete.height}</p>
      <p>Peso: ${athlete.weight}</p>
      <p>Deporte: ${athlete.sport}</p>
      <p>Equipo: ${athlete.team}</p>
      <p>Edad: ${athlete.age}</p>
      <p>Evento: ${athlete.event}</p>
      <p>Medalla: ${athlete.medal}</p>
    `;

    resultsContainer.appendChild(resultItem);
  });



}
