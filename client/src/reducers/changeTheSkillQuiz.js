const initial = "react";

const changeTheSkillQuiz = (state = initial, action) => {
  switch (action.type) {
    case "react":
      return (state = "react");
    case "angular":
      return (state = "angular");
    default:
      return state;
  }
};

export default changeTheSkillQuiz;
