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
    width: 300px;
    overflow: hidden;
    margin: 0 20px;
    cursor: pointer;
    text-decoration: none;
    box-shadow: -1px 0px 14px -1px rgba(0, 0, 0, 0.47);
    -webkit-box-shadow: -1px 0px 14px -1px rgba(0, 0, 0, 0.47);
    -moz-box-shadow: -1px 0px 14px -1px rgba(0, 0, 0, 0.47);
    transition: all 0.5s ease-in-out;
    :hover {
      transform: scale(1.03);
    }
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
  .url {
    text-align: center;
    text-decoration: none;
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

  const myLoginState = useSelector((state) => state.changeTheLogin);

  /////////////////////////////////////////////////////

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages({ numPages });
  };

  const Filechange = (e) => {
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
      const res = await axios.get(apiUrl + `/courses/${myState}/url/get`, {
        withCredentials: true,
      });
      const data = await res.data;
      setfilesList(data);
      setfileid(data._id);
      if (res.status !== 200) {
        throw new Error(res.error);
      }
    } catch (e) {
      console.log("callprogress", e);
    }
  };
  // filesList.map((element, index) => {
  //   element.videos.map((file, index) => {
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
              <div className="imagecontainer" key={index}>
                <a
                  href={element.url}
                  target="_blank"
                  className="imageandurl"
                  key={index}
                >
                  <div className="image">
                    <img
                      src={`data:${
                        element.image.contentType
                      };base64, ${Buffer.from(element.image.data.data).toString(
                        "base64"
                      )}`}
                      alt=""
                    />
                  </div>
                  <div className="url">{element.url}</div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProgressCourse;
