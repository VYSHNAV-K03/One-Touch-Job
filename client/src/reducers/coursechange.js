const initialCourse = "htmlandcss";

const changeTheCourse = (state = initialCourse, action) => {
  switch (action.type) {
    case "html":
      return (state = "htmlandcss");
    case "javascript":
      return (state = "javascript");
    case "react":
      return (state = "react");
    case "angular":
      return (state = "angular");
    case "vue":
      return (state = "vue");
    case "frontendprojectsreact":
      return (state = "frontendprojectsreact");
    case "frontendprojectsangular":
      return (state = "frontendprojectsangular");
    case "frontendprojectsvue":
      return (state = "frontendprojectsvue");
    case "node":
      return (state = "node");
    case "express":
      return (state = "express");
    case "mongo":
      return (state = "mongo");
    case "backendprojects":
      return (state = "backendprojects");
    case "fullstackprojectsmern":
      return (state = "fullstackprojectsmern");
    case "fullstackprojectsmean":
      return (state = "fullstackprojectsmean");
    case "fullstackprojectsmevn":
      return (state = "fullstackprojectsmevn");
    default:
      return state;
  }
};

export default changeTheCourse;
