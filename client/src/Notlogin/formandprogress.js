import React from "react";
import styled from "styled-components";
import nonloginprogress from "../assets/nonlogin/nonloginprogresssection.png";
import recommendation from "../assets/nonlogin/recommendation.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 230px;
  .firstcontainer,
  .secondcontainer {
    display: flex;
    height: 400px;
    margin-bottom: 10px;
    align-items: center;
    justify-content: space-around;
  }
  .image {
    width: 600px;
    height: 90%;
    margin: 0 20px;
    box-shadow: 1px 1px 14px -2px rgba(0, 0, 0, 0.7);
    -webkit-box-shadow: 1px 1px 14px -2px rgba(0, 0, 0, 0.7);
    -moz-box-shadow: 1px 1px 14px -2px rgba(0, 0, 0, 0.7);
  }
  .image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .content {
    width: 55%;
    font-size: 1.5rem;
  }
  @media screen and (max-width: 1520px) {
    padding: 0 100px;
    .firstcontainer,
    .secondcontainer {
      height: 300px;
    }
    .content {
      width: 55%;
      font-size: 1.1rem;
    }
    .image {
      width: 400px;
      margin: 0 10px;
    }
  }
  @media screen and (max-width: 962px) {
    padding: 0 10px;
    .content {
      width: 50%;
      font-size: 1.1rem;
    }
    .image {
      width: 50%;
      margin: 0 4px;
    }
  }
  @media screen and (max-width: 706px) {
    .firstcontainer,
    .secondcontainer {
      flex-direction: column-reverse;
      height: auto;
    }
    .firstcontainer .image {
      order: 1;
      margin-top: 20px;
    }
    .image {
      width: 90%;
      height: 40%;
      height: 200px;
    }
    .content {
      width: 90%;
    }
  }
`;

const Formandprogress = () => {
  return (
    <Container>
      <div className="firstcontainer">
        <div className="image">
          <img src={nonloginprogress} alt="" />
        </div>
        <div className="content">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          suscipit quas sequi voluptatibus mollitia sit laboriosam eaque vero
          similique at quam unde cum veniam consectetur dignissimos in, nulla
          blanditiis hic cumque maiores. Dolorem assumenda eaque modi
          consectetur quo repellendus eos neque animi illo sed molestias
          cupiditate, quam accusantium obcaecati facere!
        </div>
      </div>
      <div className="secondcontainer">
        <div className="content">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          suscipit quas sequi voluptatibus mollitia sit laboriosam eaque vero
          similique at quam unde cum veniam consectetur dignissimos in, nulla
          blanditiis hic cumque maiores. Dolorem assumenda eaque modi
          consectetur quo repellendus eos neque animi illo sed molestias
          cupiditate, quam accusantium obcaecati facere!
        </div>
        <div className="image">
          <img src={recommendation} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Formandprogress;
