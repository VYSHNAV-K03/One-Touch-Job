const initialScore = false;

const changeTheBlur = (state = initialScore, action) => {
  switch (action.type) {
    case "blur":
      return (state = true);
    case "notblur":
      return (state = false);
    default:
      return state;
  }
};

export default changeTheBlur;
