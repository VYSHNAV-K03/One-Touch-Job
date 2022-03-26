import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { updatePassion } from "../data/api";
import styled from "styled-components";
import { Button } from "@mui/material";

const Container = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  .container-form {
    background: #f8f8ff;
    max-width: 500px;
    padding: 10px;
    border-radius: 5px;
    font-size: 1.2rem;
    box-shadow: -1px 0px 8px 1px rgba(0, 0, 0, 0.64);
    -webkit-box-shadow: -1px 0px 8px 1px rgba(0, 0, 0, 0.64);
    -moz-box-shadow: -1px 0px 8px 1px rgba(0, 0, 0, 0.64);
    transition: all 0.5s ease;
    :hover {
      transform: scale(1.05);
    }
  }
  .formclick {
    background: transparent;
    font-size: 1.5rem;
    text-transform: capitalize;
    cursor: pointer;
    border: none;
    width: 100%;
    height: 100%;
    text-align: center;
  }
  .formclick i {
    position: relative;
    bottom: -7.5px;
    right: -8px;
    animation-name: animate;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
  @keyframes animate {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
  .form {
    display: flex;
    flex-direction: column;
  }
  .form label {
    font-size: 1.2rem;
    margin-bottom: 5px;
  }
  .form select {
    margin-bottom: 20px;
    cursor: pointer;
    padding: 5px;
    font-size: 1.1rem;
    width: 350px;
  }
`;

const Form = () => {
  const [passion, setpassion] = useState("web");
  const [web, setweb] = useState("full");
  const [app, setapp] = useState("android");
  const [final, setfinal] = useState("not selected");

  const [button, setbutton] = useState(false);

  const myLoginState = useSelector((state) => state.changeTheLogin);

  const handlePassionChange = (e) => {
    setpassion(e.target.value);
  };

  const handlewebchange = (e) => {
    setweb(e.target.value);
  };
  const handleappchange = (e) => {
    setapp(e.target.value);
  };
  const handleAppFinal = (e) => {
    setfinal(e.target.value);
  };

  const handleUpdateFinalPassion = async () => {
    try {
      await updatePassion(final, myLoginState);
    } catch (error) {
      console.log("update", error);
    }
  };

  // useEffect(() => {
  //   handleFormDisplay();
  // }, [button]);

  return (
    <Container>
      <div className="container-form">
        <button
          style={{ display: button ? "none" : "flex" }}
          className="formclick"
          onClick={() => setbutton(true)}
        >
          Choose the stack you want to learn
          <i className="fal fa-play-circle"></i>
        </button>
        <form style={{ display: button ? "flex" : "none" }} className="form">
          <label>choose your passion:</label>
          <select className="form-select" onChange={handlePassionChange}>
            <option value="none">Select an Option</option>
            <option value="web">web development</option>
            {/* <option value="app">App development</option> */}
          </select>
          {passion === "web" || passion === "app" ? (
            <label>choose stack1:</label>
          ) : (
            <></>
          )}
          {passion === "web" ? (
            <select className="form-select" onChange={handlewebchange}>
              <option value="none">Select an Option</option>
              <option value="full">Full stack web development</option>
              <option value="front">Front end web development</option>
              <option value="back">Backend web development</option>
            </select>
          ) : passion === "app" ? (
            <select className="form-select" onChange={handleAppFinal}>
              <option value="none">Select an Option</option>
              <option value="flutter">Flutter</option>
              <option value="react-native">React Native</option>
            </select>
          ) : (
            <></>
          )}
          {passion === "web" ? <label>choose stack2:</label> : <></>}
          {passion === "web" && web === "full" ? (
            <select className="form-select" onChange={handleAppFinal}>
              <option value="none">Select an Option</option>
              <option value="mern">MERN STACK</option>
              <option value="mean">MEAN STACK</option>
              <option value="mevn">MEVN STACK</option>
            </select>
          ) : passion === "web" && web === "front" ? (
            <select className="form-select" onChange={handleAppFinal}>
              <option value="none">Select an Option</option>
              <option value="reactfront">HTML,CSS,JS,React</option>
            </select>
          ) : passion === "web" && web === "back" ? (
            <select className="form-select" onChange={handleAppFinal}>
              <option value="none">Select an Option</option>
              <option value="nodejsback">Nodejs,Express,MongoDB</option>
            </select>
          ) : (
            <></>
          )}
          <Button
            variant="contained"
            type="submit"
            onClick={() => {
              handleUpdateFinalPassion();
              setbutton(false);
            }}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Form;
