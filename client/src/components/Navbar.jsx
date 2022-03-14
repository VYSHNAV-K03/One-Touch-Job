import React, { useEffect, useState } from "react";
import styled from "styled-components";
import profile1 from "../assets/profile/profile1.png";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { apiUrl } from "../data/api";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Search } from "@mui/icons-material";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 100px;
  z-index: 100;
  width: 100%;
  position: ${(props) => props.posi};
  top: 0;
  background: ${(props) => props.bg};

  @media screen and (max-width: 1300px) {
    padding: 15px;
  }
  .titlecontainer-nav {
    font-size: clamp(2rem, 2vw, 3rem);
    color: white;
    font-weight: 500;
    font-family: "Luckiest Guy", cursive;
    cursor: pointer;
    text-decoration: none;
    line-height: 40px;
  }
  @media screen and (max-width: 495px){
    .titlecontainer-nav {
    font-size: 1.6rem;
  }
  }
  .searchbar-nav {
    display: flex;
    background: #ffff;
    border-radius: 20px;
    padding: 8px 5px;
    margin: auto;
    cursor: pointer;
    text-decoration: none;
  }
  .searchbar-nav .searchicon {
    margin: 0 2px;
  }
  .searchbar-nav input {
    border: none;
    outline: none;
    width: 500px;
    font-size: 1.1rem;
  }
  @media screen and (max-width: 1109px) {
    .searchbar-nav input {
      width: 200px;
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 779px) {
    .searchbar-nav {
      display: none;
    }
    .titlecontainer-nav {
      margin-right: auto;
    }
  }

  .items-nav {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    font-size: 1rem;
    text-transform: uppercase;
    text-decoration: none;
    margin: auto 10px;
  }
  @media screen and (max-width: 1300px) {
    .items-nav {
      font-size: 0.8rem;
    }
  }
  @media screen and (max-width: 530px) {
    .items-nav{
      display:none;
    }
  }
  .items-nav li {
    display: flex;
    cursor: pointer;
    font-weight: bold;
    margin:auto 10px;
  }
 

  .items-nav p {
    color: #fff;
    margin:auto;
    :hover {
      color: #ff5f1f;
    }
  }

  .profileimage-nav {
    width: 50px;
    height: 50px;
    position: relative;
  }
  .profileimage-nav img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 3px solid white;
    border-radius: 50%;
  }
  

  }
`;

const Navbar = (props) => {
  // const [profileitems, setprofileitems] = useState(false);
  const [state, setstate] = useState(false);
  const [color, setcolor] = useState(props.color);

  const [login, setlogin] = useState(true);
  const [user, setuser] = useState([]);

  const [imageexpansion, setimageexpansion] = useState(false);

  const [profilepath, setprofilepath] = useState();

  window.addEventListener("scroll", () =>
    window.scrollY <= 10 ? setcolor(props.color) : setcolor("black")
  );

  const myLoginState = useSelector((state) => state.changeTheLogin);

  const callNavbar = async () => {
    try {
      const res = await axios.get(apiUrl + `/getData/${myLoginState}`, {
        withCredentials: true,
      });

      const data = await res.data;
      // console.log(res);
      console.log(data);
      setprofilepath(data.profile);
      setuser(data);
      setlogin(data.name ? false : true);
      if (res.status !== 200) {
        throw new Error(res.error);
      }
    } catch (e) {
      console.log(e);
    }
  };
  // if (user) {
  //   setlogin(false);
  // } else {
  //   setlogin(true);
  // }

  const [profile, setprofile] = useState();
  const [updatedimage, setupdatedimage] = useState([]);

  const handleChange = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file.target.files[0]);
    setupdatedimage(file.target.files[0]);
    // console.log(reader.result);
    reader.onload = () => {
      if (reader.readyState == 2) {
        setprofile(reader.result);
      }
    };
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", updatedimage);
      const res = await axios.post(
        apiUrl + `/profileimage/${myLoginState}`,
        formData,
        {
          withCredentials: true,
        }
      );
      callNavbar();
      setimageexpansion(!imageexpansion);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callNavbar();
  }, []);

  return (
    <Container bg={color} posi={props.position}>
      <NavLink to="/" className="titlecontainer-nav">
        ONE TOUCH JOB
      </NavLink>
      <NavLink to="/search" className="searchbar-nav">
        <Search className="searchicon" />
        <input type="text" placeholder="Search here..." />
      </NavLink>

      <ul className="items-nav">
        {login && (
          <li>
            <NavLink
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              <p>Sign in</p>
            </NavLink>
          </li>
        )}
        {login ? (
          <li>
            <NavLink
              to="/register"
              style={{ textDecoration: "none", color: "white" }}
            >
              <p>Register</p>
            </NavLink>
          </li>
        ) : (
          <li>
            <NavLink
              to="/logout"
              style={{ textDecoration: "none", color: "white" }}
            >
              <p>Sign Out</p>
            </NavLink>
          </li>
        )}
        {!login && (
          <li>
            <div className="profileimage-nav">
              <img
                src={profilepath ? profilepath : profile1}
                alt=""
                className="small"
              />
            </div>
          </li>
        )}
      </ul>
      <IconButton
        size="small"
        edge="start"
        style={{ color: "white", marginRight: 20 }}
        aria-label="menu"
        onClick={props.toggleDrawer && props.toggleDrawer("right", true)}
      >
        <MenuIcon style={{ color: "white", fontSize: 35 }} />
      </IconButton>
    </Container>
  );
};

export default Navbar;
