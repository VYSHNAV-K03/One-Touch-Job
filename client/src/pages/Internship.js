import { Button, IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import image from "../assets/images/progressbackground.png";
import Navbar from "../components/Navbar";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { apiUrl } from "../data/api";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Preloader from "../components/preloader/Preloader";

const bootstrap = require("bootstrap");

const Container = styled.div`
  padding: 20px 50px;
  overflow-y: scroll;
  height: 100vh;
  ::-webkit-scrollbar {
    width: 16px;
    height: 8px;
    background-color: #fff;
    cursor: pointer;
  }
  ::-webkit-scrollbar-thumb {
    background: gray;
  }
  .buttons {
    display: flex;
    justify-content: space-between;
  }
  .container {
    padding: 20px;
  }
  .addworkbutton {
    display: ${(props) => (props.display ? "none" : "flex")};
    margin: auto;
  }
  .formarea {
    display: ${(props) => (props.display ? "flex" : "none")};
    flex-direction: column;
    margin: 20px auto;
    max-width: 600px;
    border: 1px solid grey;
    border-radius: 10px;
    padding: 10px;
    box-shadow: -1px -1px 15px -7px rgba(0, 0, 0, 0.7);
    -webkit-box-shadow: -1px -1px 15px -7px rgba(0, 0, 0, 0.7);
    -moz-box-shadow: -1px -1px 15px -7px rgba(0, 0, 0, 0.7);
  }
  .container-workshop {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .card {
    width: 450px;
  }
  .image {
    width: 100%;
    height: 250px;
    background-color: #537895;
    background-image: linear-gradient(315deg, #537895 0%, #09203f 74%);
    position: relative;
  }
  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 494px) {
    padding: 20px 10px;

    .image {
      width: 100%;
      height: 200px;
    }
    .container {
      padding: 10px;
    }
  }
  .text {
    height: 180px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      width: 6px;
      height: 8px;
      background-color: #aaa;
      cursor: pointer;
    }
    ::-webkit-scrollbar-thumb {
      background: blue;
    }
  }
  .box-shadow {
    box-shadow: -1px -1px 15px -7px rgba(0, 0, 0, 0.7);
    -webkit-box-shadow: -1px -1px 15px -7px rgba(0, 0, 0, 0.7);
    -moz-box-shadow: -1px -1px 15px -7px rgba(0, 0, 0, 0.7);
  }
  .deleteworkshopbtn {
    position: absolute;
    right: 10px;
    top: 10px;
    background: white;
  }
`;

const Internship = () => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [url, seturl] = useState("");
  const [type, settype] = useState("");
  const [domain, setdomain] = useState("");

  const [error, seterror] = useState(false);

  const [file, setfile] = useState();

  const [display, setdisplay] = useState(false);

  const [internship, setintern] = useState([]);
  const [internshipPaid, setpaidintern] = useState([]);
  const [internshipNotPaid, setnotpaidintern] = useState([]);

  const [loader, setloader] = useState(false);

  const [Role, setRole] = useState();
  const navigate = useNavigate();

  const myLoginState = useSelector((state) => state.changeTheLogin);

  const uploadInternship = async () => {
    if (!title || !description || !url || !type || !domain || !file) {
      seterror(true);
    } else {
      seterror(false);
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("url", url);
      formData.append("type", type);
      formData.append("domain", domain);
      formData.append("file", file);

      try {
        const res = await axios.post(
          apiUrl + "/internship/addinternship",
          formData
        );
      } catch (error) {
        console.log("upload error", error);
      }
    }
  };

  const getInternship = async () => {
    try {
      setloader(true);
      const res = await axios.get(apiUrl + "/internship/getinternship");
      setloader(false);

      setintern(res.data);
    } catch (error) {
      console.log("get error", error);
      setloader(false);
    }
  };

  const getInternshipPaid = async () => {
    try {
      const res = await axios.get(apiUrl + "/internship/getinternship");
      setpaidintern(res.data);
    } catch (error) {
      console.log("get error", error);
    }
  };
  const getInternshipNotPaid = async () => {
    try {
      const res = await axios.get(apiUrl + "/internship/getinternship");
      setnotpaidintern(res.data);
    } catch (error) {
      console.log("get error", error);
    }
  };

  const deleteWorkshop = async (id) => {
    try {
      const res = await axios.delete(apiUrl + `/internship/delete/${id}`);
      getInternship();
      window.alert("deleted succesfully");
    } catch (error) {
      console.log("delete error", error);
    }
  };

  const CallProjectpage = async () => {
    try {
      const res = await axios.get(apiUrl + `/getData/${myLoginState}`, {
        withCredentials: true,
      });

      const data = await res.data;

      setRole(data.Role);
      if (res.status !== 200) {
        throw new Error(res.error);
      }
    } catch (e) {
      console.log("callPro eror", e);
      navigate("/login");
    }
  };

  const handleUpload = () => {
    uploadInternship();
  };

  useEffect(() => {
    getInternship();
    getInternshipPaid();
    getInternshipNotPaid();
    CallProjectpage();
  }, []);

  return (
    <Container display={display}>
      <div className="buttons">
        <NavLink type="button" className="btn btn-outline-primary" to="/">
          Back To Home Page
        </NavLink>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={getInternship}
        >
          Refresh
        </button>
      </div>

      <div className="container">
        {Role && (Role === 1 || Role === 5) ? (
          <Button
            variant="outlined"
            className="addworkbutton"
            color="secondary"
            onClick={() => setdisplay(true)}
          >
            Add Internship
          </Button>
        ) : (
          <></>
        )}

        <form className="formarea">
          {error && (
            <div class="alert alert-danger" role="alert">
              Please Fill all details
            </div>
          )}
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Title of workshop
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              onChange={(e) => settitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={(e) => setdescription(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Type
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => settype(e.target.value)}
            >
              <option value="">select type of intenship</option>
              <option value="paid">Salary Based</option>
              <option value="notpaid">Course Based</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Domain
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => setdomain(e.target.value)}
            >
              <option value="">select domain</option>
              <option value="web">Web</option>
              <option value="app">App</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Registration Url
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              onChange={(e) => seturl(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Workshop image
            </label>
            <input
              className="form-control"
              type="file"
              id="formFile"
              onChange={(e) => setfile(e.target.files[0])}
            />
          </div>
          <div className="mb-3">
            <input
              className="btn btn-primary"
              type={!error ? "submit" : "button"}
              value="Upload"
              onClick={handleUpload}
            />
          </div>
        </form>
      </div>
      {loader ? (
        <Preloader bg="rgba(0,0,0,0.8)" />
      ) : (
        <div className="container-workshop">
          {internship?.map((element, index) => (
            <div className="card mb-3 box-shadow" key={index}>
              <div className="image">
                <img
                  src={`data:${
                    element?.filepath?.contentType
                  };base64, ${Buffer.from(
                    element?.filepath?.data.data
                  ).toString("base64")}`}
                  className="card-img-top"
                  alt="..."
                />
                {Role && Role === 1 ? (
                  <IconButton
                    aria-label="delete"
                    size="medium"
                    className="deleteworkshopbtn"
                    variant="outlined"
                    onClick={() => deleteWorkshop(element._id)}
                  >
                    <DeleteIcon color="primary" fontSize="inherit" />
                  </IconButton>
                ) : (
                  <></>
                )}
              </div>
              <div className="card-body">
                <h4 className="card-title">{element.title}</h4>
                <div className="text">
                  <h6>
                    Type:{" "}
                    <span className="badge bg-secondary">
                      {element.type === "paid"
                        ? "Salary Based"
                        : "Course Based"}
                    </span>
                  </h6>
                  <h6>
                    Domain:{" "}
                    <span className="badge bg-secondary">{element.domain}</span>
                  </h6>
                  <p className="card-text">{element.description}</p>
                  Registration:{" "}
                  <a className="card-text" href={element.url} target="_blank">
                    {element.url}
                  </a>
                </div>
                <div className="card-text">
                  <a href={element.url} target="_blank">
                    {element.url}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default Internship;
