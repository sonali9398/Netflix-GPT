import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRated from '../hooks/useTopRated';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTvSerials from '../hooks/useTvSerials';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();
  useTvSerials();

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  
  return (
    <div>
      <Header/>
      {showGptSearch ? (
        <GptSearch/>
      ): <>
        <MainContainer/>
        <SecondaryContainer/>
      </>}
      
    </div>
  )
}

export default Browse