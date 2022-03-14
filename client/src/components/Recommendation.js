import * as React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import { Container, Pagination } from "@mui/material";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const data = [
  {
    src: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1527&q=80",
    title: "www.google.com",
    channel: "placement",
    views: "396 k views",
    createdAt: "a week ago",
  },
  {
    src: "https://www.prameyanews.com/wp-content/uploads/2020/04/Why-Startups-are-More-Popular-than-Ever-1.jpg",
    title: "www.startup.com",
    channel: "placement",
    views: "40 M views",
    createdAt: "3 years ago",
  },
  {
    src: "https://content.techgig.com/photo/78402335/iit-delhi-students-grab-300-offers-from-top-companies-in-virtual-internship-drive.jpg?119623",
    title: "www.internship.com",
    channel: "Internship",
    views: "130 M views",
    createdAt: "10 months ago",
  },
  {
    src: "https://www.theindianwire.com/wp-content/uploads/2019/01/Freelance-1024x579.jpg",
    title: "www.freelance.com",
    channel: "Freelance work",
    views: "396 k views",
    createdAt: "a week ago",
  },
];

function Media(props) {
  const { loading = false } = props;

  return (
    <Grid
      container
      wrap="nowrap"
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 50,
      }}
    >
      {(loading ? Array.from(new Array(4)) : data).map((item, index) => (
        <Box key={index} sx={{ width: 310, marginRight: 5, my: 5 }}>
          {item ? (
            <img
              style={{ width: "100%", height: "100%", margin: 10 }}
              alt={item.title}
              src={item.src}
            />
          ) : (
            <Skeleton variant="rectangular" width={310} height={200} />
          )}

          {item ? (
            <Box sx={{ pr: 0 }}>
              <NavLink
                to="/login"
                style={{
                  marginLeft: 10,
                  marginBottom: 5,
                  textDecoration: "none",
                  color: "blue",
                  cursor: "pointer",
                }}
              >
                {item.title}
              </NavLink>
              <Typography
                display="block"
                variant="caption"
                color="text.secondary"
                style={{ marginLeft: 10 }}
              >
                {item.channel}
              </Typography>
              {/* <Typography variant="caption" color="text.secondary">
                {`${item.views} • ${item.createdAt}`}
              </Typography> */}
            </Box>
          ) : (
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          )}
        </Box>
      ))}
    </Grid>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function YouTube() {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Media />
    </Box>
  );
}
