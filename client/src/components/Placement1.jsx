import React from "react";
import styled from "styled-components";
import placement from "../assets/images/service.png";
import skills from "../assets/images/product4.png";
import resume from "../assets/images/startup.png";
import projects from "../assets/images/freelancer.png";
import internships from "../assets/images/Internship.png";
import govt from "../assets/images/placementtraining.png";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  product,
  service,
  startup,
  internship,
  freelancing,
  placementTraining,
} from "../actions";

const Container = styled.div`
  padding: 0 180px;
  .title {
    font-size: clamp(2rem, 3vw, 4rem);
    text-align: center;
    font-weight: bold;
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
    width: 96%;
    height: 96%;
    border-radius: 15px;
    cursor: pointer;
    color: black;
    text-decoration: none;
    font-weight: bold;
    box-shadow: inset 5px 5px 10px #cbced1, inset -5px -5px 10px #ffffff;
    -webkit-box-shadow: inset 5px 5px 10px #cbced1, inset -5px -5px 10px #ffffff;
    -moz-box-shadow: inset 5px 5px 10px #cbced1, inset -5px -5px 10px #ffffff;
  }

  @media screen and (max-width: 1600px) {
    margin-bottom: 10px;
  }
  @media screen and (max-width: 704px) {
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
    .title {
      font-size: clamp(1rem, 3vw, 4rem);
    }
  }
`;
const Box = styled.div`
  border-radius: 15px;
  width: min(380px, 98%);
  height: 270px;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: clamp(2rem, 2.1vw, 4rem);
  background: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 10px 10px 20px #cbced1, -10px -10px 20px #ffffff;
  -webkit-box-shadow: 10px 10px 20px #cbced1, -10px -10px 20px #ffffff;
  -moz-box-shadow: 10px 10px 20px #cbced1, -10px -10px 20px #ffffff;
  :hover {
    transform: translateY(-15px);
    transition: all 0.2s ease;
  }
  @media screen and (max-width: 704px) {
    margin: 10px auto;
    width: min(100px, 98%);
    height: 80px;
    font-size: 0.5rem;
    font-weight: bold;
    box-shadow: 1px 1px 15px #cbced1, -1px -1px 15px #ffffff;
    -webkit-box-shadow: 1px 1px 15px #cbced1, -1px -1px 15px #ffffff;
    -moz-box-shadow: 1px 1px 15px #cbced1, -1px -1px 15px #ffffff;
    :hover {
      transform: translateY(-5px);
    }
  }
`;

const Placement1 = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <div className="title">Choose The Company</div>
      <div className="container">
        <Box image={placement} onClick={() => dispatch(service())}>
          <NavLink to="/placementeach" className="box1">
            Service Based
          </NavLink>
        </Box>
        <Box image={skills} onClick={() => dispatch(product())}>
          <NavLink to="/placementeach" className="box2">
            Product Based
          </NavLink>
        </Box>{" "}
        <Box image={projects} onClick={() => dispatch(startup())}>
          <NavLink to="/placementeach" className="box3">
            Start Up
          </NavLink>{" "}
        </Box>{" "}
        <Box image={internships} onClick={() => dispatch(internship())}>
          <div className="box3">Internships</div>
        </Box>{" "}
        <Box image={resume} onClick={() => dispatch(freelancing())}>
          <div className="box4">Freelancer</div>
        </Box>
        <Box image={govt} onClick={() => dispatch(placementTraining())}>
          <div className="box4">Placement Training</div>
        </Box>
      </div>
    </Container>
  );
};

export default Placement1;
