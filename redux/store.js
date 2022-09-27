/*import { createStore, applyMiddleware  } from "redux";
import rootReducer from "./reducers/holidays";
import thunkMiddleware from "redux-thunk";
import { logger } from "redux-logger";


export default createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware, logger)
);
*/
import { configureStore } from '@reduxjs/toolkit'

import moviesReducer from './moviesSlice'

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  }
})

export default store;