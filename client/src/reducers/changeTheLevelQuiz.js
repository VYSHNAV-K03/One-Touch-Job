const initial = "easy";

const changeTheLevelQuiz = (state = initial, action) => {
  switch (action.type) {
    case "easy":
      return (state = "easy");
    case "medium":
      return (state = "medium");
    case "hard":
      return (state = "hard");
    default:
      return state;
  }
};

export default changeTheLevelQuiz;
