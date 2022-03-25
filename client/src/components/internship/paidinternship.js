import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import profile1 from "../../assets/profile/profile1.png";
import { apiUrl } from "../../data/api";
import CancelIcon from "@mui/icons-material/Cancel";

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
  }
  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  .popup {
    position: absolute;
    top: 10%;
    left: 10%;
    width: 800px;
    height: 400px;
    background: #ffffff;

    display: ${(props) => (props.popupdisplay ? "flex" : "none")};
    align-items: center;
    justify-content: center;
    padding: 10px;
    box-shadow: 0px 0px 6px 3px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 6px 3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 6px 3px rgba(0, 0, 0, 0.75);
    border-radius: 10px;
  }
  .popupimage {
    width: 350px;
    height: 200px;
    box-shadow: 0px 0px 6px 3px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 6px 3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 6px 3px rgba(0, 0, 0, 0.75);
  }
  .popupimage img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .backicon {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
  .details {
    margin-left: 10px;
  }
`;

const Paidinternship = () => {
  const [data, setdata] = useState();
  const [popup, setpopup] = useState(false);
  const [popupelement, setpopupelement] = useState();

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
          </div>
        ))}
      {popupelement && (
        <div className="popup">
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
          <div className="details">
            <h1 className="description">{popupelement.title}</h1>
            <div className="description">
              Type:{" "}
              {popupelement.type === "paid" ? "Salary Based" : "Course Based"}
            </div>
            <div className="description">Domain: {popupelement.domain}</div>
            <div className="description">
              Description:{popupelement.description}
            </div>
            <a href={popupelement.url} className="description">
              Reg Url: {popupelement.url}
            </a>
          </div>
          <button
            type="button"
            class="btn-close backicon"
            aria-label="Close"
            onClick={() => {
              setpopup(false);
            }}
          ></button>
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
