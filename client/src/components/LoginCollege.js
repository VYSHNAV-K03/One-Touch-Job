import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import loginbg from "../assets/images/contactbg1.jpg";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import { coet } from "../actions";
import axios from "axios";
import { apiUrl } from "../data/api";

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

const LoginCollege = () => {
  const dispatch = useDispatch();

  const [college, setcollege] = useState("");

  const handleCollegeChange = (e) => {
    setcollege(e.target.value);
  };

  const navigate = useNavigate();
  const [user, setuser] = useState({
    email: "",
    password: "",
  });

  let name, value;
  const handleLogin = (e) => {
    e.preventDefault();
    name = e.target.name;
    value = e.target.value;

    setuser({ ...user, [name]: value });
  };
  const Postdata = async (e) => {
    e.preventDefault(); //????

    dispatch(coet());
    

    const { email, password } = user;
    const res = await axios.post(
      apiUrl + `/signin/${college}`,
      {
        body: {
          email,
          password,
          college,
        },
      },
      {
        withCredentials: true,
      }
    );
    const data = await res.data;
    console.log(res);
    if (data.status === 400 || !data) {
      window.alert(data.error);
      console.log("invalid credentials");
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
          <form method="POST" className="login">
            <div className="title">SignIn</div>
            <select name="" id="" onChange={handleCollegeChange}>
              <option value="not select">Select Your College</option>
              <option value="coet">College Of Eng Thalassery</option>
              <option value="coev">College Of Eng Vadakara</option>
              <option value="coetr">College Of Eng Thrissur</option>
            </select>
            <input
              type="text"
              name="email"
              value={user.email}
              id="email"
              placeholder="Username"
              required="required"
              onChange={handleLogin}
            />
            <input
              type="password"
              name="password"
              value={user.password}
              id="password"
              placeholder="password"
              required="required"
              onChange={handleLogin}
            />
            {/* <NavLink
              to="/register"
              style={{ textDecoration: "none", color: "transparent" }}
            >
              <a href="">Create Account</a>
            </NavLink> */}
            <button type="submit" onClick={Postdata}>
              Login
            </button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default LoginCollege;
