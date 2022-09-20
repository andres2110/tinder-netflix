import { createSlice, createAsyncThunk,createAction } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, API_URL, fnGetAleatorios, MOVIES, MOVIES_TEST } from "../resources/constants";
let aRandomMatchs = MOVIES;
let iPart = (3.5/4);
let iTotalRandoms = Math.floor(aRandomMatchs.length*iPart);
const oInitialState = {
  aMovies: MOVIES,
  status: "initial",
  aMoviesSelected:[],
  aRandomMatchs:fnGetAleatorios(iTotalRandoms,MOVIES.length)
};

export const fnFetchMovies = createAsyncThunk(
  "movies/fnFetchMovies",
  async () => {
    // const oResponse = await axios.get(API_URL, {
    //   params: {
    //     apiKey: API_KEY,
    //     lang: "es",
    //   },
    // });
    // return await MOVIES_TEST;
  }
);

export const fnActionGetRandom = createAction('movies/fnActionGetRandom');

export const moviesSlice = createSlice({
  name: "movies",
  initialState: oInitialState,
  reducers: {
    addLiked(state,action){
      state.aMoviesSelected.push(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fnFetchMovies.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fnFetchMovies.fulfilled, (state, action) => {
        //const aNewMovies = [];
        // console.log(action.payload[0]);
        // action.payload.forEach((oMovie) => {
        //   aNewMovies[oMovie.id] = oMovie;
        // });
        // console.log("entro API");
        // state.aMovies = action.payload;
        // console.log(action.payload);
        // state.status = "fulled";
      })
      .addCase(fnActionGetRandom,(state, action)=>{
        console.log("Random");
        state.aRandomMatchs = fnGetAleatorios(state.aMovies.length);
      })
      ;
  },
});
export const { addLiked } = moviesSlice.actions
export default moviesSlice.reducer;