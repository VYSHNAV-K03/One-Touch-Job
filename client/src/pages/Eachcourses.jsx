import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Courses from "../components/Courses";
import styled from "styled-components";

const Container = styled.div``;

const Eachcourses = () => {
  return (
    <Container>
      <Navbar color="black" position="relative" />
      <Courses />
    </Container>
  );
};

export default Eachcourses;
