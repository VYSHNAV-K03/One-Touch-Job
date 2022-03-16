import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Project1 from "../components/Project1";
import image from "../assets/images/coming-soon.jpg";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .image {
    margin: 50px 20px;
  }
`;

const Projects = () => {
  const navigate = useNavigate();
  return (
    <Container>
      {/* <Project1 /> */}
      <Button variant="outlined" color="primary" onClick={() => navigate("/")}>
        Back To home
      </Button>
      <div className="image">
        <img src={image} alt="" />
      </div>
    </Container>
  );
};

export default Projects;
