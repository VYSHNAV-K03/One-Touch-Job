import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  h1 {
    font-size: 5rem;
    color: black;
  }
  .message {
    font-size: 2rem;
    margin: 10px 0;
  }
  .back {
    width: 200px;
    height: 50px;
    border-radius: 50px;
  }
`;

const Errorpage = () => {
  return (
    <Container>
      <h1>404</h1>
      <div className="message">page not found</div>
      <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
        <Button variant="contained" color="error" className="back">
          Back to homepage
        </Button>
      </NavLink>
    </Container>
  );
};

export default Errorpage;
