const initialBackground = "coral";

const changeTheBackground = (state = initialBackground, action) => {
  switch (action.type) {
    case "Blue":
      return (state = "blue");
    case "Green":
      return (state = "green");
    default:
      return state;
  }
};

export default changeTheBackground;