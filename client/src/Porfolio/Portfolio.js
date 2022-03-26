import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import jsPDF from "jspdf";
import image from "../assets/images/book.png";
import axios from "axios";
import { apiUrl } from "../data/api";
import { useSelector } from "react-redux";
import PortfolioTemp1 from "./PortfolioTemp1";
import { useNavigate } from "react-router-dom";
import Preloader from "../components/preloader/Preloader";

const Container = styled.div`
  padding: 10px;
  #content {
    max-width: 630px;
    padding: 10px;
    text-align: center;
  }
  .buttons {
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
  }
`;

const Portfolio = () => {
  const [profile, setprofile] = useState();
  const [data, setdata] = useState();

  const [loader, setloader] = useState(false);

  const navigate = useNavigate();

  const myLoginState = useSelector((state) => state.changeTheLogin);

  const getPortfolio = async () => {
    try {
      setloader(true);
      const res = await axios.get(
        apiUrl + `/portfolio/getportfoliodata/${myLoginState}`,
        {
          withCredentials: true,
        }
      );
      console.log(res);
      setdata(res.data);
      setprofile(
        `data:${res.data?.photo?.contentType};base64, ${Buffer.from(
          res.data?.photo?.data.data
        ).toString("base64")}`
      );
      setdata(res.data);
      setloader(false);
    } catch (error) {
      console.error(error);
      setloader(false);
    }
  };

  // console.log(profile);
  // data?.map((item, index) => {
  //   console.log(item.photo);
  // });
  // console.log(data);

  useEffect(() => {
    getPortfolio();
  }, []);

  const generatePdf = () => {
    const doc = new jsPDF("p", "pt", "a4");
    doc.html(document.querySelector("#content"), {
      callback: (pdf) => {
        const pagecount = doc.internal.getNumberOfPages();
        // pdf.deletePage(pagecount);
        pdf.save("mypdf.pdf");
      },
    });
  };
  return (
    <Container>
      <div className="buttons">
        <Button onClick={() => navigate("/")} variant="outlined">
          Back To HOME
        </Button>
        <Button onClick={generatePdf} variant="contained" color="secondary">
          Download
        </Button>
        <Button variant="outlined" onClick={() => navigate("/postportfolio")}>
          New Portfolio
        </Button>
        <Button variant="outlined" onClick={getPortfolio}>
          Refresh
        </Button>
      </div>
      {loader ? (
        <Preloader bg="black" />
      ) : (
        <div className="container" id="content">
          {data ? <PortfolioTemp1 /> : <></>}
        </div>
      )}
    </Container>
  );
};

export default Portfolio;
