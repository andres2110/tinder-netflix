export const getMoviesToDisplay = (store) =>{
    return store && store.movies.aMovies ? store.movies.aMovies : [];
}