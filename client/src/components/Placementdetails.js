import { NavLink, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import tcs from "../assets/placement/tcs.jpeg";

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
import { useSelector } from "react-redux";
import { apiUrl } from "../data/api";
import axios from "axios";
import Preloader from "./preloader/Preloader";

const Container = styled.div`
  .addanddelete {
    max-width: 500px;
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.75);
  }
  .addanddelete input {
    margin: 0 0 10px 0;
  }

  .placement1 {
    padding: 10px 100px;
    background: #f0fff0;
    display: flex;
    border-bottom: 1px solid black;
  }
  .image {
    width: 200px;
    height: 180px;
    margin-right: 15px;
  }
  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 700px) {
    .addanddelete {
      padding: 10px 10px;
      flex-direction: column;
    }
    .addanddelete input {
      margin: 0 0 10px 0;
    }
    .placement1 {
      padding: 10px 10px;
    }
  }

  .items {
    text-decoration: none;
    list-style: none;
    padding: 10px 0;
  }
  .items li {
    margin-bottom: 5px;
    font-size: 1.2rem;
    font-weight: bold;
  }
  button.delete {
    font-size: 2rem;
    margin-left: auto;
    background: transparent;
    border: none;
    outline: none;
  }
  button.delete i {
    cursor: pointer;
    :hover {
      transform: scale(1.1);
      transition: all 0.2s;
    }
  }
  @media screen and (max-width: 472px) {
    .placement1 {
      padding: 5px 10px;
    }
    .image {
      width: 100px;
      height: 80px;
      margin-right: 5px;
    }
    .items li {
      font-size: 0.8rem;
    }
    button.delete {
      font-size: 1.2rem;
    }
  }
`;
///styles end

const Placementdetails = () => {
  const [values, setvalues] = useState({
    name: "",
    salary: "",
    url: "",
    file: "",
  });
  const [profile, setprofile] = useState();

  const [loader, setloader] = useState(false);

  const [loader_addbtn, setloader_addbtn] = useState(false);

  const [files, setfiles] = useState([]);
  const navigate = useNavigate();

  const [Role, setRole] = useState();

  const myLoginState = useSelector((state) => state.changeTheLogin);

  const PlacementState = useSelector((state) => state.changeThePlacementType);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.name === "file" ? e.target.files[0] : e.target.value;
    setvalues({ ...values, [name]: value });
  };

  const handleClick = async () => {
    if (!values.name || !values.salary || !values.url || !values.file) {
      window.alert("please fill properly");
    } else {
      try {
        console.log(values);
        const form = new FormData();
        form.append("name", values.name);
        form.append("salary", values.salary);
        form.append("url", values.url);
        form.append("file", values.file);

        setloader_addbtn(true);

        const res = await axios.post(
          apiUrl + `/placement/${PlacementState}/${myLoginState}`,
          form
        );
        if (res) {
          GetPlacementData();
        }
        setloader_addbtn(false);
      } catch (error) {
        console.log("placement error");
        setloader_addbtn(false);
      }
    }
  };
  const GetPlacementData = async () => {
    try {
      setloader(true);

      const res = await axios.get(
        apiUrl + `/placement/${PlacementState}/${myLoginState}`
      );

      setfiles(res.data);
      setloader(false);
    } catch (error) {
      setloader(false);

      console.log("getPlacement error", error);
    }
  };
 
  const deletePlacement = async (id) => {
    try {
      const res = await axios.delete(
        apiUrl + `/placement/${PlacementState}/${myLoginState}/${id}`
      );
      if (res) {
        window.alert("deleted successfully");
        GetPlacementData();
      }
    } catch (error) {
      console.log("delete placement error", error);
    }
  };
  const CallProjectpage = async () => {
    try {
      const res = await axios.get(apiUrl + `/getData/${myLoginState}`, {
        withCredentials: true,
      });

      const data = await res.data;
      console.log(res);
      console.log("get sumesh");

      console.log("Role", data.Role);
      setRole(data.Role);
      if (res.status !== 200) {
        throw new Error(res.error);
      }
    } catch (e) {
      console.log("sumesh", e);
      navigate("/login");
    }
  };

  useEffect(() => {
    CallProjectpage();
    GetPlacementData();
  }, []);

  const [state, setState] = React.useState({
    right: false,
  });

  const [login, setlogin] = useState(true);

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
        {sidebardata1.map((element, index) => (
          <NavLink
            to={element.link}
            key={index}
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
        {sidebardata2.map((element, index) => (
          <NavLink
            to={element.link}
            key={index}
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
        {sidebardata3.map((element, index) => (
          <NavLink
            to={element.id === 3 && !login ? "/logout" : element.link}
            key={index}
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
        position="realtive"
        toggleDrawer={(state, bool) => toggleDrawer(state, bool)}
      />
      {loader ? (
        <Preloader bg="black" />
      ) : (
        <Container>
          {Role && Role === 1 ? (
            <div className="addanddelete">
              <input
                type="text"
                name="name"
                className="form-control"
                onChange={(e) => handleChange(e)}
                placeholder="company name"
              />
              <input
                type="text"
                className="form-control"
                name="salary"
                onChange={(e) => handleChange(e)}
                placeholder="salary"
              />
              <input
                type="text"
                className="form-control"
                name="url"
                onChange={(e) => handleChange(e)}
                placeholder="url"
              />
              <input
                type="file"
                className="form-control"
                name="file"
                onChange={(e) => handleChange(e)}
                placeholder="choose image"
              />
              {loader_addbtn ? (
                <CircularProgress />
              ) : (
                <Button
                  variant="contained"
                  type="submit"
                  onClick={() => handleClick()}
                >
                  Submit
                </Button>
              )}
            </div>
          ) : (
            <></>
          )}
          {files.map((element, index) => (
            <div className="placement1" key={index}>
              <div className="image">
                <img
                  src={
                    element.photo.contentType
                      ? `data:${
                          element?.photo?.contentType
                        };base64, ${Buffer.from(
                          element?.photo?.data.data
                        ).toString("base64")}`
                      : profile
                  }
                  alt="placement img"
                />
              </div>
              <div className="details">
                <ul className="items">
                  <li>Company Name: {element.name}</li>
                  <li>salary: {element.salary}</li>
                  <li>
                    Reg Link:
                    <a href={element.url} target="_blank">
                      {element.url}
                    </a>
                  </li>
                </ul>
              </div>
              {Role && Role === 1 ? (
                <button className="delete">
                  <i
                    class="far fa-trash-alt"
                    onClick={() => {
                      deletePlacement(element._id);
                      GetPlacementData();
                    }}
                  ></i>{" "}
                </button>
              ) : (
                <></>
              )}
            </div>
          ))}
          <Drawer
            style={{ backgroundColor: "" }}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </Container>
      )}
    </>
  );
};

export default Placementdetails;
