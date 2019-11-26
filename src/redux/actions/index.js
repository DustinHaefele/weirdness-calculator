export const addToFavorites = gif => ({
  type: 'ADD_TO_FAVORITES',
  id: gif.id,
  gif
});

export const removeFromFavorites = id => ({
  type: 'REMOVE_FROM_FAVORITES',
  id
});

export const setCurrentGif = gif => ({
  type: 'SET_CURRENT_GIF',
  gif
});

export const setError = error => ({
  type: 'SET_ERROR',
  error
});
