const initialScore = 0;

const changeTheScore = (state = initialScore, action) => {
  switch (action.type) {
    case "scoreinc":
      return (state = state + 1);
    case "scoredefault":
      return (state = 0);
    default:
      return state;
  }
};

export default changeTheScore;
