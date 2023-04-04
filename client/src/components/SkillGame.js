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
  unity3d,
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

const SkillGame = () => {
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
                Game Development
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
                    dispatch(unity3d());
                    navigate("/courses");
                  }}
                >
                  Unity 3D
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SkillGame;
