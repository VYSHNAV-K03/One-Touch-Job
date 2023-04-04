import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import {
  reactcourse,
  angularcourse,
  vuecourse,
  htmlcourse,
  javascriptcourse,
  nodecourse,
  mongocourse,
  expresscourse,
  backendprojects,
  frontendprojectsreact,
  frontendprojectsangular,
  frontendprojectsvue,
  fullstackprojectsmern,
  fullstackprojectsmean,
  fullstackprojectsmevn,
  flutter,
  reactnative,
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
    margin-bottom: 10px;
  }
`;

const SkillApp = () => {
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
                App Development
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
                    dispatch(flutter());
                    navigate("/courses");
                  }}
                >
                  Flutter
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => {
                    dispatch(reactnative());
                    navigate("/courses");
                  }}
                >
                  React Native
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SkillApp;
