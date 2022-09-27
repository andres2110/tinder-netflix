export const getMoviesToDisplay = (store) => {
  return store && store.movies.aMovies ? store.movies.aMovies : [];
};

export const getSelectedMovies = (store) => {
  return store && store.movies.aMoviesSelected
    ? store.movies.aMoviesSelected
    : [];
};

export const getRandomMatchs = (store) => {
  let aRandomMatchs = [];
  let aMovies = store.movies.aMovies;
  let aRandomIds = store.movies.aRandomMatchs;
  aRandomIds.forEach((index) => {
    aRandomMatchs.push(aMovies[index].id);
  });
  return aRandomMatchs;
};

export const getMovieDetails= (store) => store.movies.oSelectedMovie;
export const getStatus= (store) => store.movies.status;