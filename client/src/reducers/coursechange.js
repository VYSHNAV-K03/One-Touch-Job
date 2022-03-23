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
    case "frontendprojects":
      return (state = "frontendprojects");
    case "node":
      return (state = "node");
    case "express":
      return (state = "express");
    case "mongo":
      return (state = "mongo");
    case "backendprojects":
      return (state = "backendprojects");
    case "fullstackprojects":
      return (state = "fullstackprojects");
    default:
      return state;
  }
};

export default changeTheCourse;
