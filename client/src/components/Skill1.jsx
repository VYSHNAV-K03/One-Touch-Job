import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import hacker from "../assets/images/hacker.png";
import gamedev from "../assets/images/gamedev.png";
import deepdev from "../assets/images/deepdev.png";
import appdev from "../assets/images/appdev.png";
import mldev from "../assets/images/mldev.png";
import webdev from "../assets/images/webdev.png";
import datascientist from "../assets/images/datascientist.png";
import other from "../assets/images/other.png";

const Container = styled.div`
  font-family: "Arvo", serif;

  .title {
    text-align: center;
    font-weight: bold;
    font-size: clamp(2.2rem, 3vw, 4rem);
  }
  .container {
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
    width: 100%;
    height: 100%;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    font-weight: bold;
    background: rgba(0, 0, 0, 0.5);
    text-decoration: none;
    :hover {
      background: rgba(255, 255, 255, 0.5);
      color: black;
    }
  }

  @media screen and (max-width: 1600px) {
    margin-bottom: 10px;
  }
  @media screen and (max-width: 704px) {
    .title {
      font-size: clamp(1rem, 3vw, 4rem);
    }
  }
`;
const Box = styled.div`
  width: min(380px, 98%);
  height: 290px;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: clamp(2rem, 2vw, 4rem);
  background: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  :hover {
    box-shadow: -1px 0px 13px 6px rgba(0, 0, 0, 0.51);
    -webkit-box-shadow: -1px 0px 13px 6px rgba(0, 0, 0, 0.51);
    -moz-box-shadow: -1px 0px 13px 6px rgba(0, 0, 0, 0.51);
    transform: translateY(-15px);
    transition: all 0.2s ease;
  }
  @media screen and (max-width: 704px) {
    width: min(100px, 98%);
    height: 80px;
    font-size: 0.7rem;
    font-weight: bold;
    margin: 10px auto;
    :hover {
      transform: translateY(-5px);
    }
  }
`;

const Skill1 = () => {
  return (
    <Container>
      <div className="title">Choose Your Passion</div>
      <div className="container">
        <Box image={webdev}>
          <NavLink to="/sumesh" state={{ type: "web" }} className="box1">
            Web Development
          </NavLink>
        </Box>
        <Box image={appdev}>
          <NavLink to="/sumesh" state={{ type: "app" }} className="box1">
            App Development
          </NavLink>
        </Box>{" "}
        <Box image={gamedev}>
          <NavLink to="/sumesh" state={{ type: "game" }} className="box1">
            Game Development
          </NavLink>
        </Box>{" "}
      </div>
    </Container>
  );
};

export default Skill1;
