import { Facebook, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import logo from "../assets/images/onetouchjob2.png";

const Container = styled.div`
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 10px 50px;

  .information1 {
    margin: 20px auto auto auto;
    padding: 10px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .title {
    font-size: clamp(2rem, 3vw, 2.8rem);
    color: white;
    font-weight: 500;
    font-family: "Luckiest Guy", cursive;
    margin: 0 auto 10px 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
  }
  .content {
    font-size: clamp(0.8rem, 1.2vw, 1.2rem);
    margin: 0 auto 30px 0;
  }
  .socialmedia {
    width: clamp(150px, 19vw, 250px);
    height: clamp(35px, 5vw, 50px);
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #ecf0f3;
    margin-right: auto;
    border-radius: 10px;
  }
  .socialmedia .icon {
    cursor: pointer;
    background: #ecf0f3;
    border-radius: 50%;
    width: clamp(20px, 4vw, 35px);
    height: clamp(20px, 4vw, 35px);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 3px 3px 5px #cbced1, -3px -3px 5px #ffffff,
      inset 3px 3px 5px #cbced1, inset -3px -3px 5px #ffffff;
    -webkit-box-shadow: 3px 3px 5px #cbced1, -3px -3px 5px #ffffff,
      inset 3px 3px 5px #cbced1, inset -3px -3px 5px #ffffff;
    -moz-box-shadow: 3px 3px 5px #cbced1, -3px -3px 5px #ffffff,
      inset 3px 3px 5px #cbced1, inset -3px -3px 5px #ffffff;
  }
  .facebook {
    color: #4267b2;
  }
  .git {
    color: #171515;
  }
  .insta {
    color: #cd486b;
  }
  .linkedin {
    color: #0e76a8;
  }

  .information2 {
    padding: 10px;
    margin: 20px auto auto auto;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .linkstitle {
    font-size: clamp(2rem, 3vw, 2.8rem);
    font-weight: bolder;
    margin-bottom: 20px;
  }
  .linkitems {
    text-decoration: none;
    list-style: none;
    font-size: clamp(0.8rem, 1.2vw, 1.2rem);
  }
  .linkitems li {
    margin-bottom: 10px;
  }

  .information3 {
    padding: 10px;
    margin: 20px auto auto auto;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .image {
    width: clamp(140px, 20vw, 380px);
    height: clamp(80px, 13vw, 240px);
  }
  .image img {
    border-radius: 5px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  @media screen and (max-width: 704px) {
    display: grid;
    padding: 5px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    .information1 {
      margin: 10px auto auto auto;
      grid-column: 1/3;
      grid-row: 1/2;
    }
    .information2 {
      padding: 5px;
      margin: 10px auto auto auto;
      grid-column: 1/2;
      grid-row: 2/3;
    }
    .information3 {
      grid-column: 2/3;
      padding: 5px;
      margin-top: 10px;
      grid-row: 2/3;
    }
    .image {
      width: 170px;
      height: 100px;
    }
    .image img {
      border-radius: 5px;
    }
  }
  @media screen and (max-width: 400px) {
    grid-template-rows: repeat(3, min-content);
    .information1 {
      margin-left: 0;
      padding: 0;
    }
    .information2 {
      grid-column: 1/3;
      margin-left: 0;
    }
    .information3 {
      grid-column: 1/3;
      grid-row: 3/4;
      padding: 0px;
      margin-bottom: 10px;
      margin-left: 0;
    }
  }
`;

const Footer = () => {
  return (
    <Container>
      <div className="information1">
        <div className="title">ONE TOUCH JOB</div>
        <div className="content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
          asperiores, vitae perferendis veniam sunt accusantium totam corporis
          quo unde quidem tenetur, maxime minima assumenda maiores laudantium
          earum ea incidunt alias expedita fuga delectus id officia? Suscipit
          temporibus obcaecati adipisci delectus recusandae.
        </div>
        <div className="socialmedia">
          <div className="icon">
            <GitHub className="git" />
          </div>
          <div className="icon ">
            <Facebook className="facebook" />
          </div>
          <div className="icon">
            <Instagram className="insta" />
          </div>

          <div className="icon">
            <LinkedIn className="linkedin" />
          </div>
        </div>
      </div>

      <div className="information2">
        <div className="links">
          <div className="linkstitle">Useful Links</div>
          <ul className="linkitems">
            <li>
              Email : <span>vyshnavchikku891@gmail.com</span>
            </li>

            <li>
              Youtube : <span>Lycus Gaming</span>
            </li>
            <li>
              College : <span>College of engineering thalassery</span>
            </li>
            <li>
              Emain : <span>vyshnavchikku891@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="information3">
        <div className="image">
          <img src={logo} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Footer;
