const INITIAL_VALUE = {
  fav: [], 
};

export default function favReducer(state = INITIAL_VALUE, action) {
  switch (action.type) {
    case "CHANGE_FAV":
      const movieIndex = state.fav.findIndex(movie => movie.id === action.payload.id);

      if (movieIndex !== -1) {
        return {
          ...state,
          fav: state.fav.filter(movie => movie.id !== action.payload.id),
        };
      } else {
        return {
          ...state,
          fav: [...state.fav, { ...action.payload, count: 1 }],
        };
      }

    default:
      return state;
  }
}
