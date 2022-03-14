import axios from "axios";
import React, { useEffect, useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { apiUrl, reactDeleteFile, ReactfileUpload } from "../data/api";

const Container = styled.div`
  padding: 0 20px;
  .container-course {
    background: white;
    display: flex;
    align-items: center;
    min-height: 300px;
    overflow-x: scroll;
    ::-webkit-scrollbar {
      height: 3px;
      background-color: #fff;
      cursor: pointer;
    }
    ::-webkit-scrollbar-thumb {
      background: gray;
    }
  }
  .projects {
    display: flex;
  }
  .imagecontainer {
  }

  .imageandurl {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 300px;
    overflow: hidden;
    margin: 0 20px;
  }
  .image {
    width: 100%;
    height: 178px;
  }
  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .imageandurl a {
    text-align: center;
    text-decoration: none;
    color: black;
    width: 100%;
    padding: 2px;
  }
  .size {
    width: 350px;
    height: 200px;
    margin-right: 5px;
    display: flex;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 792px) {
    .size {
      width: 250px;
      height: 150px;
    }
  }
`;

const ProgressCourse = () => {
  const dispatch = useDispatch();

  const [files, setfiles] = useState("");
  const [fileid, setfileid] = useState(0);
  const [filesList, setfilesList] = useState([]);
  const [progress, setprogress] = useState(0);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const navigate = useNavigate();
  const [role, setrole] = useState();

  ///////redux state ////

  const myState = useSelector((state) => state.changeMernCourse);
  console.log(myState);

  const myLoginState = useSelector((state) => state.changeTheLogin);

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

  const CallReactProjectpage = async () => {
    try {
      const res = await axios.get(apiUrl + `/${myState}/files`, {
        withCredentials: true,
      });
      console.log(apiUrl + `/${myState}/files`);
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

  useEffect(() => {
    CallReactProjectpage();
  }, [myState]);
  return (
    <>
      <Container>
        <div className="container-course">
          <div className="projects">
            {filesList.map((element, index) => (
              <div className="imagecontainer" key={element._id}>
                {element.videos.map((file, index) =>
                  file.filetype === "video/mp4" ? (
                    <video width="400" controls className="size">
                      <source src={file.filepath} />
                    </video>
                  ) : (
                    <img src={file.filepath} alt="" className="size" />
                  )
                )}
                {element?.URL.map((file, index) => (
                  <div className="imageandurl" key={index}>
                    <div className="image">
                      <img src={file.filepath} alt="" />
                    </div>
                    <a href={file.url}>{file.url}</a>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProgressCourse;
