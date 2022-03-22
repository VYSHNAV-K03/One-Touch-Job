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
    padding: 20px;
    border-radius: 10px;
    font-size: 1.2rem;
    box-shadow: -2px 0px 14px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: -2px 0px 14px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -2px 0px 14px 0px rgba(0, 0, 0, 0.75);
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
          Choose the stack <i className="fal fa-play-circle"></i>
        </button>
        <form style={{ display: button ? "flex" : "none" }} className="form">
          <label>choose your passion:</label>
          <select className="form-select" onChange={handlePassionChange}>
            <option value="none">Select an Option</option>
            <option value="web">web development</option>
            <option value="app">App development</option>
            <option value="game">Game development</option>
            <option value="ml">Machine Learning</option>
            <option value="hack">Hacking</option>
            <option value="other">Other software development</option>
          </select>
          {passion === "web" ||
          passion === "app" ||
          passion === "game" ||
          passion === "ml" ||
          passion === "hack" ? (
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
              <option value="design">Web designer</option>
            </select>
          ) : passion === "app" ? (
            <select className="form-select" onChange={handleappchange}>
              <option value="none">Select an Option</option>
              <option value="android">Android dev</option>
              <option value="ios">ios dev</option>
              <option value="cross">cross platform</option>
            </select>
          ) : passion === "game" ? (
            <select className="form-select" onChange={handleAppFinal}>
              <option value="none">Select an Option</option>
              <option value="unity">unity 3d</option>
              <option value="game1">game1</option>
              <option value="game2">game2</option>
            </select>
          ) : passion === "ml" ? (
            <select className="form-select" onChange={handleAppFinal}>
              <option value="none">Select an Option</option>
              <option value="ml1">ml1</option>
              <option value="ml2">ml2</option>
              <option value="ml3">ml3</option>
            </select>
          ) : passion === "hack" ? (
            <select className="form-select" onChange={handleAppFinal}>
              <option value="none">Select an Option</option>
              <option value="hack1">hack1</option>
              <option value="hack2">hack2</option>
            </select>
          ) : (
            <></>
          )}
          {passion === "web" || passion === "app" ? (
            <label>choose stack2:</label>
          ) : (
            <></>
          )}
          {passion === "web" && web === "full" ? (
            <select className="form-select" onChange={handleAppFinal}>
              <option value="none">Select an Option</option>
              <option value="mern">MERN STACK</option>
              <option value="mean">MEAN STACK</option>
              <option value="mevn">MEVN STACK</option>
              <option value="normal">Normal</option>
            </select>
          ) : passion === "web" && web === "front" ? (
            <select className="form-select" onChange={handleAppFinal}>
              <option value="none">Select an Option</option>
              <option value="htmlfront">HTML,CSS,JS</option>
              <option value="reactfront">HTML,CSS,JS,React</option>
            </select>
          ) : passion === "web" && web === "back" ? (
            <select className="form-select" onChange={handleAppFinal}>
              <option value="none">Select an Option</option>
              <option value="nodejsback">Nodejs,Express,MongoDB</option>
              <option value="phpback">php,sql</option>
            </select>
          ) : passion === "web" && web === "design" ? (
            <select className="form-select" onChange={handleAppFinal}>
              <option value="none">Select an Option</option>
              <option value="figma">figma</option>
              <option value="adobe">adobe</option>
            </select>
          ) : passion === "app" && app === "android" ? (
            <select className="form-select" onChange={handleAppFinal}>
              <option value="none">Select an Option</option>
              <option value="kotlin">Kotlin</option>
              <option value="java">JAVA</option>
            </select>
          ) : passion === "app" && app === "ios" ? (
            <select className="form-select" onChange={handleAppFinal}>
              <option value="none">Select an Option</option>
              <option value="swift">swift</option>
              <option value="c">c</option>
            </select>
          ) : passion === "app" && app === "cross" ? (
            <select className="form-select" onChange={handleAppFinal}>
              <option value="none">Select an Option</option>
              <option value="reactnative">React Native</option>
              <option value="flutter">Flutter</option>
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
