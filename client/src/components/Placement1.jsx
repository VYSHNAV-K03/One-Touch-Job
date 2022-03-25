import React from "react";
import styled from "styled-components";
import placement from "../assets/images/service.png";
import skills from "../assets/images/product4.png";
import resume from "../assets/images/startup.png";
import projects from "../assets/images/freelancer.png";
import internships from "../assets/images/Internship.png";
import govt from "../assets/images/placementtraining.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  product,
  service,
  startup,
  internship,
  freelancing,
  placementTraining,
} from "../actions";
import { Button } from "@mui/material";

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
  position: relative;
  cursor: pointer;
  background-repeat: no-repeat;
  box-shadow: 10px 10px 20px #cbced1, -10px -10px 20px #ffffff;
  -webkit-box-shadow: 10px 10px 20px #cbced1, -10px -10px 20px #ffffff;
  -moz-box-shadow: 10px 10px 20px #cbced1, -10px -10px 20px #ffffff;
  :hover {
    transform: translateY(-15px);
    transition: all 0.2s ease;
  }
  .details {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 20px 8px;
    background: #157dec;
    transform: scaleY(0);
    transition: all 0.2s ease;
    color: #ffffff;
    text-align: center;
    border-radius: 15px;
  }
  .details h3 {
    font-weight: bold;
    font-size: 2rem;
  }
  .details p {
    font-size: 1.2rem;
    font-weight: bold;
  }
  .details button {
    background: white;
    font-size: 1.2rem;
    padding: 5px 10px;
    border: none;
    border-radius: 15px;
  }
  :hover .details {
    transform: scaleY(1);
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
  const navigate = useNavigate();
  return (
    <Container>
      <div className="title">Choose The Company</div>
      <div className="container">
        <Box
          image={placement}
          onClick={() => {
            dispatch(service());
            navigate("/placementeach");
          }}
        >
          <NavLink to="/placementeach" className="box1">
            Service Based
          </NavLink>
          <div className="details">
            <h3>Service Based</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque nobis fugit sapiente suscipit sed voluptates.
            </p>
          </div>
        </Box>
        <Box
          image={skills}
          onClick={() => {
            dispatch(product());
            navigate("/placementeach");
          }}
        >
          <NavLink to="/placementeach" className="box2">
            Product Based
          </NavLink>
          <div className="details">
            <h3>Product Based</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque nobis fugit sapiente suscipit sed voluptates.
            </p>
          </div>
        </Box>{" "}
        <Box
          image={projects}
          onClick={() => {
            dispatch(startup());
            navigate("/placementeach");
          }}
        >
          <NavLink to="/placementeach" className="box3">
            Start Up
          </NavLink>{" "}
          <div className="details">
            <h3> Start Up</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque nobis fugit sapiente suscipit sed voluptates.
            </p>
          </div>
        </Box>{" "}
        <Box
          image={internships}
          onClick={() => {
            navigate("/internship");
          }}
        >
          <div className="box3">Internships</div>
          <div className="details">
            <h3>Internships</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque nobis fugit sapiente suscipit sed voluptates.
            </p>
          </div>
        </Box>{" "}
        <Box
          image={resume}
          onClick={() => {
            navigate("/freelance");
          }}
        >
          <div className="box4">Freelancer</div>
          <div className="details">
            <h3>Freelancer</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque nobis fugit sapiente suscipit sed voluptates.
            </p>
          </div>
        </Box>
        <Box
          image={govt}
          onClick={() => {
            navigate("/placementtraining");
          }}
        >
          <div className="box4">Placement Training</div>
          <div className="details">
            <h3>Placement Training</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque nobis fugit sapiente suscipit sed voluptates.
            </p>
          </div>
        </Box>
      </div>
    </Container>
  );
};

export default Placement1;
