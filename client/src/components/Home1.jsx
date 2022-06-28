import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { apiUrl } from "../data/api";
import logo from "../assets/images/onetouchjob2.png";
import bg from "../assets/images/background.avif";

const desktop = "1200px";
const laptop = "1024px";
const tablet = "768px";
const phone = "480px";

const Container = styled.div`
  font-family: "Arvo", serif;
  height: 100vh;
  /* background: url("https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80"); */
  /* background: url("https://images.unsplash.com/photo-1646724586973-43f235fc7c22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"); */
  /* background: url("https://images.unsplash.com/photo-1640622843377-6b5af9417e70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"); */
  /* background: url("https://images.unsplash.com/photo-1597742800947-e17e915b8d83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"); */
  background: url(${bg});

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  font-family: "Roboto", sans-serif;
  .leftcontainer,
  .rightcontainer {
    height: 90%;
    width: 35%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
  }
  .leftcontainer .title-info {
    font-size: 2.8rem;
    font-weight: 700;
    margin-bottom: 10px;
    text-shadow: 20px 15px 5px rgba(255, 255, 255, 0.14);
  }
  .desc {
    font-size: 1.3rem;
    margin-bottom: 20px;
    text-shadow: 20px 15px 5px rgba(255, 255, 255, 0.14);
  }
  .start-btn {
    width: 200px;
    margin-top: 10px;
  }
  @media screen and (max-width: 1321px) {
    .leftcontainer .title-info {
      font-size: 1.8rem;
      margin-bottom: 5px;
    }
    .desc {
      font-size: 1rem;
      margin-bottom: 10px;
    }
    .start-btn {
      width: 150px;
      margin-top: 5px;
      font-size: 0.8rem;
    }
  }
  @media screen and (max-width: 823px) {
    .leftcontainer,
    .rightcontainer {
      height: 90%;
      width: 45%;
    }
  }
  .rightcontainer {
  }
  .image {
    border-radius: 50%;
    width: clamp(200px, 30vw, 500px);
    height: clamp(200px, 30vw, 500px);
  }
  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: -2px 5px 17px 0px rgba(235, 230, 230, 0.77);
    -webkit-box-shadow: -2px 5px 17px 0px rgba(235, 230, 230, 0.77);
    -moz-box-shadow: -2px 5px 17px 0px rgba(235, 230, 230, 0.77);

    animation: logoanimate 5s linear infinite;
  }
  @keyframes logoanimate {
    0% {
      transform: translate(0, 0);
    }
    30% {
      transform: translate(10px, 10px);
    }
    60% {
      transform: translate(20px, 0);
    }

    100% {
      transform: translate(0, 0);
    }
  }
  @media screen and (max-width: ${laptop}) {
    height: 600px;
    .image {
      margin: auto;
    }
  }
  @media screen and (max-width: 600px) {
    .leftcontainer {
      width: 90%;
    }
    .rightcontainer {
      display: none;
    }
    .leftcontainer .title-info {
      font-size: 1.6rem;
    }
    .desc {
      font-size: 0.9rem;
    }
    .start-btn {
      width: 150px;
      margin-top: 5px;
      font-size: 0.8rem;
    }
  }
`;

const Home1 = () => {
  return (
    <Container>
      <div className="leftcontainer">
        <div className="title-info">Create Your Future With Us</div>
        <div className="desc">
        </div>
        <div className="desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum hic
          atque mollitia exercitationem? Molestias?
        </div>
        <div className="desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum hic
          nisi ipsam perspiciatis quo quidem alias atque mollitia
          exercitationem? Molestias?
        </div>
        <Button
          className="start-btn"
          variant="contained"
          color="primary"
          onClick={() => window.scrollTo(0, 800)}
        >
          Get Start
        </Button>
      </div>
      <div className="rightcontainer">
        <div className="image">
          <img src={logo} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Home1;
