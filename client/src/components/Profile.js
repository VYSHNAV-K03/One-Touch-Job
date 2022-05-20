import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import profilebg from "../assets/images/profilebg.jpg";
import profileimg from "../assets/profile/profile1.jpg";
import profile1 from "../assets/profile/profile1.png";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import js from "../assets/images/js.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { apiUrl } from "../data/api";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import profileb from "../assets/images/profilebg.avif";
import VanillaTilt from "vanilla-tilt";
import { Button, CircularProgress } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import Preloader from "./preloader/Preloader";

const Container = styled.div`
  background: url(${profileb});
  background-size: cover;
  background-position: center;
  min-height: calc(100vh - 80px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  position: relative;
  .update {
    position: absolute;
    padding: 20px;
    background: #ffffff;
    font-size: 20px;
    text-transform: capitalize;
    display: ${(props) => (props.disp === true ? "none" : "block")};
    border-radius: 10px;
    box-shadow: 2px 0px 15px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 2px 0px 15px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 0px 15px 0px rgba(0, 0, 0, 0.75);
  }
  .update-icon {
    margin-left: auto;
    cursor: pointer;
  }

  .left {
    width: 400px;
    min-height: 400px;
    border-radius: 10px;
    padding: 10px;
    display: ${(props) => (props.disp === true ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: #ffffff;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    box-shadow: 0px 0px 15px 0px rgba(10, 2, 2, 0.75);
    -webkit-box-shadow: 0px 0px 15px 0px rgba(10, 2, 2, 0.75);
    -moz-box-shadow: 0px 0px 15px 0px rgba(10, 2, 2, 0.75);
    text-transform: capitalize;
  }
  .image {
    width: 160px;
    height: 160px;
    margin: 20px auto 10px auto;
  }
  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  .name {
    font-size: 2rem;
    margin-bottom: 5px;
    font-weight: 600;
  }
  .skill {
    margin-bottom: 15px;
  }
  .social-links a {
    background: rgba(255, 255, 255, 0.2);
    display: inline-block;
    height: 45px;
    width: 45px;
    margin: 0 10px 10px 0;
    text-align: center;
    line-height: 45px;
    border-radius: 50%;
    color: #ffffffff;
    transition: all 0.5s ease;
    :hover {
      color: #24262b;
      background: #ffffff;
    }
  }
  @media screen and (max-width: 478px) {
    .left {
      width: 250px;
      min-height: 200px;
    }
  }
`;

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

const Profile = () => {
  const [userdata, setuserdata] = useState([]);
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [profession, setprofession] = useState("");
  const [profile, setprofile] = useState();

  const [loader, setloader] = useState(false);

  const [loader_addbtn, setloader_addbtn] = useState(false);

  const [profilepath, setprofilepath] = useState();

  const [socialprofile, setsocialprofile] = useState();

  const [display, setdisplay] = useState(true);

  console.log(name);
  console.log(profession);

  console.log(display);

  const myLoginState = useSelector((state) => state.changeTheLogin);

  const CallAboutPage = async () => {
    try {
      setloader(true);

      const res = await axios.get(apiUrl + `/getData/${myLoginState}`, {
        withCredentials: true,
      });

      setloader(false);

      const data = await res.data;
      setuserdata(data);
      setsocialprofile(data.socialProfile);
      setprofilepath(data.profile);
      // console.log(res.status);
      if (res.status !== 200) {
        throw new Error(res.error);
      }
    } catch (e) {
      console.log(e);
      setloader(false);
      navigate("/login");
    }
  };
  console.log(userdata);

  const handleUpdate = async () => {
    if (!name || !profession || !profile) {
      window.alert("pls fill properly");
    } else {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("work", profession);
      formData.append("file", profile);
      try {
        setloader_addbtn(true);

        const res = await axios.post(
          apiUrl + `/profileimage/${myLoginState}`,
          formData,
          {
            withCredentials: true,
          }
        );
        window.alert(res.data);
        if (res.data) {
          setdisplay(true);
          CallAboutPage();
        }
        setloader_addbtn(false);
      } catch (error) {
        console.log("update img error", error);
        setloader_addbtn(false);
      }
    }
  };

  useEffect(() => {
    CallAboutPage();
  }, []);
  return (
    <Container disp={display}>
      {userdata ? (
        loader ? (
          <Preloader bg="transparent" />
        ) : (
          <Tilt className="left">
            <div className="update-icon" onClick={() => setdisplay(false)}>
              <SettingsIcon />
            </div>
            <div className="image">
              <img
                src={
                  profilepath
                    ? `data:${profilepath.contentType};base64, ${Buffer.from(
                        profilepath.data.data
                      ).toString("base64")}`
                    : socialprofile
                    ? socialprofile
                    : profile1
                }
                alt=" image"
                className="small"
              />
            </div>
            <div className="name">{userdata?.name}</div>
            <div className="skill">{userdata?.work}</div>
            <div className="social-links">
              <a href="https://www.linkedin.com/" target="_blank">
                <LinkedInIcon />
              </a>
              <a href="https://github.com/" target="_blank">
                <GitHubIcon />
              </a>
              <a href="https://twitter.com/" target="_blank">
                <TwitterIcon />
              </a>
            </div>
          </Tilt>
        )
      ) : (
        <></>
      )}
      <div className="update">
        <div class="mb-3">
          <label htmlFor="formFileMultiple" class="form-label">
            Enter your name
          </label>
          <input
            class="form-control"
            type="text"
            id="formFileMultiple"
            onChange={(e) => setname(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label htmlFor="formFileMultiple" class="form-label">
            Enter your Profession
          </label>
          <input
            class="form-control"
            type="text"
            id="formFileMultiple"
            onChange={(e) => setprofession(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label htmlFor="formFile" class="form-label">
            Choose profile image
          </label>
          <input
            class="form-control"
            type="file"
            id="formFile"
            onChange={(e) => setprofile(e.target.files[0])}
          />
        </div>
        {loader_addbtn ? (
          <CircularProgress />
        ) : (
          <Button
            variant="contained"
            onClick={() => {
              handleUpdate();
            }}
          >
            Update
          </Button>
        )}
        <Button
          style={{ marginLeft: "10px" }}
          variant="contained"
          onClick={() => {
            setdisplay(true);
          }}
        >
          Close
        </Button>
      </div>
    </Container>
  );
};

export default Profile;
