import React, { useState, useEffect } from "react";
import styled from "styled-components";
import profile from "../assets/profile/profile2.jpg";
import placed from "../assets/placement/placed-student.jpeg";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import { apiUrl } from "../data/api";
import Preloader from "../components/preloader/Preloader";

const Container = styled.div`
  background-color: #eaf6ff;
  padding: 10px;
  .buttons {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .container-placed {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    min-height: 100vh;
  }
  .card {
    width: 400px;
    height: 500px;
    position: relative;

    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(9, 148, 255, 0.25),
      -0px -0px 10px rgba(9, 148, 255, 0.1),
      inset -0px -0px 10px rgba(9, 148, 255, 0.5);
    :hover .card-content {
      transform: rotateY(180deg);
    }
    cursor: pointer;
    margin: 20px;
  }
  .card-content {
    transition: 0.6s;
    transform-style: preserve-3d;
    transform-origin: center;
    position: relative;
  }
  .foregroundimage {
    width: 400px;
    height: 500px;
    position: absolute;
    z-index: 2;
  }

  .foregroundimage img {
    width: 100%;
    height: 100%;
    object-fit: fit;
    border-radius: 10px;
  }
  .background-content {
    padding: 20px;
    transform: rotateY(180deg);
    position: relative;
  }
  .deletebtn {
    position: absolute;
    top: 8px;
    right: 8px;
    background: #fff;
    padding: 8px;
    border-radius: 50%;
    animation: deleteanimate 1s infinite;
    :hover {
      background: red;
      color: #fff;
    }
  }
  @keyframes deleteanimate {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  .foregroundimage,
  .background-content {
    backface-visibility: hidden;
  }
  .image {
    height: 200px;
    margin-bottom: 10px;
    position: relative;
    width: 100%;
  }

  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 6px;
  }
  .content {
    overflow-y: scroll;
  }
  .name {
    font-weight: bold;
    color: #0994ff;
    text-transform: uppercase;
  }
  .company-type {
    font-size: 1rem;
    background: grey;
    border-radius: 6px;
    color: #fff;
    padding: 1px 5px;
  }
  @media screen and (max-width: 566px) {
    .card {
      width: 250px;
      height: 320px;
    }
    .foregroundimage {
      width: 250px;
      height: 320px;
    }
    .background-content {
      padding: 10px;
    }
    .image {
      height: 100px;
      margin-bottom: 5px;
    }
    h3 {
      font-size: 1rem;
    }
    h5 {
      font-size: 0.8rem;
    }
    .company-type {
      font-size: 0.8rem;
    }
  }
  .addworkbutton {
    margin: 20px auto;
    display: ${(props) => (props.display ? "none" : "flex")};
  }
  .formarea {
    display: ${(props) => (props.display ? "flex" : "none")};
    flex-direction: column;
    width: min(500px, 100%);
    margin: 0 auto;
    border: 1px solid grey;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.63);
    -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.63);
    -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.63);
  }
`;

const PlacedStudents = () => {
  const [display, setdisplay] = useState(false);

  const [name, setname] = useState();
  const [companyname, setcompanyname] = useState();
  const [companytype, setcompanytype] = useState();
  const [salary, setsalary] = useState();
  const [dept, setdept] = useState();
  const [profileimage, setprofileimage] = useState();
  const [posterimage, setposterimage] = useState();

  const navigate = useNavigate();

  const [Role, setRole] = useState();

  const [data, setdata] = useState();

  const [loader, setloader] = useState(false);

  const myLoginState = useSelector((state) => state.changeTheLogin);

  console.log(myLoginState);

  const handleUpload = async () => {
    if (
      !name ||
      !companyname ||
      !companytype ||
      !salary ||
      !dept ||
      !profileimage ||
      !posterimage
    ) {
      window.alert("please fill properly");
    } else {
      try {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("companyname", companyname);
        formData.append("companytype", companytype);
        formData.append("salary", salary);
        formData.append("dept", dept);
        formData.append("profile", profileimage);
        formData.append("poster", posterimage);

        const res = await axios.post(
          apiUrl + `/placedstudents/addplacedstudent/${myLoginState}`,
          formData,
          {
            withCredentials: true,
          }
        );
        if (res) {
          getPlacedStudents();
          setdisplay(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getPlacedStudents = async () => {
    try {
      setloader(true);

      const res = await axios.get(
        apiUrl + `/placedstudents/getplaced/${myLoginState}`
      );
      console.log(res.data);
      setdata(res.data);
      setloader(false);
    } catch (error) {
      console.log(error);
      setloader(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        apiUrl + `/placedstudents/delete/${myLoginState}/${id}`
      );
      if (res) {
        getPlacedStudents();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const CallProjectpage = async () => {
    try {
      const res = await axios.get(apiUrl + `/getData/${myLoginState}`, {
        withCredentials: true,
      });

      const data = await res.data;
      if (data) {
        setRole(data.Role);
      }
      if (res.status !== 200) {
        throw new Error(res.error);
      }
    } catch (e) {
      console.log("callPro eror", e);
      navigate("/login");
    }
  };

  console.log(Role);

  useEffect(() => {
    CallProjectpage();
    getPlacedStudents();
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
          onClick={() => {
            getPlacedStudents();
            setdisplay(false);
          }}
        >
          Refresh
        </button>
      </div>
      <div className="container">
        {/* {Role && (Role === 1 || Role === 5) ? (
          <Button
            variant="outlined"
            className="addworkbutton"
            color="secondary"
            onClick={() => setdisplay(true)}
          >
            Add Workshop
          </Button>
        ) : (
          <></>
        )} */}
        {Role && Role === 1 ? (
          <Button
            variant="outlined"
            className="addworkbutton"
            color="secondary"
            onClick={() => setdisplay(true)}
          >
            Add Placed Students
          </Button>
        ) : (
          <></>
        )}
        <form className="formarea">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Name of student"
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Company Name"
              onChange={(e) => setcompanyname(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => setcompanytype(e.target.value)}
            >
              <option hidden>Select Type Of Company</option>
              <option value="service">Service Based</option>
              <option value="product">Product Based</option>
              <option value="startup">Startup</option>
            </select>
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Salary"
              onChange={(e) => setsalary(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Department"
              onChange={(e) => setdept(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Profile Image
            </label>
            <input
              className="form-control"
              type="file"
              id="formFile"
              onChange={(e) => setprofileimage(e.target.files[0])}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Poster Image
            </label>
            <input
              className="form-control"
              type="file"
              id="formFile"
              onChange={(e) => setposterimage(e.target.files[0])}
            />
          </div>
          <div className="mb-3">
            <Button variant="outlined" onClick={() => handleUpload()}>
              Submit
            </Button>
          </div>
        </form>
      </div>
      {loader ? (
        <Preloader bg="rgba(0,0,0,0.8)" />
      ) : (
        <div className="container-placed">
          {data &&
            data.map((element, index) => (
              <div className="card" key={index}>
                <div className="card-content">
                  <div className="foregroundimage">
                    <img
                      src={`data:${
                        element?.poster?.contentType
                      };base64, ${Buffer.from(
                        element?.poster?.data.data
                      ).toString("base64")}`}
                      className="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div className="background-content">
                    <div className="image">
                      <img
                        src={`data:${
                          element?.profile?.contentType
                        };base64, ${Buffer.from(
                          element?.profile?.data.data
                        ).toString("base64")}`}
                        className="card-img-top"
                        alt="..."
                      />
                    </div>
                    {Role && Role === 1 ? (
                      <div
                        className="deletebtn"
                        onClick={() => handleDelete(element._id)}
                      >
                        <DeleteIcon />
                      </div>
                    ) : (
                      <></>
                    )}
                    <div className="content">
                      <h3 className="name">{element.name}</h3>
                      <h5>
                        Company: <span>{element.companyname}</span>{" "}
                        <span className="company-type">
                          {element.companytype}
                        </span>
                      </h5>
                      <h5>
                        Salary: <span>{element.salary}</span>
                      </h5>
                      <h5>
                        Department: <span>{element.dept}</span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </Container>
  );
};

export default PlacedStudents;
