import React from "react";
import styled from "styled-components";
import Paidinternship from "../components/internship/paidinternship";

const Container = styled.div`
  max-width: 1300px;
  min-height: 50vh;
  margin: 50px auto;
  box-shadow: 0px 0px 21px 0px rgba(174, 210, 235, 0.86);
  -webkit-box-shadow: 0px 0px 21px 0px rgba(174, 210, 235, 0.86);
  -moz-box-shadow: 0px 0px 21px 0px rgba(174, 210, 235, 0.86);
  padding: 10px;
  @media screen and (max-width: 500px) {
    margin: 10px auto;
  }
`;

const Recommendationlogin = () => {
  return (
    <Container>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Paid Internships
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Freelance Works
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Placement
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <Paidinternship />
        </div>
        <div
          className="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          Not available
        </div>
        <div
          className="tab-pane fade"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          Not available
        </div>
      </div>
    </Container>
  );
};

export default Recommendationlogin;
