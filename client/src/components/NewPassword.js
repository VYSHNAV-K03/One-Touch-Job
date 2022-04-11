import React, { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import loginbg from "../assets/images/contactbg1.jpg";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import { coet } from "../actions";
import axios from "axios";
import { apiUrl } from "../data/api";
import { CircularProgress } from "@mui/material";

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
`;

const NewPassword = () => {
  const [password, setpass] = useState("");
  const navigate = useNavigate();

  const [loader_addbtn, setloader_addbtn] = useState(false);

  const { token } = useParams();
  console.log(token);
  const Postdata = async (e) => {
    try {
      e.preventDefault(); //????
      setloader_addbtn(true);

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
      setloader_addbtn(false);
    } catch (error) {
      window.alert("something went wrong");
      setloader_addbtn(false);
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
            <div className="loginbtn_container">
              {loader_addbtn ? (
                <CircularProgress />
              ) : (
                <button type="submit" onClick={Postdata}>
                  Send
                </button>
              )}
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};

export default NewPassword;
