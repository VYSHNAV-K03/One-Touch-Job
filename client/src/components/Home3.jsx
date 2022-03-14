import React from "react";
import styled from "styled-components";
import alibaba from "../assets/slider/alibaba.jpg";
import bill from "../assets/slider/bill.jpg";
import apjabdulkalam from "../assets/slider/apjabdulkalam.jpg";
import steve2 from "../assets/slider/steve2.jpg";
import deadshot from "../assets/slider/deadshot.jpg";
import sucker from "../assets/slider/sucker.jpg";
import venom from "../assets/slider/venom.jpg";
import venom2 from "../assets/slider/venom2.jpg";
import sundar from "../assets/slider/sundar.jpg";
import rock from "../assets/slider/rock.jpg";
import elon from "../assets/slider/elon.jpg";
import bob from "../assets/slider/bob.jpg";

const Container = styled.div`
  font-family: "Arvo", serif;
  padding: 50px 0;

  .title {
    text-align: center;
    font-weight: bold;
    font-size: clamp(1.5rem, 2.5vw, 3rem);
  }
  .quotes {
    height: 380px;
    overflow: hidden;
    position: relative;
  }

  .slider {
    width: calc(1800px * 4);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    cursor: pointer;
  }
  .item {
    width: 440px;
    height: 300px;
    margin: 20px;
    animation: slider 50s linear infinite;
  }
  .slider:hover .item {
    animation-play-state: paused;
  }

  @keyframes slider {
    0% {
      transform: translateX(calc(-440px * 3));
    }

    100% {
      transform: translateX(calc(-440px * 12));
    }
  }
  .image {
    width: 100%;
    height: 100%;
    :hover {
      transform: scale(1.1);
      transition: all 0.4s ease;
    }
  }
  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 704px) {
    padding: 10px 0;
    .title {
      margin-bottom: 10px;
    }
    .quotes {
      height: 150px;
    }
    .item {
      width: 300px;
      height: 150px;
    }
  }
`;

const Home3 = () => {
  return (
    <Container>
      <div className="quotes">
        <div className="slider">
          <div className="item item1">
            <div className="image">
              <img src={elon} alt="" />
            </div>
          </div>
          <div className="item item2">
            <div className="image">
              <img src={bob} alt="" />{" "}
            </div>
          </div>{" "}
          <div className="item item5">
            <div className="image">
              <img src={sundar} alt="" />{" "}
            </div>
          </div>{" "}
          <div className="item item7">
            <div className="image">
              <img src={steve2} alt="" />{" "}
            </div>
          </div>
          <div className="item item6">
            <div className="image">
              <img src={bob} alt="" />
            </div>
          </div>{" "}
          <div className="item item2">
            <div className="image">
              {" "}
              <img src={apjabdulkalam} alt="" />{" "}
            </div>
          </div>{" "}
          <div className="item item3">
            <div className="image">
              <img src={sucker} alt="" />{" "}
            </div>
          </div>{" "}
          <div className="item item8">
            <div className="image">
              <img src={bill} alt="" />{" "}
            </div>
          </div>
          <div className="item item1">
            <div className="image">
              <img src={elon} alt="" />
            </div>
          </div>
          <div className="item item4">
            <div className="image">
              <img src={rock} alt="" />{" "}
            </div>
          </div>{" "}
          <div className="item item9">
            <div className="image">
              <img src={venom} alt="" />{" "}
            </div>
          </div>
          <div className="item item10">
            <div className="image">
              <img src={alibaba} alt="" />{" "}
            </div>
          </div>{" "}
          <div className="item item11">
            <div className="image">
              <img src={deadshot} alt="" />{" "}
            </div>
          </div>
          <div className="item item3">
            <div className="image">
              <img src={sucker} alt="" />{" "}
            </div>
          </div>{" "}
          <div className="item item5">
            <div className="image">
              <img src={sundar} alt="" />{" "}
            </div>
          </div>{" "}
        </div>
      </div>
    </Container>
  );
};

export default Home3;
