import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { apiUrl } from "../data/api";
import Button from "@mui/material/Button";

const Container = styled.div`
  padding: 10px;
  /* background: url("https://images.unsplash.com/photo-1615800098779-1be32e60cca3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80");
  background-size: cover;
  background-repeat: no-repeat; */
  .container {
  }
`;

const PostPortfolio = () => {
  const [file, setfile] = useState([]);

  const [details, setdetails] = useState({
    firstname: "",
    lastname: "",
    address: "",
    city: "",
    state: "",
    phone: "",
    website: "",
    email: "",
    objective: "",
    institution: "",
    course: "",
    grade: "",
    start_date: 0,
    end_date: 0,
    edu_description: "",
    course_name: "",
    cer_organisation: "",
    cer_description: "",
    wrk_organisation: "",
    role: "",
    wrk_start_date: 0,
    wrk_end_date: 0,
    wrk_description: "",
    skill: "",
    hobbies: "",
    language_name: "",
    read: false,
    write: false,
    speak: false,
    level: "",
  });

  const myLoginState = useSelector((state) => state.changeTheLogin);
  const CallProjectpage = async () => {
    try {
      const res = await axios.get(apiUrl + `/getData/${myLoginState}`, {
        withCredentials: true,
      });

      const data = await res.data;
      console.log(res);
      console.log("get sumesh");

      if (res.status !== 200) {
        throw new Error(res.error);
      }
    } catch (e) {
      console.log("sumesh", e);
      navigate("/login");
    }
  };

  const navigate = useNavigate();

  const uploadPortfolio = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("firstname", details.firstname);
    formData.append("lastname", details.lastname);
    formData.append("address", details.address);
    formData.append("city", details.city);
    formData.append("state", details.state);
    formData.append("phone", details.phone);
    formData.append("website", details.website);
    formData.append("email", details.email);
    formData.append("objective", details.objective);
    formData.append("institution", details.institution);
    formData.append("course", details.course);
    formData.append("grade", details.grade);
    formData.append("start_date", details.start_date);
    formData.append("end_date", details.end_date);
    formData.append("edu_description", details.edu_description);
    formData.append("course_name", details.course_name);
    formData.append("cer_organisation", details.cer_organisation);
    formData.append("cer_description", details.cer_description);
    formData.append("wrk_organisation", details.wrk_organisation);
    formData.append("role", details.role);
    formData.append("wrk_start_date", details.wrk_start_date);
    formData.append("wrk_end_date", details.wrk_end_date);
    formData.append("wrk_description", details.wrk_description);
    formData.append("skill", details.skill);
    formData.append("hobbies", details.hobbies);
    formData.append("language_name", details.language_name);
    formData.append("read", details.read);
    formData.append("write", details.write);
    formData.append("speak", details.speak);
    formData.append("level", details.level);

    try {
      const res = await axios.post(
        apiUrl + `/portfolio/add/${myLoginState}`,
        formData,
        {
          withCredentials: true,
        }
      );
      console.log(res);
      navigate("/portfolio");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    CallProjectpage();
  }, []);

  return (
    <Container>
      <Button variant="outlined" onClick={() => navigate("/")}>
        Back To Home
      </Button>
      <div className="container">
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              aria-label="First name"
              onChange={(e) =>
                setdetails({ ...details, firstname: e.target.value })
              }
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              aria-label="Last name"
              onChange={(e) =>
                setdetails({ ...details, lastname: e.target.value })
              }
            />
          </div>
        </div>
        <br />
        <div className="Location">
          <div className="col-6">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              onChange={(e) =>
                setdetails({ ...details, address: e.target.value })
              }
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              onChange={(e) => setdetails({ ...details, city: e.target.value })}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">
              State
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              onChange={(e) =>
                setdetails({ ...details, state: e.target.value })
              }
            />
          </div>
        </div>
        <br />
        <div className="Conntact info">
          <h3>Contact Details</h3>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">
              Phone No
            </label>
            <input
              type="text"
              className="form-control"
              pattern="[1-9]{1}[0-9]{9}"
              id="inputCity"
              name="phone_number"
              required
              onChange={(e) =>
                setdetails({ ...details, phone: e.target.value })
              }
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="basic-url" className="form-label">
              Website
            </label>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
                onChange={(e) =>
                  setdetails({ ...details, website: e.target.value })
                }
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="input-group mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={(e) =>
                  setdetails({ ...details, email: e.target.value })
                }
              />
            </div>
          </div>
        </div>
        <br />
        <div className="edu">
          <h3>Educational Details</h3>

          <div className="col-6">
            <label htmlFor="inputAddress" className="form-label">
              Institution Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              name="institution_name"
              onChange={(e) =>
                setdetails({ ...details, institution: e.target.value })
              }
            />
          </div>

          <div className="col-6">
            <label htmlFor="inputAddress" className="form-label">
              Course
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              name="course"
              onChange={(e) =>
                setdetails({ ...details, course: e.target.value })
              }
            />
          </div>

          <div className="col-6">
            <label htmlFor="inputAddress" className="form-label">
              Grade
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              name="grade"
              onChange={(e) =>
                setdetails({ ...details, grade: e.target.value })
              }
            />
          </div>
          <div className="col-6">
            <label className="form-label">Start Date</label>
            <input
              type="date"
              className="form-control"
              name="start_date"
              onChange={(e) =>
                setdetails({ ...details, start_date: e.target.value })
              }
            />
          </div>

          <div className="col-6">
            <label className="form-label">End Date</label>
            <input
              type="date"
              className="form-control"
              name="end_date"
              onChange={(e) =>
                setdetails({ ...details, end_date: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Description
            </label>
            <textarea
              type="text"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="edu_description"
              onChange={(e) =>
                setdetails({ ...details, edu_description: e.target.value })
              }
            ></textarea>
          </div>
        </div>
        <br />
        <div className="certification">
          <h3>Certification Details</h3>
          <div className="col-6">
            <label htmlFor="inputAddress" className="form-label">
              Course Name
            </label>
            <input
              type="text"
              name="course_name"
              className="form-control"
              id="inputAddress"
              onChange={(e) =>
                setdetails({ ...details, course_name: e.target.value })
              }
            />
          </div>

          <div className="col-6">
            <label htmlFor="inputAddress" className="form-label">
              Organisation
            </label>
            <input
              type="text"
              name="cer_organisation"
              className="form-control"
              id="inputAddress"
              onChange={(e) =>
                setdetails({ ...details, cer_organisation: e.target.value })
              }
            />
          </div>
          <div className="col-6">
            <label htmlFor="inputAddress" className="form-label">
              Description
            </label>
            <textarea
              type="text"
              name="cer_description"
              className="form-control"
              rows="3"
              id="inputAddress"
              onChange={(e) =>
                setdetails({ ...details, cer_description: e.target.value })
              }
            />
          </div>
        </div>
        <div className="objective">
          <div className="col-6">
            <label htmlFor="inputAddress" className="form-label">
              Objective
            </label>
            <br />
            <input
              type="text"
              name="objective"
              className="form-control"
              id="inputAddress"
              required
              onChange={(e) =>
                setdetails({ ...details, objective: e.target.value })
              }
            />
          </div>
        </div>
        <br />
        <div className="workexp">
          <h3>Work Experience</h3>
          <div className="col-6">
            <label htmlFor="inputAddress" className="form-label">
              Organisation Name
            </label>
            <input
              type="text"
              name="organisation_name"
              className="form-control"
              id="inputAddress"
              onChange={(e) =>
                setdetails({ ...details, wrk_organisation: e.target.value })
              }
            />
          </div>
          <div className="col-6">
            <label htmlFor="inputAddress" className="form-label">
              Role
            </label>
            <input
              type="text"
              name="role"
              className="form-control"
              id="inputAddress"
              onChange={(e) => setdetails({ ...details, role: e.target.value })}
            />
          </div>
          <div className="col-6">
            <label htmlFor="inputAddress" className="form-label">
              Start Date
            </label>
            <input
              type="date"
              name="wrk_start_date"
              className="form-control"
              id="inputAddress"
              onChange={(e) =>
                setdetails({ ...details, wrk_start_date: e.target.value })
              }
            />
          </div>
          <div className="col-6">
            <label htmlFor="inputAddress" className="form-label">
              End Date
            </label>
            <input
              type="date"
              name="wrk_end_date"
              className="form-control"
              id="inputAddress"
              onChange={(e) =>
                setdetails({ ...details, wrk_end_date: e.target.value })
              }
            />
          </div>
          <div className="col-6">
            <label htmlFor="inputAddress" className="form-label">
              Description
            </label>
            <textarea
              type="text"
              name="wrk_description"
              rows="3"
              className="form-control"
              id="inputAddress"
              onChange={(e) =>
                setdetails({ ...details, wrk_description: e.target.value })
              }
            />
          </div>
        </div>
        <br />
        <div>
          <div className="col-6">
            <label htmlFor="inputAddress" className="form-label">
              skill
            </label>
            <input
              type="text"
              name="skill"
              className="form-control"
              id="inputAddress"
              onChange={(e) =>
                setdetails({ ...details, skill: e.target.value })
              }
            />
          </div>
        </div>
        <div>
          <div className="col-6">
            <label htmlFor="inputAddress" className="form-label">
              hobbies
            </label>
            <input
              type="text"
              name="hobbies"
              className="form-control"
              id="inputAddress"
              onChange={(e) =>
                setdetails({ ...details, hobbies: e.target.value })
              }
            />
          </div>
        </div>
        <div>
          <div className="col-6">
            <label htmlFor="inputAddress" className="form-label">
              Language
            </label>
            <input
              type="text"
              name="language"
              className="form-control"
              id="inputAddress"
              onChange={(e) =>
                setdetails({ ...details, language_name: e.target.value })
              }
            />
          </div>
          <div className="col-6">
            <label className="form-label">Level </label>
            <select
              name="level"
              className="form-select"
              aria-label="Default select example"
              onChange={(e) =>
                setdetails({ ...details, level: e.target.value })
              }
            >
              <option value="beginner">Beginner</option>
              <option value="proficient">Proficient</option>
              <option value="expert">Expert</option>
            </select>
          </div>
          <br />
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="flexRadioDefault1"
              name="read"
              onChange={(e) =>
                setdetails({
                  ...details,
                  read: e.target.value === "on" ? true : false,
                })
              }
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Read
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="flexRadioDefault1"
              name="write"
              onChange={(e) =>
                setdetails({
                  ...details,
                  write: e.target.value === "on" ? true : false,
                })
              }
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Write
            </label>
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="flexRadioDefault1"
              name="speak"
              onChange={(e) =>
                setdetails({
                  ...details,
                  speak: e.target.value === "on" ? true : false,
                })
              }
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Speak
            </label>
          </div>

          <br />
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Profile image
            </label>
            <input
              className="form-control"
              type="file"
              id="formFile"
              name="file"
              onChange={(e) => setfile(e.target.files[0])}
            />
          </div>
        </div>
        <Button onClick={uploadPortfolio} variant="contained">
          Submit
        </Button>
      </div>
    </Container>
  );
};

export default PostPortfolio;
