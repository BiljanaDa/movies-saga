import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  performGetMovies: () => {},
};

export const MovieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: [],
  },
  reducers: {
    setMovies(state, action) {
      state.movies = action.payload;
    },
    ...middlewareActions,
  },
});

export const { setMovies, performGetMovies } = MovieSlice.actions;
export default MovieSlice.reducer;
