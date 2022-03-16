import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import jsPDF from "jspdf";
import image from "../assets/images/book.png";
import axios from "axios";
import { apiUrl } from "../data/api";
import { useSelector } from "react-redux";

const Container = styled.div`
  #content {
    width: 700px;
    padding: 10px;
    text-align: center;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const Portfolio = () => {
  const [profile, setprofile] = useState();
  const [data, setdata] = useState([]);

  const myLoginState = useSelector((state) => state.changeTheLogin);

  const getPortfolio = async () => {
    try {
      const res = await axios.get(
        apiUrl + `/portfolio/getportfoliodata/${myLoginState}`,
        {
          withCredentials: true,
        }
      );
      console.log(res);
      setprofile(
        `data:${res.data?.photo?.contentType};base64, ${Buffer.from(
          res.data?.photo?.data.data
        ).toString("base64")}`
      );
      setdata(res.data);
    } catch (error) {
      console.error(error);
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
      <Button onClick={generatePdf}>Download</Button>
      <div className="name">{data.first_name}</div>
      <div className="container" id="content">
        <img src={profile} alt="" />
      </div>
    </Container>
  );
};

export default Portfolio;
