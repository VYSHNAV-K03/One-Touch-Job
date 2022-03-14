import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import {
  reactcourse,
  angularcourse,
  vuecourse,
  wordpresscourse,
  normalcourse,
} from "../actions";

import styled from "styled-components";
import react from "../assets/images/react.png";
import html from "../assets/images/html.png";
import angular from "../assets/images/angular.png";
import vue from "../assets/images/vue.png";
import wordpress from "../assets/images/wordpress.png";
import nomal from "../assets/images/nomal.png";
import Courses from "./Courses";

const Container = styled.div`
  .title {
    text-align: center;
    font-weight: bold;
    font-size: clamp(2.2rem, 3vw, 4rem);
  }
  .containertutorialsfrontend {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .box1,
  .box2,
  .box3,
  .box4 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 96%;
    height: 96%;
    border-radius: 50%;
    color: black;
    cursor: pointer;
    font-weight: bold;
    box-shadow: inset 5px 5px 10px #cbced1, inset -5px -5px 10px #ffffff;
    -webkit-box-shadow: inset 5px 5px 10px #cbced1, inset -5px -5px 10px #ffffff;
    -moz-box-shadow: inset 5px 5px 10px #cbced1, inset -5px -5px 10px #ffffff;
  }
  .box1 {
  }
  @media screen and (max-width: 1600px) {
    margin-bottom: 10px;
  }
  @media screen and (max-width: 704px) {
    .title {
      font-size: clamp(1rem, 3vw, 4rem);
    }
    .box1,
    .box2,
    .box3,
    .box4 {
      width: 95.5%;
      height: 95.5%;
      box-shadow: inset 5px 5px 5px #cbced1, inset -5px -5px 5px #ffffff;
      -webkit-box-shadow: inset 5px 5px 5px #cbced1, inset -5px -5px 5px #ffffff;
      -moz-box-shadow: inset 5px 5px 5px #cbced1, inset -5px -5px 5px #ffffff;
    }
    padding: 80px 3px;
  }
`;
const Box = styled.div`
  border-radius: 50%;
  width: 250px;
  height: 250px;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  text-decoration: none;
  background: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 10px 10px 20px #cbced1, -10px -10px 20px #ffffff;
  -webkit-box-shadow: 10px 10px 20px #cbced1, -10px -10px 20px #ffffff;
  -moz-box-shadow: 10px 10px 20px #cbced1, -10px -10px 20px #ffffff;
  :hover {
    transform: translateY(-10px);
    transition: all 0.2s ease;
  }
  @media screen and (max-width: 704px) {
    width: 100px;
    height: 100px;
    font-size: 0.6rem;
    font-weight: bold;
    margin: 10px auto;
    :hover {
      transform: translateY(-5px);
    }
    box-shadow: 1px 1px 15px #cbced1, -1px -1px 15px #ffffff;
    -webkit-box-shadow: 1px 1px 15px #cbced1, -1px -1px 15px #ffffff;
    -moz-box-shadow: 1px 1px 15px #cbced1, -1px -1px 15px #ffffff;
  }
`;

const Frontend = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <h4 className="title">MERN STACK</h4>
      <div className="containertutorialsfrontend">
        <Box image={html}>
          <NavLink
            to="/courses"
            style={{ textDecoration: "none" }}
            className="box1"
            onClick={() => dispatch(reactcourse())}
          >
            React Js Web dev
          </NavLink>
        </Box>{" "}
        <Box image={react}>
          <NavLink
            to="/courses"
            style={{ textDecoration: "none" }}
            className="box1"
            onClick={() => dispatch(reactcourse())}
          >
            React Js Web dev
          </NavLink>
        </Box>
        <Box image={react}>
          <NavLink
            to="/courses"
            style={{ textDecoration: "none" }}
            className="box1"
            onClick={() => dispatch(reactcourse())}
          >
            React Js Web dev
          </NavLink>
        </Box>
        <Box image={angular}>
          <NavLink
            to="/courses"
            style={{ textDecoration: "none" }}
            className="box2"
            onClick={() => dispatch(angularcourse())}
          >
            Angular Js Web dev
          </NavLink>
        </Box>{" "}
        <Box image={vue}>
          <NavLink
            to="/courses"
            style={{ textDecoration: "none" }}
            className="box3"
            onClick={() => dispatch(vuecourse())}
          >
            Vue Js Web Dev
          </NavLink>
        </Box>{" "}
      </div>
      <h4 className="title">Backend Technologies</h4>
      <div className="containertutorialsfrontend">
        <Box image={react}>
          <NavLink
            to="/courses"
            style={{ textDecoration: "none" }}
            className="box1"
            onClick={() => dispatch(reactcourse())}
          >
            React Js Web dev
          </NavLink>
        </Box>{" "}
        <Box image={react}>
          <NavLink
            to="/courses"
            style={{ textDecoration: "none" }}
            className="box1"
            onClick={() => dispatch(reactcourse())}
          >
            React Js Web dev
          </NavLink>
        </Box>{" "}
        <Box image={react}>
          <NavLink
            to="/courses"
            style={{ textDecoration: "none" }}
            className="box1"
            onClick={() => dispatch(reactcourse())}
          >
            React Js Web dev
          </NavLink>
        </Box>
      </div>
      <h4 className="title">Projects Section</h4>
      <div className="containertutorialsfrontend">
        <Box image={react}>
          <NavLink
            to="/courses"
            style={{ textDecoration: "none" }}
            className="box1"
            onClick={() => dispatch(reactcourse())}
          >
            React Js Web dev
          </NavLink>
        </Box>{" "}
        <Box image={react}>
          <NavLink
            to="/courses"
            style={{ textDecoration: "none" }}
            className="box1"
            onClick={() => dispatch(reactcourse())}
          >
            React Js Web dev
          </NavLink>
        </Box>{" "}
        <Box image={react}>
          <NavLink
            to="/courses"
            style={{ textDecoration: "none" }}
            className="box1"
            onClick={() => dispatch(reactcourse())}
          >
            React Js Web dev
          </NavLink>
        </Box>
      </div>
    </Container>
  );
};

export default Frontend;
