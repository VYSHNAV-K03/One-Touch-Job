import { Close, Search } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { SearchItems } from "../frontenddatas/SearchFilterData";

const Container = styled.div`
  height: 100vh;
  background: #fff;
  .searcharea {
    display: flex;
    align-items: center;
    padding: 0 70px;
    height: 10vh;
  }
  .searchbar {
    display: flex;
    background: #ffff;
    border-radius: 20px;
    padding: 8px 5px;
    margin: auto;
    cursor: pointer;
    text-decoration: none;
    border: 2px solid grey;
  }
  .searchbar .searchicon {
    margin: 0 2px;
  }
  .searchbar input {
    border: none;
    outline: none;
    width: 500px;
    font-size: 1.1rem;
  }
  .close {
    cursor: pointer;
  }
  .contents {
    height: 90vh;
    overflow-y: scroll;
    border-radius: 10px;
    max-width: 1000px;
    margin: auto;
    box-shadow: -1px 0px 9px 0px rgba(0, 0, 0, 0.33);
    -webkit-box-shadow: -1px 0px 9px 0px rgba(0, 0, 0, 0.33);
    -moz-box-shadow: -1px 0px 9px 0px rgba(0, 0, 0, 0.33);
    /* ::-webkit-scrollbar {
      width: 1.25rem;
    }
    ::-webkit-scrollbar-track {
      border-radius: 100vw;
      background: lightgrey;
      margin-block: 5px;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 100vw;
      background: ;
    } */
  }

  .contents .eachitems {
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    box-shadow: 0px 5px 3px -5px rgba(0, 0, 0, 0.57);
    -webkit-box-shadow: 0px 5px 3px -5px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 5px 3px -5px rgba(0, 0, 0, 0.57);
    :hover {
      background-color: #ffe4e1;
    }
  }
  .image {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SearchFilter = () => {
  const [query, setquery] = useState("");

  return (
    <Container>
      <div className="searcharea">
        <div className="searchbar">
          <Search className="searchicon" />
          <input
            type="text"
            placeholder="Search here..."
            onChange={(e) => setquery(e.target.value)}
          />
        </div>
        <NavLink to="/" className="close">
          <Close />
        </NavLink>
      </div>
      <ul className="contents">
        {SearchItems.filter((item) =>
          item.name.toLowerCase().includes(query)
        ).map((item) => (
          <NavLink
            to={item.link}
            key={item.id}
            className="eachitems"
            style={{
              //   backgroundColor: item.id % 2 == 0 ? "#F8F8FF" : "#F0FFFF",
              textDecoration: "none",
              color: "black",
            }}
          >
            <div className="image">
              <img src={item.imageURL} alt="" />
            </div>
            <p className="name">{item.name}</p>
          </NavLink>
        ))}
      </ul>
    </Container>
  );
};

export default SearchFilter;
