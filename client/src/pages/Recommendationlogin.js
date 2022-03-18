import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1300px;
  min-height: 50vh;
  margin: 50px auto;
  box-shadow: 0px 0px 21px 0px rgba(174, 210, 235, 0.86);
  -webkit-box-shadow: 0px 0px 21px 0px rgba(174, 210, 235, 0.86);
  -moz-box-shadow: 0px 0px 21px 0px rgba(174, 210, 235, 0.86);
  padding: 10px;
`;

const Recommendationlogin = () => {
  return (
    <Container>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
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
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
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
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
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
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          Not available
        </div>
        <div
          class="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          Not available
        </div>
        <div
          class="tab-pane fade"
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
