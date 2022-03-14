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

const Container = styled.div`
  .progress-bar {
    width: 100px;
    height: 100px;
    margin-left: 50px;
  }
`;

const Courses = () => {
  const [files, setfiles] = useState("");
  const [fileid, setfileid] = useState(0);
  const [filesList, setfilesList] = useState([]);
  const [progress, setprogress] = useState(0);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const navigate = useNavigate();
  const [role, setrole] = useState();
  const [urldisplay, seturldisplay] = useState(false);
  const [url, seturl] = useState("");
  const [urlimg, seturlimg] = useState([]);

  console.log(url);
  console.log(urlimg);

  ///////redux state ////
  const myState = useSelector((state) => state.changeTheCourse);

  const myLoginState = useSelector((state) => state.changeTheLogin);

  console.log(myState);

  /////////////////////////////////////////////////////

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages({ numPages });
  };

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

  //upload the files
  const handleUpload = async () => {
    try {
      if (files) {
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
          formData.append("files", files[i]); //same name in router
        }
        // console.log(formData);
        await ReactfileUpload(formData, filesoptions, myState);
      }
      // getFiles();
      CallReactProjectpage();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUrlwithimageupload = async () => {
    try {
      const formData = new FormData();
      formData.append("url", url);
      formData.append("file", urlimg);
      await axios.post(apiUrl + `/${myState}/url`, formData);
      seturldisplay(!urldisplay);
      CallReactProjectpage();
    } catch (error) {
      console.log(error);
    }
  };

  const CallReactProjectpage = async () => {
    try {
      const res = await axios.get(apiUrl + `/${myState}/files`, {
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
  // console.log(filesList);
  // filesList.map((element, index) => {
  //   // console.log(element._id);
  //   element.videos.map((file, index) => {
  //     console.log(file.filepath);
  //   });
  // });

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
        {role && role == 1 ? (
          <input type="file" multiple onChange={(e) => Filechange(e)} />
        ) : (
          <></>
        )}
        {role && role == 1 ? (
          <button type="submit" onClick={() => handleUpload()}>
            Upload
          </button>
        ) : (
          <></>
        )}
        {role && role == 1 ? (
          <CircularProgressbar
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
          />
        ) : (
          <></>
        )}
        {role && role == 1 ? (
          <button
            className="addurl"
            style={{ display: urldisplay ? "none" : "flex" }}
            onClick={() => seturldisplay(!urldisplay)}
          >
            ADD URL
          </button>
        ) : (
          <></>
        )}
        {role && role == 1 ? (
          <div
            className="urlcontainer"
            style={{ display: urldisplay ? "flex" : "none" }}
          >
            <input
              type="text"
              placeholder="URL"
              onChange={(e) => seturl(e.target.value)}
            />
            <input
              type="file"
              placeholder="image"
              onChange={(e) => seturlimg(e.target.files[0])}
            />
            <button className="submiturl" onClick={handleUrlwithimageupload}>
              Submit
            </button>
          </div>
        ) : (
          <></>
        )}
        <button className="refresh">Refresh</button>
        <div className="projects">
          {filesList.map((element, index) => (
            <div className="withurl">
              <div className="imagecontainer" key={element._id}>
                {element.videos.map((file, index) =>
                  file.filetype === "video/mp4" ? (
                    <video width="400" controls>
                      <source src={file.filepath} />
                    </video>
                  ) : (
                    <img src={file.filepath} alt="" />
                  )
                )}
              </div>
              <div className="imagecontainer" key={element._id}>
                {element.URL.map((file, index) => (
                  <div className="urlwithimagecontainer">
                    <img src={file.filepath} alt="" />
                    <a href={file.url} target="_blank">
                      {file.url}
                    </a>
                  </div>
                ))}
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
      </div>
    </Container>
  );
};

export default Courses;
