import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import loginbg from "../assets/images/contactbg1.jpg";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import { coet } from "../actions";
import { apiUrl } from "../data/api";
import axios from "axios";

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

const ResetPass = () => {
  const [email, setemail] = useState("");

  const Postdata = async (e) => {
    e.preventDefault(); //????

    const res = await axios.post(
      apiUrl + `/reset-password`,
      {
        body: {
          email,
        },
      },
      { withCredentials: true }
    );
    console.log(res);
    if (res) {
      window.alert("check your mail");
    }
  };

  const handleLogin = (e) => {
    setemail(e.target.value);
  };

  return (
    <>
      <Navbar color="black" position="relative" />
      <Container>
        <div className="logincontainer">
          <form method="POST" className="login">
            <div className="title">Reset Password</div>

            <input
              type="text"
              name="email"
              value={email}
              id="email"
              placeholder="Username"
              required="required"
              onChange={handleLogin}
            />

            <button type="submit" onClick={Postdata}>
              Send
            </button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default ResetPass;
