// estas funciones son de ejemplo
export const sortAlphabetic = (data, key) => {
  const sortLetters = data.sort((a, b) => {
    if (key === 0) {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });
  return sortLetters;
}

//filtro por director
export const filterDataDirector = (data, nameDirector) => {
  const newDataDirector = data.filter(movie => movie.director == nameDirector);
  return newDataDirector;
}

//filtro por productor
export const filterDataProducer = (data, nameProducer) => {
  const newDataProducer = data.filter(movie => movie.producer == nameProducer);
  return newDataProducer;
}

export const sortDataYear = (data, key) => {
  const dataYear = data.sort((a, b) => {
    if (key === 0) {
      return a.release_date - b.release_date;
    } else {
      return b.release_date - a.release_date;
    }
  });
  return dataYear;
}

// Filter los con mejores puntaje
export const compute = (data) => {
  let scoreCompute = data.filter(movie => movie.rt_score >= 96);
  return scoreCompute;
}
