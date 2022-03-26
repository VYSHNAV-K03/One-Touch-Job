import React, { useState, useEffect } from "react";
import styled from "styled-components";
import loginbg from "../assets/images/progressbg1.png";
import Navbar from "./Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import { Drawer } from "@mui/material";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import { Avatar, Box, Fab } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";

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
  background-image: url(${loginbg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  padding: 10px;
  .logincontainer {
    margin: auto;
    background: white;
    padding: 10px;
    width: 400px;
    border-radius: 10px;
    box-shadow: 0px 1px 7px 1px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 1px 7px 1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 1px 7px 1px rgba(0, 0, 0, 0.75);
  }
  .login {
    display: flex;
    flex-direction: column;
  }
  .title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .login input {
    font-size: 1.2rem;
    outline: none;
    border: none;
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 15px;
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
  @media screen and (max-width: 426px) {
    .logincontainer {
      width: 250px;
    }
    .title {
      font-size: 1.7rem;
    }
    .login input {
      font-size: 1rem;
      margin-bottom: 5px;
    }
    .login button {
      font-size: 1rem;
      border-radius: 5px;
    }
  }
`;

const Register = () => {
  const [state, setState] = React.useState({
    right: false,
  });

  const navigate = useNavigate();
  const [user, setuser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });
  const [profileimg, setprofileimg] = useState();

  console.log(profileimg);

  let name, value;
  const handleInput = (e) => {
    // console.log(e.target.name); //this is name,email,...
    // console.log(e.target.value);
    name = e.target.name;
    value = e.target.value;

    setuser({ ...user, [name]: value });
  };

  const [login, setlogin] = useState(true);

  const myLoginState = useSelector((state) => state.changeTheLogin);
  const callNavbar = async () => {
    try {
      const res = await axios.get(apiUrl + `/getData/${myLoginState}`, {
        withCredentials: true,
      });

      const data = await res.data;

      setlogin(data.name ? false : true);

      if (res.status !== 200) {
        throw new Error(res.error);
      }
    } catch (e) {
      console.log("call navbar", e);
    }
  };

  const Postdata = async (e) => {
    e.preventDefault(); //????
    const { name, email, work, password, phone, cpassword } = user;

    if (
      !name ||
      !email ||
      !work ||
      !password ||
      !phone ||
      !cpassword ||
      !profileimg
    ) {
      window.alert("please fill properly");
    } else {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("work", work);
      formData.append("password", password);
      formData.append("phone", phone);
      formData.append("cpassword", cpassword);
      formData.append("file", profileimg);

      const res = await axios.post(apiUrl + "/registe", formData, {
        withCredentials: true,
      });
      const data = await res.data;
      console.log(data.status);

      if (data.status === 422) {
        window.alert(data.error);
        // console.log(res);
        console.log("invalid registration");
      } else {
        window.alert("registration successful");
        console.log("registration successful");

        navigate("/login");
      }
    }
  };
  console.log("sumesh");

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
    <>
      <Navbar
        color="black"
        position="relative"
        toggleDrawer={(state, bool) => toggleDrawer(state, bool)}
      />
      <Container>
        <div className="logincontainer">
          <form method="POST" className="login">
            <div className="title">Signup</div>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              value={user.name}
              onChange={handleInput}
              placeholder="Username"
              required="required"
            />
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              value={user.email}
              onChange={handleInput}
              placeholder="Email"
              required="required"
            />
            <input
              className="form-control"
              type="tel"
              name="phone"
              id="phone"
              value={user.phone}
              onChange={handleInput}
              placeholder="Phone"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required="required"
            />
            <input
              type="text"
              placeholder="work"
              className="form-control"
              name="work"
              id="work"
              value={user.work}
              onChange={handleInput}
              required="required"
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              className="form-control"
              id="password"
              value={user.password}
              onChange={handleInput}
              required="required"
            />
            <input
              type="password"
              className="form-control"
              placeholder="confirm password"
              name="cpassword"
              id="cpassword"
              value={user.cpassword}
              onChange={handleInput}
              required="required"
            />
            <input
              type="file"
              onChange={(e) => setprofileimg(e.target.files[0])}
            />
            <button type="submit" onClick={Postdata}>
              Register
            </button>
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

export default Register;
