// import React, { createContext, useEffect, useReducer } from "react";
// import AppReducer from "./AppReducer";

// // Initial state
// const initialState = {
//     watchlist: localStorage.getItem("watchlist")
//     ? JSON.parse(localStorage.getItem("watchlist"))
//     : [],
//   watched: localStorage.getItem("watched")
//     ? JSON.parse(localStorage.getItem("watched"))
//     : [],
// };

// // Create context
// export const GlobalContext = createContext(initialState);

// // Provider component
// export const GlobalProvider = (props) => {
//     const [state, dispatch] = useReducer(AppReducer, initialState);

//     useEffect(()=>{
//          localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
//          localStorage.setItem('watched', JSON.stringify(state.watched));
//     },[state])

//     // Actions
//     const addMovieToWatchlist = (movie) => {
//         dispatch({
//             type: "ADD_MOVIE_TO_WATCHLIST",
//             payload: movie
//         });
//     };

//     return (
//         <GlobalContext.Provider value={{
//             watchList: state.watchList,
//             watched: state.watched,
//             addMovieToWatchlist: addMovieToWatchlist
//         }}>
//             {props.children}
//         </GlobalContext.Provider>
//     );
// };



import React, { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state with error handling for localStorage
const initialState = {
  watchlist: [],
  watched: [],
};

// Retrieve and parse local storage data with error handling
const getInitialState = () => {
  let watchlist = [];
  let watched = [];

  try {
    watchlist = localStorage.getItem("watchlist")
      ? JSON.parse(localStorage.getItem("watchlist"))
      : [];
  } catch (error) {
    console.error("Error parsing watchlist from localStorage", error);
  }

  try {
    watched = localStorage.getItem("watched")
      ? JSON.parse(localStorage.getItem("watched"))
      : [];
  } catch (error) {
    console.error("Error parsing watched from localStorage", error);
  }

  return { watchlist, watched };
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, getInitialState());

  useEffect(() => {
    try {
      localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    } catch (error) {
      console.error("Error saving watchlist to localStorage", error);
    }

    try {
      localStorage.setItem("watched", JSON.stringify(state.watched));
    } catch (error) {
      console.error("Error saving watched to localStorage", error);
    }
  }, [state]);

  // Actions
  const addMovieToWatchlist = (movie) => {
    dispatch({
      type: "ADD_MOVIE_TO_WATCHLIST",
      payload: movie,
    });
  };

  const removeMovieFromWatchlist = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
  };

  const addMovieToWatched = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  };

  const moveToWatchlist = (movie) => {
    dispatch({ type: "MOVE_TO_WATCHLIST", payload: movie });
  };

  const removeFromWatched = (id) => {
    dispatch({ type: "REMOVE_FROM_WATCHED", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchlist,
        removeMovieFromWatchlist,
        addMovieToWatched,
        moveToWatchlist,
        removeFromWatched,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
