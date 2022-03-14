import React, { useEffect, useState } from "react";
import styled from "styled-components";
import project from "../assets/images/deepdev.png";
import { getFile } from "../data/api";

const Container = styled.div`
  width: 350px;
  height: 320px;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));

  background-position: center;
  background-size: cover;
  margin: 30px auto;
`;

const Projectsingle = () => {
  const [files, setfiles] = useState([]);

  // const getFiles = async () => {
  //   try {
  //     const fileslist = getFile();
  //     console.log(fileslist);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getFiles();
  // }, []);

  return (
    <Container>
      <img src="" alt="" />
    </Container>
  );
};

export default Projectsingle;
