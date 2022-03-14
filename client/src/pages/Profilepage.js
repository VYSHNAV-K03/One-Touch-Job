import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";

const Container = styled.div``;

const Profilepage = () => {
 

  return (
    <Container>
      <Navbar position="relative" color="black" />
      <Profile />
    </Container>
  );
};

export default Profilepage;
