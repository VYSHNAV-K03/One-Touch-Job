import changeTheNumber from "./upDown";
import changeTheBackground from "./backgroundChange";
import changeTheCourse from "./coursechange";
import changeTheLogin from "./loginChange";
import changeMernCourse from "./MernCourseChange";
import changeThePlacementType from "./placementType";
import changeTheLevelQuiz from "./changeTheLevelQuiz";
import changeTheSkillQuiz from "./changeTheSkillQuiz";
import changeTheScore from "./scoreChange";
import changeTheBlur from "./toggleblurchange";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeTheNumber,
  changeTheBackground,
  changeTheCourse,
  changeMernCourse,
  changeTheLogin,
  changeThePlacementType,
  changeTheSkillQuiz,
  changeTheLevelQuiz,
  changeTheScore,
  changeTheBlur,
});

export default rootReducer;
