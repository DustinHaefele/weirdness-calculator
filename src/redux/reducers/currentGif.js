const currentGif = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_GIF':
      return action.gif
    default: 
      return state
  }
}

export default currentGif;