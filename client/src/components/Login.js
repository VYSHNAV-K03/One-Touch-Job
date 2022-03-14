import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import loginbg from "../assets/images/contactbg1.jpg";
import { apiUrl } from "../data/api";
import LoginCollege from "./LoginOff";
import Navbar from "./Navbar";

const Container = styled.div`
  height: calc(100vh - 80px);
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url(${loginbg});
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
  }
  .loginc {
    color: white;
    background: blue;
    padding: 10px 20px;
    margin: 10px 0;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    font-weight: 500;
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

const Login = () => {
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
  return (
    <>
      <Navbar color="black" position="relative" />
      <Container>
        <div className="logincontainer">
          <NavLink
            to="/logincollege"
            style={{ textDecoration: "none", color: "transparent" }}
          >
            <p className="loginc">Login with college</p>
          </NavLink>
          <NavLink
            to="/loginoff"
            style={{ textDecoration: "none", color: "transparent" }}
          >
            <p className="logino">Off campus login</p>
          </NavLink>
        </div>
      </Container>
    </>
  );
};

export default Login;
