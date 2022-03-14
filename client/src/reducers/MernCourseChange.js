const initalmern = "htmlandcss";

const changeMernCourse = (state = initalmern, action) => {
  switch (action.type) {
    case "reactprog":
      return (state = "react");
    case "htmlprog":
      return (state = "htmlandcss");
    case "javascriptprog":
      return (state = "javascript");
    case "frontendprojectsprogreact":
      return (state = "frontendprojects/react");
    case "frontendprojectsprogangular":
      return (state = "frontendprojects/angular");
    case "frontendprojectsprogvue":
      return (state = "frontendprojects/vue");
    case "nodeprog":
      return (state = "node");
    case "expressprog":
      return (state = "express");
    case "mongoprog":
      return (state = "mongo");
    case "backendprojectsprog":
      return (state = "backendprojects");
    case "mernfullstackprojectsprog":
      return (state = "fullstackprojects/mern");
    case "meanfullstackprojectsprog":
      return (state = "fullstackprojects/mean");
    case "mevnfullstackprojectsprog":
      return (state = "fullstackprojects/mevn");
    default:
      return state;
  }
};

export default changeMernCourse;
