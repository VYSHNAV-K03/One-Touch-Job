import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import loginbg from "../assets/images/progressbg1.png";
import LoginCollege from "./LoginOff";
import Navbar from "./Navbar";
import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import { Avatar, Box, Button, Fab } from "@mui/material";
import Drawer from "@mui/material/Drawer";
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

const Container = styled.div`
  height: calc(100vh - 80px);
  background: url(${loginbg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  .logincontainer {
    margin: 6% auto auto auto;
    width: 500px;
    background: white;
    padding: 20px;
    color: black;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  }
  .loginc {
    width: 100%;
    margin: 5px 0;
  }
  .logino {
    color: white;
    cursor: pointer;
    background: coral;
    padding: 10px 20px;
    font-weight: 500;
    margin: 10px 0;
    text-align: center;
    border-radius: 10px;
  }
`;

const Signin = () => {
  const navigate = useNavigate();
  const [user, setuser] = useState({
    email: "",
    password: "",
  });

  let name, value;
  const handleLogin = (e) => {
    name = e.target.name;
    value = e.target.value;

    setuser({ ...user, [name]: value });
  };
  const Postdata = async (e) => {
    e.preventDefault(); //????

    const { email, password } = user;
    const res = await axios.post(apiUrl + "/signin", {
      email,
      password,
    });
    const data = await res;
    console.log(res);
    if (res.status === 400 || !data) {
      window.alert(data.error);
      console.log("invalid");
    } else {
      window.alert("login successfully");
      navigate("/");
    }
  };

  const [state, setState] = React.useState({
    right: false,
  });

  const [profile, setprofile] = useState();

  const [login, setlogin] = useState(true);

  const myLoginState = useSelector((state) => state.changeTheLogin);
  const callNavbar = async () => {
    try {
      const res = await axios.get(apiUrl + `/getData/${myLoginState}`, {
        withCredentials: true,
      });

      const data = await res.data;
      // console.log(res);
      console.log(data);
      setprofile(data.profile);
      setlogin(data.name ? false : true);
      if (res.status !== 200) {
        throw new Error(res.error);
      }
    } catch (e) {
      console.log(e);
    }
  };

  console.log(login);

  useEffect(() => {
    callNavbar();
  }, []);

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
        {sidebardata1.map((element) => (
          <NavLink
            to={element.link}
            style={{ textDecoration: "none", color: "black" }}
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
        {sidebardata2.map((element) => (
          <NavLink
            to={element.link}
            style={{ textDecoration: "none", color: "black" }}
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
        {sidebardata3.map((element) => (
          <NavLink
            to={element.id === 3 && !login ? "/logout" : element.link}
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button key={element.id}>
              <ListItemIcon>
                {element.id === 1 ? (
                  <BuildCircle />
                ) : element.id === 2 ? (
                  <Avatar
                    alt=""
                    src={profile ? profile : "/static/images/avatar/1.jpg"}
                    sx={{ width: 30, height: 30 }}
                  />
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

  return (
    <>
      <Navbar
        color="black"
        position="relative"
        toggleDrawer={(state, bool) => toggleDrawer(state, bool)}
      />
      <Container>
        <div className="logincontainer">
          <NavLink
            to="/logincollege"
            style={{ textDecoration: "none", color: "transparent" }}
            className="loginc"
          >
            <Button variant="contained" className="loginc">
              Login with college
            </Button>
          </NavLink>
          <NavLink
            to="/loginoff"
            style={{ textDecoration: "none", color: "transparent" }}
            className="loginc"
          >
            <Button variant="outlined" color="secondary" className="loginc">
              Off campus login
            </Button>
          </NavLink>
        </div>
        <Drawer
          style={{ backgroundColor: "" }}
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      </Container>
    </>
  );
};

export default Signin;
