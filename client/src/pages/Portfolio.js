import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import jsPDF from "jspdf";
import image from "../assets/images/book.png";

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
  }
`;

const Portfolio = () => {
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
      <div className="container" id="content">
        <img
          src="https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
    </Container>
  );
};

export default Portfolio;
