import { NavLink, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import tcs from "../assets/placement/tcs.jpeg";
import { useState } from "react";
import axios from "axios";
import { apiUrl } from "../data/api";
import { useSelector } from "react-redux";

const Container = styled.div`
  .addanddelete {
    padding: 20px 50px;
    display: flex;
  }
  .addanddelete input {
    margin: 0 0 0 10px;
  }
  .placement1 {
    background: #f0fff0;
    padding: 10px 100px;
    display: flex;
    border-bottom: 1px solid black;
  }
  .image {
    width: 200px;
    height: 180px;
    margin-right: 15px;
  }
  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .items {
    text-decoration: none;
    list-style: none;
    padding: 10px 0;
  }
  .items li {
    margin-bottom: 5px;
    font-size: 1.2rem;
    font-weight: bold;
  }
  button.delete {
    margin-left: auto;
    font-size: 2rem;
    background: transparent;
    border: none;
    outline: none;
  }
  button.delete i {
    cursor: pointer;
    :hover {
      transform: scale(1.1);
      transition: all 0.2s;
    }
  }
  .refresh {
    margin-left: auto;
  }
`;
///styles end

const Placementdetails = () => {
  const [values, setvalues] = useState({
    name: "",
    salary: "",
    url: "",
    file: "",
  });
  const [files, setfiles] = useState([]);
  const navigate = useNavigate();

  const [Role, setRole] = useState();

  const myLoginState = useSelector((state) => state.changeTheLogin);

  const PlacementState = useSelector((state) => state.changeThePlacementType);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.name === "file" ? e.target.files[0] : e.target.value;
    setvalues({ ...values, [name]: value });
  };

  const handleClick = async () => {
    try {
      console.log(values);
      const form = new FormData();
      form.append("name", values.name);
      form.append("salary", values.salary);
      form.append("url", values.url);
      form.append("file", values.file);
      await axios.post(
        apiUrl + `/placement/${PlacementState}/${myLoginState}`,
        form
      );
      GetPlacementData();
    } catch (error) {
      console.log("placement error");
    }
  };
  const GetPlacementData = async () => {
    try {
      const res = await axios.get(
        apiUrl + `/placement/${PlacementState}/${myLoginState}`
      );
      setfiles(res.data);
    } catch (error) {
      console.log("getPlacement error", error);
    }
  };
  console.log(files);
  files.forEach((element, index) => {
    console.log(element.name);
  });

  const deletePlacement = async (id) => {
    try {
      await axios.delete(
        apiUrl + `/placement/${PlacementState}/${myLoginState}/${id}`
      );
      GetPlacementData();
    } catch (error) {
      console.log("delete placement error", error);
    }
  };
  const CallProjectpage = async () => {
    try {
      const res = await axios.get(apiUrl + `/getData/${myLoginState}`, {
        withCredentials: true,
      });

      const data = await res.data;
      console.log(res);
      console.log("get sumesh");
      if (res.status === 401) {
        navigate("/login");
      }
      console.log("Role", data.Role);
      setRole(data.Role);
      if (res.status !== 200) {
        throw new Error(res.error);
      }
    } catch (e) {
      console.log("sumesh", e);
      navigate("/login");
    }
  };

  useEffect(() => {
    GetPlacementData();
    CallProjectpage();
  }, []);

  return (
    <>
      <Navbar color="black" position="realtive" />
      <Container>
        {Role && Role === 1 ? (
          <div className="addanddelete">
            <input
              type="text"
              name="name"
              onChange={(e) => handleChange(e)}
              placeholder="company name"
            />
            <input
              type="text"
              name="salary"
              onChange={(e) => handleChange(e)}
              placeholder="salary"
            />
            <input
              type="text"
              name="url"
              onChange={(e) => handleChange(e)}
              placeholder="url"
            />
            <input
              type="file"
              name="file"
              onChange={(e) => handleChange(e)}
              placeholder="choose image"
            />
            <button type="submit" onClick={() => handleClick()}>
              Submit
            </button>
            <button className="refresh" onClick={() => GetPlacementData()}>
              refresh
            </button>
          </div>
        ) : (
          <></>
        )}
        {files.map((element, index) => (
          <div className="placement1" key={index}>
            <div className="image">
              <img src={element.photo} alt="placement img" />
            </div>
            <div className="details">
              <ul className="items">
                <li>Company Name: {element.name}</li>
                <li>salary: {element.salary}</li>
                <li>
                  Reg Link:
                  <a href={element.url} target="_blank">
                    {element.url}
                  </a>
                </li>
              </ul>
            </div>
            {Role && Role === 1 ? (
              <button className="delete">
                <i
                  class="far fa-trash-alt"
                  onClick={() => {
                    deletePlacement(element._id);
                    GetPlacementData();
                  }}
                ></i>{" "}
              </button>
            ) : (
              <></>
            )}
          </div>
        ))}
      </Container>
    </>
  );
};

export default Placementdetails;
