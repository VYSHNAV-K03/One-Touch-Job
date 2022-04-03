import styled from "styled-components";
import "./App.css";
import Footer from "./components/Footer";
import Home1 from "./components/Home1";
import Home2 from "./components/Home2";
import Home3 from "./components/Home3";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Placement from "./pages/Placement";
import Skill from "./pages/Skill";
import Skills from "./pages/Ski";
import { Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Eachcourses from "./pages/Eachcourses";
import Contact from "./pages/Contact";
import Profilepage from "./pages/Profilepage";
import Login from "./components/Login";
import Register from "./components/Register";
import Errorpage from "./pages/Errorpage";
import Logout from "./components/Logout";
import LoginOff from "./components/LoginOff";
import LoginCollege from "./components/LoginCollege";
import ResetPass from "./components/ResetPass";
import NewPassword from "./components/NewPassword";
import placement from "./components/Placementdetails";
import Placementdetails from "./components/Placementdetails";
import Ski from "./pages/Ski";
import SkillQuiz from "./pages/SkillQuiz";
import Quiz from "./pages/Quiz";
import QuizResult from "./pages/QuizResult";
import Portfolio from "./Porfolio/Portfolio";
import TemporaryDrawer from "./pages/rightnav";
import SearchFilter from "./components/SearchFilter";
import Workshops from "./pages/Workshops";
import PostPortfolio from "./Porfolio/PostPortfolio";
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
        <Route path="/projects" exact element={<Projects />} />
        <Route path="/postportfolio" exact element={<PostPortfolio />} />
        <Route path="/portfolio" exact element={<Portfolio />} />
        <Route path="/profile" exact element={<Profilepage />} />
        <Route path="/skill" exact element={<Skill />} />
        <Route path="/skillquiz" exact element={<SkillQuiz />} />
        <Route path="/search" exact element={<SearchFilter />} />
        <Route path="/sumesh" exact element={<Ski />} />
        <Route path="/courses" exact element={<Eachcourses />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/login" exact element={<Signin />} />
        <Route path="/loginoff" exact element={<LoginOff />} />
        <Route path="/logincollege" exact element={<LoginCollege />} />
        <Route path="/logout" exact element={<Logout />} />
        <Route path="/resetpassword" exact element={<ResetPass />} />
        <Route path="/reset/:token" exact element={<NewPassword />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/result" exact element={<QuizResult />} />
        <Route path="/right" exact element={<TemporaryDrawer />} />
        <Route path="/workshop" exact element={<Workshops />} />
        <Route path="/internship" exact element={<Internship />} />
        <Route path="/freelance" exact element={<Projects />} />
        <Route path="/quiz" exact element={<Quiz />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </>
  );
}

export default App;
