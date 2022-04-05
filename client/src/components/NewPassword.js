import React, { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
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

const NewPassword = () => {
  const [password, setpass] = useState("");
  const navigate = useNavigate();

  const { token } = useParams();
  console.log(token);
  const Postdata = async (e) => {
    try {
      e.preventDefault(); //????

      const res = await axios.post(
        apiUrl + "/new-password",
        {
          password,
          token,
        },
        { withCredentials: true }
      );
      console.log(res);
      if (res) {
        window.alert("Your password update successfully");
        navigate("/login");
      }
    } catch (error) {
      window.alert("something went wrong");
    }
  };

  const handleLogin = (e) => {
    setpass(e.target.value);
  };

  return (
    <>
      <Navbar color="black" position="relative" />
      <Container>
        <div className="logincontainer">
          <form method="POST" className="login">
            <input
              type="password"
              name="email"
              value={password}
              id="email"
              placeholder="Enter New Password"
              required="required"
              onChange={handleLogin}
            />
            <button type="submit" onClick={Postdata}>
              Reset Password
            </button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default NewPassword;
