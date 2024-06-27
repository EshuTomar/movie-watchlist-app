import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';
import MovieCard from './MovieCard';



const  Watchlist = () => {

  const {watchlist} = useContext(GlobalContext);

  return (
   <div className='movie-page'>
    <div className='container'>
      <div className='header'>
        <h1 className='heading'>My Must-Watch Movies</h1>
      </div>
      
      {watchlist.length > 0 ?(
         <div className='movie-grid'>
         {watchlist.map((movie)=>(
           <MovieCard movie={movie} type="watchlist"/>
         ))}
       </div>
      ) : (
        <h2 className='no-movies'>No movies have been added to the watchlist yet. Please add some</h2>
      )}
     
    </div>
   </div>
  )
}

export default Watchlist;
