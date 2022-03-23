import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import {
  reactcourse,
  angularcourse,
  vuecourse,
  htmlcourse,
  javascriptcourse,
  frontendprojects,
  nodecourse,
  mongocourse,
  expresscourse,
  backendprojects,
  fullstackprojects,
} from "../actions";

import styled from "styled-components";
import { Button } from "@mui/material";

const Container = styled.div`
  padding-top: 20px;
  .font-size {
    font-size: 1.8rem;
  }
  Button {
    margin-right: 10px;
  }
`;

const Frontend = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  return (
    <Container>
      <div className="container">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed font-size"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Frontend Web Development
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <Button
                  variant="outlined"
                  onClick={() => {
                    dispatch(htmlcourse());
                    navigate("/courses");
                  }}
                >
                  HTML & CSS
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => {
                    dispatch(javascriptcourse());
                    navigate("/courses");
                  }}
                >
                  JavaScript
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => {
                    dispatch(reactcourse());
                    navigate("/courses");
                  }}
                >
                  React
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => {
                    dispatch(angularcourse());
                    navigate("/courses");
                  }}
                >
                  angular js
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => {
                    dispatch(vuecourse());
                    navigate("/courses");
                  }}
                >
                  Vue js
                </Button>
                <Button
                  variant="contained"
                  onClick={() => {
                    dispatch(frontendprojects());
                    navigate("/courses");
                  }}
                >
                  Projects
                </Button>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed font-size"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Backend Web Development
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <Button
                  variant="outlined"
                  onClick={() => {
                    dispatch(nodecourse());
                    navigate("/courses");
                  }}
                >
                  Node js
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => {
                    dispatch(mongocourse());
                    navigate("/courses");
                  }}
                >
                  mongodb
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => {
                    dispatch(expresscourse());
                    navigate("/courses");
                  }}
                >
                  express js
                </Button>
                <Button
                  variant="contained"
                  onClick={() => {
                    dispatch(backendprojects());
                    navigate("/courses");
                  }}
                >
                  Projects
                </Button>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed font-size"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Full Stack Web Development
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <Button
                  variant="outlined"
                  onClick={() => {
                    dispatch(fullstackprojects());
                    navigate("/courses");
                  }}
                >
                  Mern stack
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Frontend;
