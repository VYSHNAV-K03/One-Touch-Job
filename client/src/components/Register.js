import React, { useState } from "react";
import styled from "styled-components";
import loginbg from "../assets/images/progressbg1.png";
import Navbar from "./Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../data/api";

const Container = styled.div`
  height: calc(100vh - 80px);
  background-image: url(${loginbg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  .logincontainer {
    margin: 6% auto auto auto;
    background: white;
    padding: 20px;
    width: 500px;
  }
  .login {
    display: flex;
    flex-direction: column;
  }
  .title {
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

const Register = () => {
  const navigate = useNavigate();
  const [user, setuser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleInput = (e) => {
    // console.log(e.target.name); //this is name,email,...
    // console.log(e.target.value);
    name = e.target.name;
    value = e.target.value;

    setuser({ ...user, [name]: value });
  };

  const Postdata = async (e) => {
    e.preventDefault(); //????

    const { name, email, work, password, phone, cpassword } = user;

    const res = await axios.post(
      apiUrl + "/registe",
      {
        body: {
          name, //name :name  both are same
          email,
          work,
          password,
          phone,
          cpassword,
        },
      },
      { withCredentials: true }
    );
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
  };
  console.log("sumesh");

  return (
    <>
      <Navbar color="black" position="relative" />
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
            <button type="submit" onClick={Postdata}>
              Register
            </button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Register;
