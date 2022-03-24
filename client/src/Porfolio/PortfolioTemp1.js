import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import profile from "../assets/profile/profile1.jpg";
import { apiUrl } from "../data/api";

const Container = styled.div`
  display: flex;
  border-radius: 10px;
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.49);
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.49);
  -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.49);
  .left {
    width: 40%;
    border-right: 1px solid grey;
    padding: 5px;
    overflow: hidden;
  }
  .image {
    width: 150px;
    height: 150px;
    margin: 10px auto;
  }
  .image img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.49);
    -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.49);
    -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.49);
  }
  .right {
    width: 60%;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }
  .contact-title {
    background: teal;
    color: white;
    display: inline-block;
    width: 100%;
    text-align: center;
    font-size: 20px;
  }
  .block {
    width: 100%;
    text-align: left;
  }
`;

const PortfolioTemp1 = (props) => {
  const [data, setdata] = useState([]);

  const myLoginState = useSelector((state) => state.changeTheLogin);

  const getPortfolio = async () => {
    try {
      const res = await axios.get(
        apiUrl + `/portfolio/getportfoliodata/${myLoginState}`,
        {
          withCredentials: true,
        }
      );
      console.log(res);

      setdata(res.data);
    } catch (error) {
      console.error("portfoliotemp ", error);
    }
  };
  console.log(data);

  useEffect(() => {
    getPortfolio();
  }, []);

  return (
    <>
      {data.photo ? (
        <Container>
          <div className="left">
            <div className="image">
              <img
                src={
                  data.photo
                    ? `data:${data.photo.contentType};base64, ${Buffer.from(
                        data.photo.data.data
                      ).toString("base64")}`
                    : profile
                }
                alt=""
              />
            </div>
            <div className="details block">
              <p className="address">Address : {data && data?.address}</p>
              <p className="city">City : {data && data?.city}</p>
              <p className="state">State : {data && data?.state}</p>
            </div>
            <div className="contact-details block">
              <h4 className="contact-title">Contact Details</h4>
              <p className="phone">Phone : {data && data?.phone_number}</p>
              <p className="email">Email : {data && data?.email}</p>
              <p className="website">Website : {data && data?.website}</p>
            </div>
            <div className="objective block">
              <h4 className="contact-title">About Me</h4>
              <p className="objectie">{data && data?.objective}</p>
            </div>
          </div>
          <div className="right">
            <h1 className="name">
              {data && data?.first_name} {data && data?.last_name}
            </h1>
            <div className="educational-details block">
              <h4 className="contact-title">Educational Details</h4>
              <div className="institution-name">
                Institution : {data?.education[0].institution_name}
              </div>

              <div className="course">
                Course : {data && data?.education[0]?.course}
              </div>
              <div className="grade">
                Grade : {data && data?.education[0]?.grade}
              </div>
              <div className="start-date">
                Start Date: {data && data?.education[0]?.start_date}
              </div>
              <div className="end-date">
                End Date : {data && data?.education[0]?.end_date}
              </div>
              <div className="description-education">
                Description:
                {data && data?.education[0]?.edu_description}
              </div>
            </div>
            <div className="certification-details block">
              <h4 className="contact-title">Certifications</h4>
              <div className="course-name-certification">
                Course : {data && data?.certification[0]?.course_name}
              </div>
              <div className="cer-organistation">
                Organistation :{" "}
                {data && data?.certification[0]?.cer_organisation}
              </div>
              <div className="cer-description">
                Description:
                {data && data?.certification[0]?.cer_description}{" "}
              </div>
            </div>
            <div className="experience block">
              <h4 className="contact-title">Experience</h4>
              <div className="wrk-organisation">
                Work Organisation: {data && data?.workexp[0]?.wrk_organisation}
              </div>
              <div className="role">
                Role : {data && data?.workexp[0]?.role}
              </div>
              <div className="word-start-date">
                Work Start Date : {data && data?.workexp[0]?.wrk_start_date}
              </div>
              <div className="word-end-date">
                Work End Date : {data && data?.workexp[0]?.wrk_end_date}
              </div>
              <div className="work-description">
                Description:
                {data && data?.workexp[0]?.wrk_description}
              </div>
            </div>
            <div className="skill block">
              <h4 className="contact-title">Skills</h4>
              <div className="skill1">{data && data.skill}</div>
            </div>
            <div className="hobbies block">
              <h4 className="contact-title">Hobbies</h4>
              <div className="hobby">{data && data.hobbies}</div>
            </div>
            <div className="language-details block">
              <h4 className="contact-title">Language</h4>
              <div className="lang-name">
                language-name : {data && data.language[0].language_name}
              </div>
              {data && data.language[0].read ? (
                <div className="lang-description">Read</div>
              ) : data && data.language[0].write ? (
                <div className="lang-description">Write</div>
              ) : (
                <div className="lang-description">Speak</div>
              )}
              <div className="language-level">
                language-level: {data && data.language[0].level}
              </div>
            </div>
          </div>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};

export default PortfolioTemp1;
