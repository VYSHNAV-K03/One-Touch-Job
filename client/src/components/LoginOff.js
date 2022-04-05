import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import loginbg from "../assets/images/progressbg1.png";
import { offcampus } from "../actions";
import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import { Avatar, Box, CircularProgress, Fab } from "@mui/material";
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
import { apiUrl } from "../data/api";
import axios from "axios";

const Container = styled.div`
  height: calc(100vh - 80px);
  background-image: url(${loginbg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  .logincontainer {
    margin: 6% auto auto auto;
    width: 500px;
    background: white;
    padding: 20px;
  }
  .login {
    display: flex;
    flex-direction: column;
  }
  .login .title {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 30px;
  }
  .login input {
    font-size: 1.3rem;
    outline: none;
    border: none;
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 10px;
  }
  .login a {
    margin-bottom: 15px;
    text-decoration: none;
  }
  .login button {
    padding: 5px;
    cursor: pointer;
    font-size: 1.3rem;
    color: white;
    background: teal;
    border: none;
    outline: none;
    border-radius: 10px;
    width: 100px;
  }
`;
const LoginOff = () => {
  const dispatch = useDispatch();

  const [loader_addbtn, setloader_addbtn] = useState(false);

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
    dispatch(offcampus());
    const { email, password } = user;
    try {
      setloader_addbtn(true);

      const res = await axios.post(
        apiUrl + "/signin/off",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      console.log(res);
      if (res.status === 200) {
        window.alert(res.data);
        navigate("/");
      } else {
        window.alert(res.data);
      }
      setloader_addbtn(false);
    } catch (error) {
      window.alert("invlaid credentials");
      setloader_addbtn(false);
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
          <form method="POST" className="login">
            <div className="title">SignIn</div>
            <input
              type="text"
              name="email"
              value={user.email}
              className="form-control"
              id="email"
              placeholder="Username"
              required="required"
              onChange={handleLogin}
            />
            <input
              type="password"
              className="form-control"
              name="password"
              value={user.password}
              id="password"
              placeholder="password"
              required="required"
              onChange={handleLogin}
            />
            <NavLink
              to="/resetpassword"
              style={{ textDecoration: "none", color: "blue" }}
            >
              <p>Forgot Password</p>
            </NavLink>
            <NavLink
              to="/register"
              style={{ textDecoration: "none", color: "blue" }}
            >
              <p>Create Account</p>
            </NavLink>
            {loader_addbtn ? (
              <CircularProgress />
            ) : (
              <button type="submit" onClick={Postdata}>
                Login
              </button>
            )}
          </form>
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

export default LoginOff;
