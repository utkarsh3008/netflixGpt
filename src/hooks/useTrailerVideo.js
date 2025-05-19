import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { useEffect } from 'react';
import { addTrailerVideo } from '../utils/moviesSlice';

const useTrailerVideo = (movie_id) => {
  const dispatch = useDispatch();
  const getMoviesVideos = async (movie_id) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos
    `,
      API_OPTIONS
    );
    const json = await data.json();
    const filteredTrailorData = json.results.filter((data) => {
      if (data.type == 'Trailer') {
        return data;
      }
    });

    const trailer = filteredTrailorData.length
      ? filteredTrailorData[0]
      : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMoviesVideos(movie_id);
  }, []);
};
export default useTrailerVideo;
