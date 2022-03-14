const initialCourse = false;

const LoginOrNot = (state = initialCourse, action) => {
  switch (action.type) {
    case "login":
      return (state = true);
    default:
      return state;
  }
};

export default LoginOrNot;
