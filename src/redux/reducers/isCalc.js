const isCalc = (state = false, action) => {
  switch (action.type) {
    case 'SET_IS_CALC':
      return action.isCalc;
    default:
      return state;
  }
};

export default isCalc;