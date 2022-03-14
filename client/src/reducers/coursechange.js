const initialCourse = "react";

const changeTheCourse = (state = initialCourse, action) => {
  switch (action.type) {
    case "react":
      return (state = "react");
    case "html":
      return (state = "htmlandcss");
    case "javascript":
      return (state = "javascript");
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
    case "react":
      return (state = "react");
    case "angular":
      return (state = "angular");
    case "vue":
      return (state = "vue");
    case "wordpress":
      return (state = "wordpress");
    case "normal":
      return (state = "normal");
    default:
      return state;
  }
};

export default changeTheCourse;
