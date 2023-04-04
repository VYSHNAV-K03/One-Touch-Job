const initialCourse = "service";

const changeThePlacementType = (state = initialCourse, action) => {
  switch (action.type) {
    case "service":
      return (state = "service");
    case "product":
      return (state = "product");
    case "startup":
      return (state = "startup");
    case "internship":
      return (state = "internship");
    case "freelancing":
      return (state = "freelancing");
    case "placementTraining":
      return (state = "placementTraining");
    default:
      return state;
  }
};

export default changeThePlacementType;
