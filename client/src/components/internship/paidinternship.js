import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import profile1 from "../../assets/profile/profile1.png";
import { apiUrl } from "../../data/api";
import CancelIcon from "@mui/icons-material/Cancel";
import CloseIcon from "@mui/icons-material/Close";
import { blur, notblur } from "../../actions/index2";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  position: relative;
  .image {
    width: 230px;
    margin: 10px;
    height: 200px;
    border-radius: 10px;
    transition: all 0.2s ease;
    cursor: pointer;
    position: relative;
    box-shadow: 0px -1px 8px 0px rgba(28, 25, 25, 0.44);
    -webkit-box-shadow: 0px -1px 8px 0px rgba(28, 25, 25, 0.44);
    -moz-box-shadow: 0px -1px 8px 0px rgba(28, 25, 25, 0.44);
  }
  .clickbtn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
  }
  .gradient {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.2);
    display: none;
  }
  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  .image:hover {
    transform: scale(1.02);
  }
  .image:hover .clickbtn {
    display: flex;
  }
  .image:hover .gradient {
    display: flex;
  }

  .card {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 30%;
    width: 40%;
    display: ${(props) => (props.popupdisplay ? "flex" : "none")};
  }
  @media screen and (max-width: 656px) {
    .card {
      left: 10%;
      width: 80%;
    }
  }
  .popupimage {
    width: 100%;
    height: 250px;
    box-shadow: 0px 0px 6px 3px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 6px 3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 6px 3px rgba(0, 0, 0, 0.75);
  }
  @media screen and (max-width: 928px) {
    .popup {
      width: 400px;
      height: 200px;
    }
    .popupimage {
      height: 150px;
    }
  }
  .popupimage img {
    width: 100%;
    height: 100%;
    object-fit: fit;
  }
  .backicon {
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: orangered;
    width: 50px;
    cursor: pointer;
  }
  .details {
    margin-left: 10px;
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
`;

const Paidinternship = () => {
  const [data, setdata] = useState();
  const [popup, setpopup] = useState(false);
  const [popupelement, setpopupelement] = useState();
  const dispatch = useDispatch();

  const getPaidInternship = async () => {
    try {
      const res = await axios.get(apiUrl + "/internship/getinternship/paid");
      setdata(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);

  useEffect(() => {
    getPaidInternship();
  }, []);

  return (
    <Container popupdisplay={popup}>
      {data &&
        data.map((element, index) => (
          <div
            className="image"
            key={index}
            onClick={() => {
              setpopupelement(element);
              setpopup(true);
              dispatch(blur());
            }}
          >
            <img
              src={
                element.filepath
                  ? `data:${element.filepath.contentType};base64, ${Buffer.from(
                      element.filepath.data.data
                    ).toString("base64")}`
                  : profile1
              }
              alt="seumsh"
            />
            <div className="gradient"></div>
            <button type="button" className="clickbtn btn btn-light">
              Details
            </button>
          </div>
        ))}
      {popupelement && (
        <div className="card mb-3 box-shadow">
          <div className="popupimage">
            <img
              src={
                popupelement.filepath
                  ? `data:${
                      popupelement.filepath.contentType
                    };base64, ${Buffer.from(
                      popupelement.filepath.data.data
                    ).toString("base64")}`
                  : profile1
              }
              alt="seumsh"
            />
          </div>
          <div className="card-body">
            <h4 className="card-title">{popupelement.title}</h4>
            <div className="text">
              <h6>
                Type:{" "}
                <span className="badge bg-secondary">
                  {popupelement.type === "paid"
                    ? "Salary Based"
                    : "Course Based"}
                </span>
              </h6>
              <h6>
                Domain:{" "}
                <span className="badge bg-secondary">
                  {popupelement.domain}
                </span>
              </h6>
              <p className="card-text">{popupelement.description}</p>
              Registration:{" "}
              <a className="card-text" href={popupelement.url} target="_blank">
                {popupelement.url}
              </a>
            </div>
            <div className="card-text">
              <a href={popupelement.url} target="_blank">
                {popupelement.url}
              </a>
            </div>
          </div>
          <Button
            className="backicon"
            variant="contained"
            color="error"
            onClick={() => {
              setpopup(false);
              dispatch(notblur());
            }}
          >
            <CloseIcon />
          </Button>
          {/* <div
            className="backicon"
            onClick={() => {
              setpopup(false);
            }}
          >
            <CancelIcon />
          </div> */}
        </div>
      )}
    </Container>
  );
};

export default Paidinternship;
