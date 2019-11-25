const favorites = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return [...state, { id: action.id, gif: action.gif }];
    case 'REMOVE_FROM_FAVORITES':
      return state.filter(fav => fav.id !== action.id);
    default:
      return state;
  }
};

export default favorites;
