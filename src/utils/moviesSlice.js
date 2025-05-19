import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    playingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNewPlayingMovies: (state, action) => {
      state.playingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addNewPlayingMovies, addTrailerVideo } = movieSlice.actions;
export default movieSlice.reducer;
