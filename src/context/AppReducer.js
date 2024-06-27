// const reducer = (state, action) => {
//     switch (action.type) {
//         case "ADD_MOVIE_TO_WATCHLIST":
//             return {
//                 ...state,
//                 watchlist: [action.payload, ...state.watchlist]
//             };
//         default:
//             return state;
//     }
// };

// export default reducer;
const AppReducer = (state, action) => {
    switch (action.type) {
      case "ADD_MOVIE_TO_WATCHLIST":
        return {
          ...state,
          watchlist: [...state.watchlist, action.payload],
        };
      case "REMOVE_MOVIE_FROM_WATCHLIST":
        return {
          ...state,
          watchlist: state.watchlist.filter(
            (movie) => movie.id !== action.payload
          ),
        }; 
        case "ADD_MOVIE_TO_WATCHED":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watched: [action.payload, ...state.watched],
      }; 
      case "MOVE_TO_WATCHLIST":
      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watchlist: [action.payload, ...state.watchlist],
      };
    case "REMOVE_FROM_WATCHED":
      return {
        ...state,
        watched: state.watched.filter((movie) => movie.id !== action.payload),
      };
      // Add other cases as needed
      default:
        return state;
    }
  };
  
  export default AppReducer;
  

