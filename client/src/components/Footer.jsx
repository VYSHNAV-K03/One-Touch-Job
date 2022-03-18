import React from "react";
import styled from "styled-components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

const Container = styled.footer`
  background: #24262b;
  padding: 70px 0;
  font-family: "Poppins", sans-serif;
  line-height: 1.5;
  .container-footer {
    max-width: 1170px;
    margin: auto;
  }
  ul {
    list-style: none;
  }
  .footer-row {
    display: flex;
    flex-wrap: wrap;
  }
  .footer-col {
    width: 25%;
    padding: 0 15px;
  }
  .footer-col h4 {
    font-size: 18px;
    font-weight: 500;
    color: #ffff;
    margin-bottom: 35px;
    text-transform: capitalize;
    position: relative;
  }
  .footer-col h4::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    height: 2px;
    width: 50px;
    background-color: #e91e63;
  }
  .footer-col ul {
    margin-left: -30px;
  }
  .footer-col ul li:not(:last-child) {
    margin-bottom: 10px;
  }
  .footer-col ul li a {
    font-size: 16px;
    text-decoration: none;
    text-transform: capitalize;
    color: #bbbbbb;
    font-weight: 300;
    display: block;
    transition: all 0.3s ease;
  }
  .footer-col ul li a:hover {
    color: #ffffff;
    padding-left: 8px;
  }
  .footer-col .social-links a {
    background: rgba(255, 255, 255, 0.2);
    display: inline-block;
    height: 40px;
    width: 40px;
    margin: 0 10px 10px 0;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    color: #ffffffff;
    transition: all 0.5s ease;
    :hover {
      color: #24262b;
      background: #ffffff;
    }
  }
  @media screen and (max-width: 700px) {
    .footer-col {
      width: 50%;
      margin-bottom: 30px;
    }
  }
  @media screen and (max-width: 400px) {
    .footer-col {
      width: 100%;
    }
  }
`;

const Footer = () => {
  return (
    <Container>
      <div className="container-footer">
        <div className="footer-row">
          <div className="footer-col">
            <h4>one touch job</h4>
            <ul>
              <li>
                <a href="#">about us</a>
              </li>
              <li>
                <a href="#">our services</a>
              </li>{" "}
              <li>
                <a href="#">privacy policy</a>
              </li>{" "}
              <li>
                <a href="#">affiliate program</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">contact us</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>our services</h4>
            <ul>
              <li>
                <a href="#">workshops</a>
              </li>
              <li>
                <a href="#">internships</a>
              </li>{" "}
              <li>
                <a href="#">freelance</a>
              </li>{" "}
              <li>
                <a href="#">placement</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="#">
                <LinkedInIcon />
              </a>
              <a href="#">
                <GitHubIcon />
              </a>
              <a href="#">
                <TwitterIcon />
              </a>
              <a href="#">
                <YouTubeIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
