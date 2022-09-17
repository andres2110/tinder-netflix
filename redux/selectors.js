export const getMoviesToDisplay = (store) =>{
    return store && store.movies.aMovies ? store.movies.aMovies : [];
}

export const getSelectedMovies =(store) => {
    return store && store.movies.aMoviesSelected ? store.movies.aMoviesSelected : [];
}