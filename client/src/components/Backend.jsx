import React from "react";

import styled from "styled-components";
import react from "../assets/images/react.png";
import angular from "../assets/images/angular.png";
import vue from "../assets/images/vue.png";
import wordpress from "../assets/images/wordpress.png";
import nomal from "../assets/images/nomal.png";

const Container = styled.div`
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
    border-radius: 50%;
    color: black;
    cursor: pointer;
    font-weight: bold;
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
  background: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: -1px 0px 13px 6px rgba(0, 0, 0, 0.51);
  -webkit-box-shadow: -1px 0px 13px 6px rgba(0, 0, 0, 0.51);
  -moz-box-shadow: -1px 0px 13px 6px rgba(0, 0, 0, 0.51);
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
  }
`;
const Backend = () => {
  return (
    <Container>
      <div className="title">Back End Web Development</div>
      <div className="container">
        <Box>
          <div className="box1"></div>
        </Box>
        <Box>
          <div className="box2"></div>
        </Box>{" "}
        <Box>
          <div className="box3"></div>
        </Box>{" "}
        <Box>
          <div className="box4"></div>
        </Box>{" "}
        <Box>
          <div className="box3"> </div>
        </Box>{" "}
      </div>
    </Container>
  );
};

export default Backend;
