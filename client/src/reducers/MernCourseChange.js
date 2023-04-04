const initalmern = "htmlandcss";

const changeMernCourse = (state = initalmern, action) => {
  switch (action.type) {
    case "reactprog":
      return (state = "react");
    case "htmlprog":
      return (state = "htmlandcss");
    case "javascriptprog":
      return (state = "javascript");
    case "angularprog":
      return (state = "angular");
    case "vueprog":
      return (state = "vue");
    case "frontendprojectsprogreact":
      return (state = "frontendprojectsreact");
    case "frontendprojectsprogangular":
      return (state = "frontendprojectsangular");
    case "frontendprojectsprogvue":
      return (state = "frontendprojectsvue");
    case "nodeprog":
      return (state = "node");
    case "expressprog":
      return (state = "express");
    case "mongoprog":
      return (state = "mongo");
    case "backendprojectsprog":
      return (state = "backendprojects");
    case "mernfullstackprojectsprog":
      return (state = "fullstackprojectsmern");
    case "meanfullstackprojectsprog":
      return (state = "fullstackprojectsmean");
    case "mevnfullstackprojectsprog":
      return (state = "fullstackprojectsmevn");
    default:
      return state;
  }
};

export default changeMernCourse;
