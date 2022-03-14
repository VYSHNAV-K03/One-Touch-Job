import {
  Autocomplete,
  Box,
  Button,
  Container,
  MenuItem,
  TextField,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import quizbanner from "../assets/quiz/quizbanner.svg";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  quizleveleasy,
  quizlevelhard,
  quizlevelmedium,
  quizscoredefault,
  quizskillangular,
  quizskillreact,
} from "../actions";
import { apiUrl } from "../data/api";
import axios from "axios";

const Main = styled.div`
  .header {
    font-size: 3.5rem;
    font-weight: bold;
    text-align: center;
    padding: 10px 0;
    border-bottom: 1px solid grey;
  }
  .quiz {
    display: flex;
    margin-top: 10vh;
  }
  .quizsettings {
    display: flex;
    flex-direction: column;
    padding: 20px 50px;
    width: 50%;
  }
  .banner {
    width: 50%;
    display: flex;
    margin: auto;
  }
  .banner img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media screen and (max-width: 900px) {
    .header {
      font-size: 2rem;
    }
    .banner {
      width: 80%;
    }
    .quiz {
      margin-top: 0vh;
      flex-direction: column-reverse;
    }
    .quizsettings {
      width: 100%;
    }
  }
  .title {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 400px) {
    .header {
      font-size: 1.3rem;
    }
    .title {
      font-size: 1rem;
      margin-bottom: 10px;
    }
  }
  .textfield {
    width: 100%;
    margin-bottom: 25px;
  }
  .errormsg {
    background: orangered;
    color: #fff;
    padding: 10px 5px;
    text-align: center;
    font-size: 1.2rem;
    margin-bottom: 20px;
    font-weight: bold;
    border-radius: 4px;
  }
`;

const options = [
  { label: "Python", id: 1 },
  { label: "Javascript", id: 2 },
  { label: "c", id: 3 },
  { label: "c++", id: 4 },
  { label: "react", id: 5 },
  { label: "React Native", id: 6 },
  { label: "Html", id: 7 },
  { label: "Css", id: 8 },
  { label: "NodeJs", id: 9 },
  { label: "Express", id: 10 },
  { label: "Mongodb", id: 11 },
];
const hardnessoptions = [
  { label: "easy", id: 1 },
  { label: "medium", id: 2 },
  { label: "hard", id: 3 },
];

const SkillQuiz = () => {
  const [name, setname] = useState("");
  const [skill, setskill] = useState("");
  const [difficulty, setdifficulty] = useState("");
  const dispatch = useDispatch();

  dispatch(quizscoredefault());
  const [error, seterror] = useState(false);

  const handleName = (event) => {
    setname(event.target.value);
  };

  const handleskill = (event) => {
    setskill(event.target.value);
    console.log(event.target);
  };
  const handledifficulty = (event) => {
    setdifficulty(event.target.value);
  };
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!skill || !difficulty || !name) {
      seterror(true);
      return;
    } else {
      seterror(false);
      dispatch(quizskillreact());
      if (difficulty == 1) {
        dispatch(quizleveleasy());
      } else if (difficulty == 2) {
        dispatch(quizlevelmedium());
      } else if (difficulty == 3) {
        dispatch(quizlevelhard());
      }
      navigate("/quiz");
    }
  };

  const myskillquizstate = useSelector((state) => state.changeTheSkillQuiz);


  return (
    <Main>
      <Container fixed>
        <Box sx={{}}>
          <div className="header">Select skills with Quiz</div>
          <div className="quiz">
            <div className="quizsettings">
              <div className="title">Quiz Settings</div>
              {error && (
                <div className="errormsg"> Pls Fill All The fields</div>
              )}
              <TextField
                id="outlined-basic"
                label="Enter your name"
                variant="outlined"
                className="textfield"
                onChange={handleName}
                value={name}
              />
              <TextField
                id="outlined-select-skill"
                select
                label="Select"
                className="textfield"
                value={skill}
                onChange={handleskill}
                helperText="Please select your skill"
              >
                {options.map((option) => (
                  <MenuItem key={option.value} value={option.id}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                className="textfield"
                id="outlined-select-difficulty"
                select
                label="Select"
                value={difficulty}
                onChange={handledifficulty}
                helperText="Please select your level"
              >
                {hardnessoptions.map((option) => (
                  <MenuItem key={option.value} value={option.id}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <Button
                variant="contained"
                onClick={handleSubmit}
                style={{ marginBottom: 10 }}
              >
                Start Quiz
              </Button>
              <Button variant="outlined" href="/">
                Back To Home
              </Button>
            </div>
            <div className="banner">
              <img src={quizbanner} alt="" />
            </div>
          </div>
        </Box>
      </Container>
    </Main>
  );
};

export default SkillQuiz;
