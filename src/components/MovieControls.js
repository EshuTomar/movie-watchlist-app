import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa";

const MovieControls = ({ movie, type }) => {
  const { removeMovieFromWatchlist, addMovieToWatched,moveToWatchlist,removeFromWatched} = useContext(GlobalContext);

  return (
    <div className='inner-card-controls'>
      {type === 'watchlist' && (
        <>
          <button className='ctrl-btn' onClick={() => addMovieToWatched(movie)}>
            <FaEye />
          </button>

          <button className='ctrl-btn' onClick={() => removeMovieFromWatchlist(movie.id)}>
            <MdDelete />
          </button>
        </>
      )}

      {type === 'watched' && (
        <>
          <button className='ctrl-btn' onClick={()=> moveToWatchlist(movie)}>
            <FaEyeSlash />
          </button>
          <button className='ctrl-btn' onClick={()=> removeFromWatched(movie.id)}>
          <MdDelete />
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;

