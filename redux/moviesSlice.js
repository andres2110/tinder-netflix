import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, API_URL } from "../resources/constants";

const oInitialState = {
  aMovies: [],
  status: "idle",
  aMoviesSelected:[]
};

export const fnFetchMovies = createAsyncThunk(
  "movies/fnFetchMovies",
  async () => {
    const oResponse = await axios.get(API_URL, {
      params: {
        apiKey: API_KEY,
        lang: "es",
      },
    });
    return oResponse.data.items;
  }
);

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
        console.log("entro API");
        state.aMovies = action.payload;
        state.status = "idle";
      });
  },
});
export const { addLiked } = moviesSlice.actions
export default moviesSlice.reducer;