const initialCourse = "off";

const changeTheLogin = (state = initialCourse, action) => {
  switch (action.type) {
    case "off":
      return (state = "off");
    case "coet":
      return (state = "coet");
    default:
      return state;
  }
};

export default changeTheLogin;
