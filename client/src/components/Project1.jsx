import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { apiUrl, deleteFile, fileUpload, getFile } from "../data/api";
import Navbar from "./Navbar";
import Projectsingle from "./Projectsingle";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const Container = styled.div`
  .container {
    font-family: "Arvo", serif;
    padding: 0.5rem;
    /* position: relative; */
  }
  .title {
    font-size: clamp(1.5rem, 2.5vw, 5rem);
    text-align: center;
    margin-bottom: 2rem;
  }
  .refresh {
    position: absolute;
    right: 50px;
  }
  .projects {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px 50px;
  }
  img {
    width: 350px;
    height: 300px;
  }
  .progress-bar {
    width: 100px;
    height: 100px;
    margin-left: 50px;
  }
`;

const Project1 = () => {
  const [files, setfiles] = useState("");
  const [fileid, setfileid] = useState(0);
  const [filesList, setfilesList] = useState([]);
  const [progress, setprogress] = useState(0);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const navigate = useNavigate();

  const myLoginState = useSelector((state) => state.changeTheLogin);

  const Filechange = (e) => {
    // console.log(e.target.files);
    setfiles(e.target.files);
    setprogress(0);
  };

  const filesoptions = {
    onUploadProgress: (progressEvent) => {
      const { loaded, total } = progressEvent;
      const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000)); // div by 1000 to change bytes values
      setprogress(percentage);
    },
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages({ numPages });
  };

  //upload the files
  const handleUpload = async () => {
    try {
      if (files) {
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
          formData.append("file", files[i]); //same name in router
        }
        // console.log(formData);
        await fileUpload(formData, filesoptions, myLoginState);
      }
      // getFiles();
      CallProjectpage();
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  };

  //initial call that fetch the data authenticated
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
      setfilesList(data.files);
      setfileid(data._id);
      console.log("Role", data.Role);
      if (res.status !== 200) {
        throw new Error(res.error);
      }
    } catch (e) {
      console.log("sumesh", e);
    }
  };

  console.log(filesList);
  console.log(fileid);

  //delete the files
  const handleDelete = async (id, element) => {
    try {
      await deleteFile(fileid, id, myLoginState);
      CallProjectpage();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    CallProjectpage();
  }, []);

  return (
    <Container>
      <Navbar color="black" position="relative" />
      <div className="container">
        <div className="title">YOUR PROJECTS</div>
        <input type="file" multiple onChange={(e) => Filechange(e)} />
        <button type="submit" onClick={() => handleUpload()}>
          sumesh
        </button>
        {/* <CircularProgressbar
          value={progress}
          className="progress-bar"
          text={`${progress}%`}
          styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: "butt",
            textSize: "16px",
            pathTransitionDuration: 0.8,
            pathColor: `rgba(255,136,0,${progress / 100})`,
            textColor: "black",
            backgroundColor: "red",
          })}
        /> */}
        <button className="refresh">Refresh</button>
        <div className="projects">
          {filesList.map((element, index) => (
            <div className="imagecontainer" key={element._id}>
              {element.file.map((file, index) =>
                file.filetype === "application/pdf" ? (
                  <Document
                    file={file.filepath}
                    onLoadSuccess={onDocumentLoadSuccess}
                  >
                    <Page pageNumber={pageNumber} />
                  </Document>
                ) : file.filetype === "video/mp4" ? (
                  <video width="400" controls>
                    <source src={file.filepath} />
                  </video>
                ) : (
                  <img src={file.filepath} alt="" />
                )
              )}
              <button
                className="delete"
                onClick={() => handleDelete(element._id, element)}
                type="delete"
                style={{ display: !element.file[0] ? "none" : "flex" }} //file[0] is only when it has single element.file
              >
                DELETE
              </button>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Project1;
