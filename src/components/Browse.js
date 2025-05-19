import useNowPlayingMovies from '../hooks/useNowPlayingMoviesList';
import Header from './Header';
import MainContainer from './MainContainer';

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  );
};

export default Browse;
