import { useDispatch } from 'react-redux';
import { API_OPTIONS, NOW_PLAYING_MOVIE_URL } from '../utils/constants';
import { useEffect } from 'react';
import { addNewPlayingMovies } from '../utils/moviesSlice';

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async (url, options) => {
    const data = await fetch(url, options);
    const json = await data.json();
    dispatch(addNewPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies(NOW_PLAYING_MOVIE_URL, API_OPTIONS);
  }, []);
};

export default useNowPlayingMovies;
