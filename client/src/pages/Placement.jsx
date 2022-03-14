import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Placement1 from "../components/Placement1";

const Container = styled.div``;


const Placement = () => {
  return (
    <Container>
      <Navbar color="black" position="realtive" />
      <Placement1 />
    </Container>
  );
};

export default Placement;
