import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { apiUrl, reactDeleteFile, ReactfileUpload } from "../data/api";
import axios from "axios";
import { login } from "../actions";
import { Button } from "@mui/material";

const Container = styled.div`
  padding: 0 20px;
  .progress-bar {
    width: 100px;
    height: 100px;
    margin-left: 50px;
  }
  .name {
    display: flex;
  }
  .urlcontainer {
    padding: 20px;
    border-radius: 20px;
    margin: 20px auto;
    box-shadow: 0px 0px 13px -2px rgba(94, 159, 173, 0.75);
    -webkit-box-shadow: 0px 0px 13px -2px rgba(94, 159, 173, 0.75);
    -moz-box-shadow: 0px 0px 13px -2px rgba(94, 159, 173, 0.75);
  }
  .urlcontainer input {
    margin-bottom: 10px;
  }
  .projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .image {
    width: 300px;
    height: 200px;
  }
  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Courses = () => {
  const [files, setfiles] = useState("");
  const [fileid, setfileid] = useState(0);
  const [filesList, setfilesList] = useState([]);
  const navigate = useNavigate();
  const [role, setrole] = useState();
  const [url, seturl] = useState("");
  const [urlimg, seturlimg] = useState([]);

  const myState = useSelector((state) => state.changeTheCourse);

  const myLoginState = useSelector((state) => state.changeTheLogin);

  console.log(myState);

  const handleUrlwithimageupload = async () => {
    try {
      const formData = new FormData();
      formData.append("url", url);
      formData.append("file", urlimg);
      const res = await axios.post(
        apiUrl + `/courses/${myState}/url`,
        formData
      );
      CallReactProjectpage();
    } catch (error) {
      console.log(error);
    }
  };

  const CallReactProjectpage = async () => {
    try {
      const res = await axios.get(apiUrl + `/courses/${myState}/url/get`, {
        withCredentials: true,
      });

      const data = await res.data;
      console.log(data);
      setfilesList(data);
      setfileid(data._id);
      if (res.status !== 200) {
        throw new Error(res.error);
      }
    } catch (e) {
      console.log("sumesh", e);
    }
  };

  //delete the files
  const handleDelete = async (id, element) => {
    try {
      await reactDeleteFile(myState, id);
      CallReactProjectpage();
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
      console.log(res);
      console.log("get sumesh");
      if (data.status === 401) {
        navigate("/login");
      }
      console.log("Role", data.Role);
      setrole(data.Role);
      if (res.status !== 200) {
        throw new Error(res.error);
      }
    } catch (e) {
      console.log("sumesh", e);
    }
  };

  useEffect(() => {
    CallReactProjectpage();
    CallProjectpage();
  }, []);

  return (
    <Container>
      <div className="name">
        {role && role === 1 ? (
          <div className="urlcontainer">
            <input
              type="text"
              className="form-control"
              placeholder="URL"
              onChange={(e) => seturl(e.target.value)}
            />
            <input
              type="file"
              className="form-control"
              placeholder="image"
              onChange={(e) => seturlimg(e.target.files[0])}
            />
            <Button
              variant="outlined"
              className="submiturl"
              onClick={handleUrlwithimageupload}
            >
              Submit
            </Button>
          </div>
        ) : (
          <></>
        )}
      </div>

      <div className="projects">
        {filesList.map((element, index) => (
          <div className="withurl" key={index}>
            <div className="imagecontainer">
              {element.url ? (
                <div href={element.url} className="urlwithimagecontainer">
                  {element.image.data ? (
                    <div className="image">
                      <img
                        src={`data:${
                          element.image.contentType
                        };base64, ${Buffer.from(
                          element.image.data.data
                        ).toString("base64")}`}
                        alt=""
                      />
                    </div>
                  ) : (
                    <></>
                  )}
                  <a href={element.url} target="_blank">
                    {element.url}
                  </a>
                </div>
              ) : (
                <></>
              )}
            </div>
            {role && role == 1 ? (
              <button
                className="delete"
                onClick={() => handleDelete(element._id, element)}
                type="delete"
                // style={{ display: !element.file[0] ? "none" : "flex" }} //file[0] is only when it has single element.file
              >
                DELETE
              </button>
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Courses;
