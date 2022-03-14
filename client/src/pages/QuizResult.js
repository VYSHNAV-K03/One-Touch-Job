import { Alert, AlertTitle, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { apiUrl } from "../data/api";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  align-items: center;
  justify-content: center;
  .final {
    font-size: 3.5rem;
    color: orangered;
    padding: 1rem;
  }
  .skilldisplay {
    padding: 10px;
    margin-top: 20px;
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

const QuizResult = () => {
  const score = useSelector((state) => state.changeTheScore);
  const navigate = useNavigate();
  const [userskills, setuserskills] = useState([]);
  const [skilldisplay, setskilldisplay] = useState(false);

  const myloginstate = useSelector((state) => state.changeTheLogin);

  const skillfromquiz = useSelector((state) => state.changeTheSkillQuiz);
  console.log(score);
  const skill = score > 1 && [skillfromquiz];

  const GetUser = async () => {
    try {
      const res = await axios.get(apiUrl + `/getData/${myloginstate}`, {
        withCredentials: true,
      });

      const data = await res.data;
      console.log(res);
      console.log("get sumesh");

      setuserskills([...new Set(data.skills)]); //get unique values
      handleUpdateSkill();

      if (res.status !== 200) {
        throw new Error(res.error);
      }
    } catch (e) {
      console.log("sumesh", e);
    }
  };
  console.log(userskills.length);

  const handleUpdateSkill = async () => {
    try {
      const res = await axios.post(
        apiUrl + `/quiz/${myloginstate}/quizskillupdate`,
        skill,
        {
          withCredentials: true,
        }
      );
      console.log("updated", res);
    } catch (error) {
      console.log("update skill error", error);
      setskilldisplay(false);
    }
  };

  // if (score > 1) {
  //   setskilldisplay(true);
  // } else {
  //   setskilldisplay(false);
  // }

  // GetUser();
  useEffect(() => {
    GetUser();
  }, []);

  return (
    <Container>
      <div className="final">Final Result : {score}</div>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => navigate("/skillquiz")}
      >
        Goto Home
      </Button>
      {score > 1 ? (
        <Alert severity="success" style={{ marginTop: 20, minWidth: 800 }}>
          <AlertTitle>Success</AlertTitle>
          Your skill <strong> {skillfromquiz} </strong>Updated
        </Alert>
      ) : (
        <Alert severity="warning" style={{ marginTop: 20, minWidth: 800 }}>
          <AlertTitle>Improve</AlertTitle>
          You need to improve the skill
        </Alert>
      )}
    </Container>
  );
};

export default QuizResult;
