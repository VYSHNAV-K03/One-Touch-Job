import { Avatar, Box, Fab } from "@mui/material";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Home1 from "../components/Home1";
import Home2 from "../components/Home2";
import Home3 from "../components/Home3";
import Navbar from "../components/Navbar";
import Progressbar from "../components/Progressbar";
import ProgressCourse from "../components/ProgressCourse";
import Recommendation from "../components/Recommendation";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import { blur, notblur } from "../actions/index2";
import Preloader from "../components/preloader/Preloader";

import {
  AccountCircle,
  AirplanemodeActive,
  AlternateEmail,
  AppRegistration,
  AutoAwesomeMotion,
  BuildCircle,
  Construction,
  Help,
  HomeRepairService,
  Login,
  Logout,
  Work,
} from "@mui/icons-material";
import {
  sidebardata1,
  sidebardata2,
  sidebardata3,
} from "../frontenddatas/sidebardata";
import { useSelector } from "react-redux";
import { apiUrl } from "../data/api";
import axios from "axios";
import Formandprogress from "../Notlogin/formandprogress";
import Recommendationlogin from "./Recommendationlogin";

const Container = styled.div`
  position: relative;
  .toggleblur {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    backdrop-filter: blur(5px);
    display: ${(props) => (props.blur ? "flex" : "none")};
  }
  .skillquiz {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 0;
  }
  .skillquiz .skillquizbtn {
    font-size: 1.5rem;
    font-weight: bold;
    padding: 25px;
    color: orangered;
  }
`;

const Home = () => {
  const [state, setState] = React.useState({
    right: false,
  });

  const blurstate = useSelector((state) => state.changeTheBlur);

  const [profile, setprofile] = useState();
  const [login, setlogin] = useState(true);

  const [loader, setloader] = useState(false);

  const dispatch = useDispatch();

  const myLoginState = useSelector((state) => state.changeTheLogin);
  const callNavbar = async () => {
    try {
      setloader(true);
      const res = await axios.get(apiUrl + `/getData/${myLoginState}`, {
        withCredentials: true,
      });
      setloader(false);

      const data = await res.data;

      setprofile(data.profile);
      setlogin(data.name ? false : true);

      if (res.status !== 200) {
        throw new Error(res.error);
      }
    } catch (e) {
      console.log("call navbar", e);
      setloader(false);
    }
  };
  // if (!login) {
  //   window.scrollTo(0, 700);
  // }
  console.log(loader);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {sidebardata1.map((element, index) => (
          <NavLink
            to={element.link}
            style={{ textDecoration: "none", color: "black" }}
            key={index}
          >
            <ListItem button key={element.id}>
              <ListItemIcon>
                {element.id === 1 ? (
                  <HomeIcon />
                ) : element.id === 2 ? (
                  <Work />
                ) : element.id === 3 ? (
                  <Construction />
                ) : (
                  <HomeRepairService />
                )}
              </ListItemIcon>
              <ListItemText primary={element.name} />
            </ListItem>
          </NavLink>
        ))}
      </List>
      <Divider />
      <List>
        {sidebardata2.map((element, index) => (
          <NavLink
            to={element.link}
            style={{ textDecoration: "none", color: "black" }}
            key={index}
          >
            <ListItem button key={element.id}>
              <ListItemIcon>
                {element.id === 1 ? (
                  <AirplanemodeActive />
                ) : element.id === 4 ? (
                  <AlternateEmail />
                ) : element.id === 3 ? (
                  <AutoAwesomeMotion />
                ) : (
                  <Help />
                )}
              </ListItemIcon>
              <ListItemText primary={element.name} />
            </ListItem>
          </NavLink>
        ))}
      </List>
      <Divider />
      <List>
        {sidebardata3.map((element, index) => (
          <NavLink
            to={element.id === 3 && !login ? "/logout" : element.link}
            style={{ textDecoration: "none", color: "black" }}
            key={index}
          >
            <ListItem button key={element.id}>
              <ListItemIcon>
                {element.id === 1 ? (
                  <BuildCircle />
                ) : element.id === 2 ? (
                  <Avatar alt="" sx={{ width: 30, height: 30 }} />
                ) : element.id === 3 && !login ? (
                  <Logout />
                ) : (
                  <Login />
                )}
              </ListItemIcon>
              <ListItemText
                primary={element.id === 3 && !login ? "Sign Out" : element.name}
              />
            </ListItem>
          </NavLink>
        ))}
      </List>
      <Divider />
      {login && (
        <List>
          <NavLink
            to={"/register"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button>
              <ListItemIcon>
                <AppRegistration />
              </ListItemIcon>
              <ListItemText primary={"Register"} />
            </ListItem>
          </NavLink>
        </List>
      )}
    </Box>
  );
  const anchor = "right";
  useEffect(() => {
    callNavbar();
  }, []);
  return (
    <Container blur={blurstate}>
      {loader ? (
        <Preloader bg="rgba(0,0,0,0.8)" />
      ) : (
        <>
          <Navbar
            color="transparent"
            position="fixed"
            toggleDrawer={(state, bool) => toggleDrawer(state, bool)}
          />
          <Home1 />
          {!login ? (
            <div className="formcontainer">
              <Form />
              <Progressbar />
              <ProgressCourse />
            </div>
          ) : (
            <Formandprogress />
          )}
          <Box sx={{ "& > :not(style)": { m: 1 } }} className="skillquiz">
            <Fab variant="extended" href="/skillquiz" className="skillquizbtn">
              Take a skill Quiz
            </Fab>
          </Box>
          {login ? <Recommendation /> : <Recommendationlogin />}
          <div className="home2" id="home">
            <Home2 />
          </div>
          <Home3 />
          <Footer />
          <Drawer
            style={{ backgroundColor: "" }}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
          <div
            className="toggleblur"
            onClick={() => {
              dispatch(notblur());
            }}
          ></div>
        </>
      )}
    </Container>
  );
};

export default Home;
