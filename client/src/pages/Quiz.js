import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { apiUrl } from "../data/api";
import CircularProgress from "@mui/material/CircularProgress";
import styled from "styled-components";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  CssBaseline,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { quizscore, quizscoreinc } from "../actions";

const Contain = styled.div`
  height: 100vh;
  .container {
    box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.75);
  }
  .header {
    font-size: 3.5rem;
    font-weight: bold;
    text-align: center;
    padding: 10px 0;
    border-bottom: 1px solid grey;
  }
  @media screen and (max-width: 900px) {
    .header {
      font-size: 2rem;
    }
  }
  @media screen and (max-width: 400px) {
    .header {
      font-size: 1.3rem;
    }
  }
  .welcome {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
  }
  .welcome .p {
    font-size: 1.5rem;
    font-weight: bold;
    padding: 10px;
  }
  .quizinfo {
    margin: 50px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-transform: uppercase;
  }
  @media screen and (max-width: 900px) {
    .welcome .p {
      font-size: 1.1rem;
    }
    .quizinfo {
      margin: 5px;
    }
  }
  .questioncontainer {
    border: 10px solid grey;
    padding: 10px;
    margin: 10px 0;
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
  .options {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .controls {
    display: flex;
  }
  .controls .quit {
    width: 200px;
    margin-left: auto;
    margin-right: 10px;
  }
  .questiontitle {
    text-align: center;
  }
  .question {
  }
  @media screen and (max-width: 598px) {
    .questiontitle {
      font-size: 1.2rem;
    }
    .question {
      font-size: 1.2rem;
    }
    .controls {
      justify-content: space-between;
    }
    .controls .quit {
      width: 48%;
      margin: 0;
    }
    .controls .next {
      width: 48%;
    }
  }
`;
const Btn = styled.button`
  background-color: ${(props) => props.bg};
  margin: 20px 0;
  padding: 10px;
  width: 40%;
  color: black;
  border: 1px solid grey;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  @media screen and (max-width: 598px) {
    width: 100%;
    margin: 8px 0;
    padding: 5px;
  }
`;

const Quiz = () => {
  const myskillquizstate = useSelector((state) => state.changeTheSkillQuiz);
  const mylevelquizstate = useSelector((state) => state.changeTheLevelQuiz);
  const [options, setoptions] = useState();
  const [currentQn, setcurrentQn] = useState(0);
  const [questions, setquestions] = useState();
  const [score, setscore] = useState(0);
  const [error, seterror] = useState(false);
  const [selected, setselected] = useState();
  const [correct, setcorrect] = useState();
  const [bg, setbg] = useState("white");
  const [optpress, setoptpress] = useState(false);

  const correct_answer = correct;

  console.log(correct_answer);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const QuizData = async () => {
    try {
      const res = await axios.get(
        apiUrl + `/quiz/${myskillquizstate}/${mylevelquizstate}`
      );
      setquestions(res.data);
    } catch (error) {
      console.log("quiz error", error);
    }
  };

  const handleShuffle = (opts) => {
    return opts.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    QuizData();
  }, []);

  const hadleoptionchange = () => {
    setoptions(
      questions &&
        handleShuffle([
          questions[currentQn]?.correct_answer ?? [],
          ...(questions[currentQn]?.wrong_answer ?? []), //?. if there find it
        ])
    );
  };

  useEffect(() => {
    hadleoptionchange();
    setcorrect(questions && (questions[currentQn]?.correct_answer ?? []));
  }, [questions, currentQn]);

  const handleCheck = (i) => {
    setselected(i);
    setoptpress(true);
    if (i === correct_answer) {
      setscore(score + 1);
      dispatch(quizscoreinc());
    }
    seterror(false);
  };

  const handleQuit = () => {};
  const handleNext = () => {
    if (currentQn > 0) {
      if (optpress) {
        navigate("/result");
      } else {
        seterror(true);
      }
    } else if (selected) {
      setcurrentQn(currentQn + 1);
      setselected();
      setoptpress(false);
    } else {
      seterror(true);
    }
  };
  // console.log(selected);

  const [login, setlogin] = useState(true);

  const myLoginState = useSelector((state) => state.changeTheLogin);
  const callNavbar = async () => {
    try {
      const res = await axios.get(apiUrl + `/getData/${myLoginState}`, {
        withCredentials: true,
      });

      const data = await res.data;
      // console.log(res);
      console.log(data);
      setlogin(data.name ? false : true);
      if (res.status !== 200) {
        throw new Error(res.error);
      }
    } catch (e) {
      console.log(e);
      navigate("/login");
    }
  };

  console.log(login);

  useEffect(() => {
    callNavbar();
  }, []);

  return (
    <Contain>
      {questions ? (
        <>
          <Container fixed className="container">
            <Box sx={{ height: "100vh" }}>
              <div className="header">Select skills with Quiz</div>
              <div className="welcome">
                <Card className="p">Welcome Vyshnav</Card>
              </div>
              <div className="quizinfo">
                <span>{questions[currentQn]?.skill}</span>
                <span>Score: {score}</span>
              </div>
              <h1 className="questiontitle">Question {currentQn + 1}:</h1>
              <div className="questioncontainer">
                <h1 className="question">{questions[currentQn]?.question}?</h1>
                {error && (
                  <div className="errormsg"> Pls select an option first</div>
                )}
                <div className="options">
                  {options &&
                    options.map((i) => (
                      <Btn
                        // className={`selected`}
                        onClick={() => {
                          handleCheck(i);
                        }}
                        key={i}
                        disabled={optpress}
                        bg={
                          selected === i && selected === correct_answer
                            ? "green"
                            : selected === i && selected !== correct_answer
                            ? "red"
                            : selected !== i &&
                              i === correct_answer &&
                              optpress === true
                            ? "green"
                            : "white"
                        }
                      >
                        {i}
                      </Btn>
                    ))}
                </div>
                <div className="controls">
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    href="/skillquiz"
                    className="quit"
                    onClick={handleQuit}
                  >
                    Quit
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className="next"
                    onClick={handleNext}
                  >
                    Next Question
                  </Button>
                </div>
              </div>
            </Box>
          </Container>
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </Contain>
  );
};

export default Quiz;
