import React from "react";
import styled from "styled-components";
import placement from "../assets/images/placement.jpg";
import skills from "../assets/images/skills.jpg";
import resume from "../assets/images/portfolio.jpg";
import projects from "../assets/images/projects.jpg";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  padding: 10px 3px;
  background: #16384c;
  .container-services {
    padding: 50px 30px;
    min-height: 600px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 475px) {
    .container-services {
      padding: 10px 5px;
    }
  }
`;

const Box1 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 330px;
  height: 265px;
  background: #ffff;
  transition: 0.3s ease-in-out;
  padding: 20px 15px;
  margin: 30px 30px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
  perspective: 1000px;
  cursor: pointer;
  :hover .flipper {
    transform: rotateY(180deg);
  }
  .flipper {
    transition: 0.6s;
    transform-style: preserve-3d;
    transform-origin: center;
    position: relative;
  }
  .image {
    position: absolute;
    width: 260px;
    height: 260px;
    top: -50px;
    left: 20px;
    z-index: 2;
  }
  .image img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
  }
  .content {
    position: absolute;
    width: 260px;
    height: 260px;
    top: -50px;
    left: 20px;
    padding: 10px 0;
    background: #fff;
    transform: rotateY(180deg);
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
    text-align: center;
  }

  .image,
  .content {
    backface-visibility: hidden;
  }
  .title-services {
    font-size: 2.2rem;
    font-weight: bold;
  }

  .content .description {
    text-align: center;
  }

  .placement {
    margin: 20px auto;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: coral;
    width: 130px;
    height: 40px;
    border-radius: 50px;
    background: teal;
    color: white;
  }
  button {
    font-size: 1.3rem;
    text-align: center;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    background-color: transparent;
    margin-right: 10px;
    color: white;
  }
  .placement i {
    position: relative;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 2px;
  }
  @media screen and (max-width: 475px) {
    height: 205px;
    width: 280px;
    padding: 20px 15px;
    margin: 30px 0;
    .image {
      width: 210px;
      height: 210px;
    }
    .content {
      width: 210px;
      height: 210px;
      padding: 5px 0;
    }
    .title-services {
      font-size: 1.3rem;
    }
    button {
      font-size: 1rem;
    }
    .placement {
      margin: 5px auto;
      width: 80px;
      height: 30px;
      border-radius: 15px;
    }
  }
`;

const Home2 = () => {
  return (
    <Container>
      <div className="container-services">
        <Box1>
          <div className="flipper">
            <div className="image">
              <img src={placement} alt="" />
            </div>
            <div className="content">
              <h2 className="title-services">Placement</h2>
              <div className="description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, possimus repellat? Sequi numquam enim ex?
              </div>
              <NavLink to="/placement" className="placement">
                <button>click</button>
                <i className="fal fa-angle-double-right"></i>{" "}
              </NavLink>{" "}
            </div>
          </div>
        </Box1>
        <Box1>
          <div className="flipper">
            <div className="image">
              <img src={skills} alt="" />
            </div>
            <div className="content">
              <h1 className="title-services"> Build Skills</h1>
              <div className="description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, possimus repellat? Sequi numquam enim ex?
              </div>
              <NavLink to="/skill" className="placement">
                <button>click</button>
                <i className="fal fa-angle-double-right"></i>{" "}
              </NavLink>
            </div>
          </div>
        </Box1>
        <Box1>
          <div className="flipper">
            <div className="image">
              <img src={projects} alt="" />
            </div>
            <div className="content">
              <h1 className="title-services"> Projects</h1>
              <div className="description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, possimus repellat? Sequi numquam enim ex?
              </div>
              <NavLink to="/projects" className="placement">
                <button>click</button>
                <i className="fal fa-angle-double-right"></i>{" "}
              </NavLink>{" "}
            </div>
          </div>
        </Box1>
        <Box1>
          <div className="flipper">
            <div className="image">
              <img src={resume} alt="" />
            </div>
            <div className="content">
              <h1 className="title-services">Portfolio</h1>
              <div className="description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, possimus repellat? Sequi numquam enim ex?
              </div>
              <NavLink to="/postportfolio" className="placement">
                <button>click</button>
                <i className="fal fa-angle-double-right"></i>{" "}
              </NavLink>{" "}
            </div>
          </div>
        </Box1>
      </div>
    </Container>
  );
};

export default Home2;
