import React, { useEffect, useState } from "react";
import styled from "styled-components";
import profilebg from "../assets/images/profilebg.jpg";
import profile from "../assets/profile/profile1.jpg";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import js from "../assets/images/js.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { apiUrl } from "../data/api";

const Container = styled.div`
  background: url(${profilebg});
  background-size: cover;
  background-position: center;
  min-height: calc(100vh - 80px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  .left {
    width: 400px;
    min-height: 400px;
    border-radius: 10px;
    padding: 10px;
    background: blue;
    display: flex;
    flex-direction: column;
  }
  .image {
    width: 200px;
    height: 200px;
    margin: 20px auto 10px auto;
  }
  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 5px solid white;
  }

  .name {
    font-size: 1.5rem;
    margin: 5px auto 2px auto;
    font-weight: 600;
  }
  .skill {
    font-size: 1.5rem;
    text-align: center;
  }

  @media screen and (max-width: 790px) {
    .profilecontainer {
      flex-direction: column;
    }
    .left {
      display: grid;
      border-radius: 10px 10px 0 0;
    }

    .image {
      width: 70px;
      height: 70px;
      margin: 15px auto 5px auto;
    }
    .name {
      font-size: 1rem;
    }
    .skill {
      font-size: 0.9rem;
    }
  }
`;
const Progress = styled.div`
  width: 100%;
  height: 15px;
  border-radius: 10px;
  background: gray;
  margin-top: 15px;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: ${(props) => props.per};
    border-radius: 10px;
    background: ${(props) => props.color};
  }
`;

const Profile = () => {
  const [userdata, setuserdata] = useState([]);
  const navigate = useNavigate();

  const myLoginState = useSelector((state) => state.changeTheLogin);

  const CallAboutPage = async () => {
    try {
      const res = await axios.get(apiUrl + `/about/${myLoginState}`, {
        withCredentials: true,
      });

      const data = await res.data;
      // console.log(res.status);
      setuserdata(data);
      if (res.status !== 200) {
        throw new Error(res.error);
      }
    } catch (e) {
      console.log(e);
      // navigate("/login");
    }
  };
  console.log(userdata);

  useEffect(() => {
    CallAboutPage();
  }, []);
  return (
    <Container>
      <div className="gradientbg"></div>
      <div className="left">
        <div className="image">
          <img src={profile} alt="" />
        </div>
        <div className="name">sasi sasi sasi</div>
        <div className="skill">Full Stack Web Developer</div>
      </div>
    </Container>
  );
};

export default Profile;
