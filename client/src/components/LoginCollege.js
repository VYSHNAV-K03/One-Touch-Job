import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import loginbg from "../assets/images/progressbg1.png";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import { coet } from "../actions";
import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import { Avatar, Box, Button, CircularProgress, Fab } from "@mui/material";
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

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Container = styled.div`
  height: 100vh;
  background: linear-gradient(270deg, #005db3 0%, rgba(0, 52, 236, 0) 81.56%);
  display: flex;
  position: relative;
  .backtohomeicon {
    position: absolute;
    top: 20px;
    left: 20px;
    cursor: pointer;
  }
  .logincontainer {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .login {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .left_title {
    font-family: "Sarabun";
    font-style: normal;
    font-weight: 600;
    font-size: 60px;
    line-height: 91px;
    text-align: center;

    color: #000000;
  }
  .left_info {
    font-family: "Sarabun";
    font-style: normal;
    font-weight: 300;
    font-size: 25px;
    line-height: 40px;
    text-align: center;

    color: #000000;
  }
  .left_icons img {
    width: 55px;
    height: 55px;
    margin: 0 10px;
  }
  .or {
    font-family: "Sarabun";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 32px;
    text-align: center;

    color: #000000;
  }
  input,
  select {
    width: 500px;
    font-family: "Sarabun";
    font-style: normal;
    font-weight: 300;
    font-size: 1.5rem;
    line-height: 44px;

    color: #000000;
    border-radius: 20px;
    margin-bottom: 20px;
  }
  .forgot_link {
    display: none;
  }
  .forgot_pass {
    font-family: "Sarabun";
    font-style: normal;
    font-weight: 300;
    font-size: 1.5rem;

    color: #000000;
  }
  .loginbtn_container {
    background: #ffffff;
    box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.41);
    border-radius: 33px;
    width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .loginbtn_container button {
    border: none;
    outline: none;
    background: transparent;
    font-family: "Sarabun";
    font-style: normal;
    font-weight: 300;
    font-size: 1.5rem;
    line-height: 44px;

    color: #000000;
  }
  .right {
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .title2 {
    font-family: "Sarabun";
    font-style: normal;
    font-weight: 600;
    font-size: 46px;
    line-height: 73px;
    text-align: center;

    color: #ffffff;
  }
  .right_info {
    font-family: "Sarabun";
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 28px;
    text-align: center;

    color: #ffffff;
  }
  .right_btn {
    width: 200px;
    height: 50px;
    background: #ffffff;
    border-radius: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Sarabun";
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 35px;
    text-align: center;
    text-decoration: none;

    color: #000000;
  }
  @media screen and (max-width: 1036px) {
    .right {
      display: none;
    }
    .forgot_link {
      display: flex;
    }
  }
  @media screen and (max-width: 624px) {
    .left_title {
      font-size: 40px;
      line-height: 40px;
    }
    .left_info {
      font-size: 19px;
      line-height: 30px;
    }
    .left_icons img {
      width: 35px;
      height: 35px;
      margin: 0 10px;
    }
    .or {
      line-height: 25px;
    }
    input,
    select {
      width: 300px;
      font-size: 1rem;
      line-height: 22px;
      margin-bottom: 10px;
    }
    .forgot_pass {
      font-size: 1rem;
    }
    .loginbtn_container {
      box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.41);
      border-radius: 33px;
      width: 100px;
      height: 40px;
    }
    .loginbtn_container button {
      font-size: 1rem;
      line-height: 14px;
    }
  }

  @media screen and (max-width: 406px) {
    .left_title {
      font-size: 25px;
      line-height: 28px;
    }
    .left_info {
      font-size: 15px;
      line-height: 18px;
    }
    .left_icons img {
      width: 30px;
      height: 30px;
      margin: 0 10px;
    }
    .or {
      line-height: 20px;
    }
    input,
    select {
      width: 250px;
      font-size: 1rem;
      line-height: 22px;
      margin-bottom: 10px;
    }
    .forgot_pass {
      font-size: 1rem;
      line-height: 12px;
    }
    .loginbtn_container {
      box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.41);
      border-radius: 33px;
      transform: scale(0.8);
    }
    .loginbtn_container button {
      font-size: 1rem;
      line-height: 14px;
    }
  }
`;

const LoginCollege = () => {
  const dispatch = useDispatch();

  const [college, setcollege] = useState("");

  const [loader_addbtn, setloader_addbtn] = useState(false);

  const navigate = useNavigate();
  const [user, setuser] = useState({
    email: "",
    password: "",
  });

  const handleCollegeChange = (e) => {
    setcollege(e.target.value);
  };

  let name, value;
  const handleLogin = (e) => {
    e.preventDefault();
    name = e.target.name;
    value = e.target.value;

    setuser({ ...user, [name]: value });
  };
  const Postdata = async (e) => {
    e.preventDefault(); //????
    const { email, password } = user;
    try {
      setloader_addbtn(true);

      const res = await axios.post(
        apiUrl + `/signin/coet`,
        {
          email,
          password,
          college,
        },
        {
          withCredentials: true,
        }
      );
      if (res.status !== 200) {
        throw new Error(res.error);
      }
      setloader_addbtn(false);

      navigate("/");
    } catch (error) {
      window.alert("invalid credentials");
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
      <Container>
        <div className="backtohomeicon" onClick={() => navigate("/login")}>
          <ArrowBackIcon />
        </div>
        <div className="logincontainer">
          <form method="POST" className="login">
            <div className="left_title">Login to your account</div>
            <p className="left_info">login using college id and password</p>
            <select className="form-select" onChange={handleCollegeChange}>
              <option value="not select" hidden>
                Select Your College
              </option>
              <option value="coet">College Of Eng Thalassery</option>
            </select>
            <input
              type="text"
              name="email"
              className="form-control"
              value={user.email}
              id="email"
              placeholder="Username"
              required="required"
              onChange={handleLogin}
            />
            <input
              type="password"
              name="password"
              className="form-control"
              value={user.password}
              id="password"
              placeholder="password"
              required="required"
              onChange={handleLogin}
            />
            <div className="loginbtn_container">
              {loader_addbtn ? (
                <CircularProgress />
              ) : (
                <button type="submit" onClick={Postdata}>
                  Login
                </button>
              )}
            </div>
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

export default LoginCollege;
