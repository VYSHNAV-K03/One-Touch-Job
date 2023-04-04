import styled from "styled-components";
import "./App.css";
import Home from "./pages/Home";
import Placement from "./pages/Placement";
import Skill from "./pages/Skill";
import { Routes, Route } from "react-router-dom";
import Eachcourses from "./pages/Eachcourses";
import Register from "./components/Register";
import Errorpage from "./pages/Errorpage";
import Logout from "./components/Logout";
import LoginOff from "./components/LoginOff";
import LoginCollege from "./components/LoginCollege";
import Placementdetails from "./components/Placementdetails";
import Ski from "./pages/Ski";
import TemporaryDrawer from "./pages/rightnav";
import Workshops from "./pages/Workshops";
import Signin from "./components/Login";
import Internship from "./pages/Internship";
import PlacedStudents from "./pages/PlacedStudents";

const Container = styled.div``;

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/placement" exact element={<Placement />} />
        <Route path="/placementeach" exact element={<Placementdetails />} />
        <Route path="/placedstudents" exact element={<PlacedStudents />} />
        <Route path="/skill" exact element={<Skill />} />
        <Route path="/sumesh" exact element={<Ski />} />
        <Route path="/courses" exact element={<Eachcourses />} />
        <Route path="/login" exact element={<Signin />} />
        <Route path="/loginoff" exact element={<LoginOff />} />
        <Route path="/logincollege" exact element={<LoginCollege />} />
        <Route path="/logout" exact element={<Logout />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/right" exact element={<TemporaryDrawer />} />
        <Route path="/workshop" exact element={<Workshops />} />
        <Route path="/internship" exact element={<Internship />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </>
  );
}

export default App;
