import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, API_URL, API_URL_INFO_NOVIE, STATUS } from "../resources/constants";
import { fnGetAleatorios } from "../resources/functions";
import { MOVIES } from "../resources/movies";
let aRandomMatchs = MOVIES;
let iPart = 3.5 / 4;
let iTotalRandoms = Math.floor(aRandomMatchs.length * iPart);
const oInitialState = {
  aMovies: MOVIES,
  status: "initial",
  aMoviesSelected: [],
  aRandomMatchs: fnGetAleatorios(iTotalRandoms, MOVIES.length),
  oSelectedMovie: {},
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
export const fnFetchMovieDetails = createAsyncThunk(
  "movies/fnFetchMovieDetails",
  async (id) => {
    const oResponse = await axios.get(API_URL_INFO_NOVIE, {
      params: {
        apiKey: API_KEY,
        lang: "es",
        id: id,
        options: "Trailer",
      },
    });
    return oResponse.data;
  }
);

export const fnActionGetRandom = createAction("movies/fnActionGetRandom");

export const moviesSlice = createSlice({
  name: "movies",
  initialState: oInitialState,
  reducers: {
    addLiked(state, action) {
      state.aMoviesSelected.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fnFetchMovieDetails.pending, (state, action) => {
        state.status = STATUS.LOADING;
      })
      .addCase(fnFetchMovieDetails.rejected, (state, action) => {
        state.status = STATUS.ERROR;
      })
      .addCase(fnFetchMovieDetails.fulfilled, (state, action) => {
        state.oSelectedMovie = action.payload;
        state.status = STATUS.READY;
        if(state.oSelectedMovie.errorMessage !== "") state.status = STATUS.ERROR;
      });
  },
});
export const { addLiked } = moviesSlice.actions;
export default moviesSlice.reducer;
