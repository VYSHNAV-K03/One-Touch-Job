import React, { useEffect, useState } from "react";
import styled from "styled-components";
import mouse from "../assets/images/mouse.png";
import run from "../assets/progressbar/run.png";
import htmlandcss from "../assets/progressbar/htmlandcss.png";
import js from "../assets/progressbar/javascript.png";
import react from "../assets/progressbar/react5.png";
import angular from "../assets/progressbar/angular.png";
import vue from "../assets/progressbar/vue.png";
import project1 from "../assets/progressbar/project1.png";
import node from "../assets/progressbar/node.png";
import express from "../assets/progressbar/express.png";
import mongo from "../assets/progressbar/mongo.png";
import mern from "../assets/progressbar/mern.png";
import mean from "../assets/progressbar/mean.png";
import mevn from "../assets/progressbar/mevn.png";

import finish from "../assets/progressbar/finish.png";
import progress from "../assets/images/progressbar.jpg";
import progressbg from "../assets/images/progressbg1.png";
import finish1 from "../assets/progressbar/finish1.png";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { apiUrl } from "../data/api";
import {
  angularcourseprogress,
  backendprojects,
  backendprojectsprogress,
  expresscourse,
  expresscourseprogress,
  frontendprojects,
  frontendprojectsangularprogress,
  frontendprojectsprogress,
  frontendprojectsreactprogress,
  frontendprojectsvueprogress,
  fullstackprojects,
  fullstackprojectsprogress,
  htmlcourse,
  htmlcourseprogress,
  javascriptcourse,
  javascriptcourseprogress,
  meanfullstackprojectsprogress,
  mernfullstackprojectsprogress,
  mevnfullstackprojectsprogress,
  mongocourse,
  mongocourseprogress,
  nodecourse,
  nodecourseprogress,
  reactcourse,
  reactcourseprogress,
  vuecourseprogress,
} from "../actions";
import { useQuery, useQueryClient } from "react-query";

const Container = styled.div`
  padding: ${(props) => props.padding};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .container-progress {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .items {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: clamp(0.7rem, 0.9vw, 1.1rem);
  }
  .items li {
    display: inline-block;
    width: clamp(30px, 9vw, 200px);
    text-align: center;
    cursor: pointer;
  }

  .image {
    width: clamp(50px, 5vw, 100px);
    height: clamp(50px, 5vw, 100px);
    margin: 0 auto 10px auto;
  }
  .image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .line {
    position: relative;
    margin-bottom: 10px;
    height: 5px;
    background: lightgreen;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .line i {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .items li:hover {
    .line i {
      transform: scale(1.5);
      transition: all 0.2s;
    }
  }
  p {
    margin-top: 20px;
  }
  @media screen and (max-width: 1037px) {
    position: relative;
    overflow-x: scroll;
    padding: ${(props) => props.padding2};
    ::-webkit-scrollbar {
      height: 3px;
      background-color: #fff;
      cursor: pointer;
    }
    ::-webkit-scrollbar-thumb {
      background: gray;
    }
    .container-progress {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
    }
    .items li {
      width: 100px;
    }
  }
`;

const Progressbar = () => {
  const dispatch = useDispatch();

  const [course, setcourse] = useState("not selected");
  const [linecolor, setlinecolor] = useState(1);

  const myCourseState = useSelector((state) => state.changeMernCourse);

  const myLoginState = useSelector((state) => state.changeTheLogin);

  // const CallProjectpage = async () => {
  //   try {
  //     const res = await axios.get(apiUrl + `/getData/${myLoginState}`, {
  //       withCredentials: true,
  //     });

  //     const data = await res.data;

  //     setcourse(data.passion);
  //     if (res.status !== 200) {
  //       throw new Error(res.error);
  //     }
  //   } catch (e) {
  //     console.log("callprogress", e);
  //   }
  // };

  const { isLoading, isFetching, isSuccess, isError, data, error, refetch } =
    useQuery(
      "progressbar",
      () => {
        return axios.get(apiUrl + `/getData/${myLoginState}`, {
          withCredentials: true,
        });
      },
      {
        onSuccess: (res) => {
          const data = res.data;

          setcourse(data.passion);
        },
        onError: (err) => {
          console.log("callprogress", err);
        },
        refetchOnWindowFocus: false,
      }
    );

  const queryClient = useQueryClient();

  // console.log({ isLoading, isFetching });

  const handleClick = (selected, fn) => {
    setlinecolor(selected);
    dispatch(fn);
  };

  // useEffect(() => {
  //   CallProjectpage();
  // }, []);

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {course !== "not selected" ? (
        <Container
          prog={progress}
          padding={!course ? "0px" : "50px"}
          padding2={!course ? "0px" : "80px 100px"}
          lineColor={linecolor}
        >
          {course === "mern" ? (
            <div className="container-progress">
              <ul className="items">
                <li
                  onClick={() => {
                    handleClick(1, htmlcourseprogress());
                  }}
                >
                  <div className="image">
                    <img src={htmlandcss} alt="" />
                  </div>
                  <div className="line">
                    {linecolor == 1 ? (
                      <i className="fas fa-check-circle"></i>
                    ) : (
                      <i className="fas fa-times-circle"></i>
                    )}
                  </div>
                  <p>HTML & CSS</p>
                </li>
                <li
                  onClick={() => {
                    handleClick(2, javascriptcourseprogress());
                  }}
                >
                  <div className="image">
                    <img src={js} alt="" />
                  </div>
                  <div className="line">
                    {linecolor == 2 ? (
                      <i className="fas fa-check-circle"></i>
                    ) : (
                      <i className="fas fa-times-circle"></i>
                    )}{" "}
                  </div>

                  <p>JavaScript</p>
                </li>
                <li
                  onClick={() => {
                    handleClick(3, reactcourseprogress());
                  }}
                >
                  <div className="image">
                    <img src={react} alt="" />
                  </div>
                  <div className="line">
                    {linecolor == 3 ? (
                      <i className="fas fa-check-circle"></i>
                    ) : (
                      <i className="fas fa-times-circle"></i>
                    )}{" "}
                  </div>

                  <p>React Js</p>
                </li>
                <li
                  onClick={() => {
                    handleClick(4, frontendprojectsreactprogress());
                  }}
                >
                  <div className="image">
                    <img src={project1} alt="" />
                  </div>
                  <div className="line">
                    {linecolor == 4 ? (
                      <i className="fas fa-check-circle"></i>
                    ) : (
                      <i className="fas fa-times-circle"></i>
                    )}{" "}
                  </div>

                  <p>Frontend projects</p>
                </li>
                <li
                  onClick={() => {
                    handleClick(5, nodecourseprogress());
                  }}
                >
                  <div className="image">
                    <img src={node} alt="" />
                  </div>
                  <div className="line">
                    {linecolor == 5 ? (
                      <i className="fas fa-check-circle"></i>
                    ) : (
                      <i className="fas fa-times-circle"></i>
                    )}{" "}
                  </div>
                  <p>Node js</p>
                </li>
                <li
                  onClick={() => {
                    handleClick(6, expresscourseprogress());
                  }}
                >
                  <div className="image">
                    <img src={express} alt="" />
                  </div>
                  <div className="line">
                    {linecolor == 6 ? (
                      <i className="fas fa-check-circle"></i>
                    ) : (
                      <i className="fas fa-times-circle"></i>
                    )}{" "}
                  </div>
                  <p>Express</p>
                </li>
                <li
                  onClick={() => {
                    handleClick(7, mongocourseprogress());
                  }}
                >
                  <div className="image">
                    <img src={mongo} alt="" />
                  </div>
                  <div className="line">
                    {linecolor == 7 ? (
                      <i className="fas fa-check-circle"></i>
                    ) : (
                      <i className="fas fa-times-circle"></i>
                    )}{" "}
                  </div>

                  <p>MongoDB</p>
                </li>
                <li
                  onClick={() => {
                    handleClick(8, backendprojectsprogress());
                  }}
                >
                  <div className="image">
                    <img src={project1} alt="" />
                  </div>
                  <div className="line">
                    {linecolor == 8 ? (
                      <i className="fas fa-check-circle"></i>
                    ) : (
                      <i className="fas fa-times-circle"></i>
                    )}{" "}
                  </div>

                  <p>Backend projects</p>
                </li>
                <li
                  onClick={() => {
                    handleClick(9, mernfullstackprojectsprogress());
                  }}
                >
                  <div className="image">
                    <img src={mern} alt="" />
                  </div>
                  <div className="line">
                    {linecolor == 9 ? (
                      <i className="fas fa-check-circle"></i>
                    ) : (
                      <i className="fas fa-times-circle"></i>
                    )}{" "}
                  </div>

                  <p>MERN projects</p>
                </li>
                <li>
                  <div className="image">
                    <img src={finish1} alt="" />
                  </div>

                  <p>FULL STACK WEB DEV</p>
                </li>{" "}
              </ul>
            </div>
          ) : course === "mean" ? (
            <div className="container-progress">
              <ul className="items">
                <li onClick={() => handleClick(1, htmlcourseprogress())}>
                  <div className="image">
                    <img src={htmlandcss} alt="" />
                  </div>
                  <div className="line">
                    {linecolor == 1 ? (
                      <i className="fas fa-check-circle"></i>
                    ) : (
                      <i className="fas fa-times-circle"></i>
                    )}
                  </div>
                  <p>HTML & CSS</p>
                </li>
                <li
                  onClick={() => {
                    handleClick(2, javascriptcourseprogress());
                  }}
                >
                  <div className="image">
                    <img src={js} alt="" />
                  </div>
                  <div className="line">
                    {linecolor == 2 ? (
                      <i className="fas fa-check-circle"></i>
                    ) : (
                      <i className="fas fa-times-circle"></i>
                    )}
                  </div>

                  <p>JavaScript</p>
                </li>
                <li
                  onClick={() => {
                    handleClick(3, angularcourseprogress());
                  }}
                >
                  <div className="image">
                    <img src={angular} alt="" />
                  </div>
                  <div className="line">
                    {linecolor == 3 ? (
                      <i className="fas fa-check-circle"></i>
                    ) : (
                      <i className="fas fa-times-circle"></i>
                    )}
                  </div>

                  <p>AngularJS</p>
                </li>
                <li
                  onClick={() => {
                    handleClick(4, frontendprojectsangularprogress());
                  }}
                >
                  <div className="image">
                    <img src={project1} alt="" />
                  </div>
                  <div className="line">
                    {linecolor == 4 ? (
                      <i className="fas fa-check-circle"></i>
                    ) : (
                      <i className="fas fa-times-circle"></i>
                    )}
                  </div>

                  <p>Frontend projects</p>
                </li>
                <li
                  onClick={() => {
                    handleClick(5, nodecourseprogress());
                  }}
                >
                  <div className="image">
                    <img src={node} alt="" />
                  </div>
                  <div className="line">
                    {linecolor == 5 ? (
                      <i className="fas fa-check-circle"></i>
                    ) : (
                      <i className="fas fa-times-circle"></i>
                    )}
                  </div>
                  <p>Node js</p>
                </li>
                <li
                  onClick={() => {
                    handleClick(6, expresscourseprogress());
                  }}
                >
                  <div className="image">
                    <img src={express} alt="" />
                  </div>
                  <div className="line">
                    {linecolor == 6 ? (
                      <i className="fas fa-check-circle"></i>
                    ) : (
                      <i className="fas fa-times-circle"></i>
                    )}
                  </div>
                  <p>Express</p>
                </li>
                <li
                  onClick={() => {
                    handleClick(7, mongocourseprogress());
                  }}
                >
                  <div className="image">
                    <img src={mongo} alt="" />
                  </div>
                  <div className="line">
                    {linecolor == 7 ? (
                      <i className="fas fa-check-circle"></i>
                    ) : (
                      <i className="fas fa-times-circle"></i>
                    )}
                  </div>

                  <p>MongoDB</p>
                </li>
                <li
                  onClick={() => {
                    handleClick(8, backendprojectsprogress());
                  }}
                >
                  <div className="image">
                    <img src={project1} alt="" />
                  </div>
                  <div className="line">
                    {linecolor == 8 ? (
                      <i className="fas fa-check-circle"></i>
                    ) : (
                      <i className="fas fa-times-circle"></i>
                    )}
                  </div>

                  <p>Backend projects</p>
                </li>
                <li
                  onClick={() => {
                    handleClick(9, meanfullstackprojectsprogress());
                  }}
                >
                  <div className="image">
                    <img src={mean} alt="" />
                  </div>
                  <div className="line">
                    {linecolor == 9 ? (
                      <i className="fas fa-check-circle"></i>
                    ) : (
                      <i className="fas fa-times-circle"></i>
                    )}
                  </div>

                  <p>MEAN projects</p>
                </li>
                <li>
                  <div className="image">
                    <img src={finish1} alt="" />
                  </div>

                  <p>FULL STACK WEB DEV</p>
                </li>{" "}
              </ul>
            </div>
          ) : course === "mevn" ? (
            <div className="container-progress">
              <ul className="items">
                <li onClick={() => handleClick(1, htmlcourseprogress())}>
                  <div className="image">
                    <img src={htmlandcss} alt="" />
                  </div>
                  <div className="line">
                    {linecolor == 1 ? (
                      <i className="fas fa-check-circle"></i>
                    ) : (
                      <i className="fas fa-times-circle"></i>
                    )}
                  </div>
                  <p>HTML & CSS</p>
                </li>
                <li
                  onClick={() => {
                    handleClick(2, javascriptcourseprogress());
                  }}
                >
                  <div className="image">
                    <img src={js} alt="" />
                  </div>
                  <div className="line">
                    {linecolor == 2 ? (
                      <i className="fas fa-check-circle"></i>
                    ) : (
                      <i className="fas fa-times-circle"></i>
                    )}
                  </div>

                  <p>JavaScript</p>
                </li>
                <li
                  onClick={() => {
                    handleClick(3, vuecourseprogress());
                  }}
                >
                  <div className="image">
                    <img src={vue} alt="" />
                  </div>
                  <div className="line">
                    {linecolor == 3 ? (
                      <i className="fas fa-check-circle"></i>
                    ) : (
                      <i className="fas fa-times-circle"></i>
                    )}
                  </div>

                  <p>Vue Js</p>
                </li>
                <li
                  onClick={() => {
                    handleClick(4, frontendprojectsvueprogress());
                  }}
                >
                  <div className="image">
                    <img src={project1} alt="" />
                  </div>
                  <div className="line">
                    {linecolor == 4 ? (
                      <i className="fas fa-check-circle"></i>
                    ) : (
                      <i className="fas fa-times-circle"></i>
                    )}
                  </div>

                  <p>Frontend projects</p>
                </li>
                <li
                  onClick={() => {
                    handleClick(5, nodecourseprogress());
                  }}
                >
                  <div className="image">
                    <img src={node} alt="" />
                  </div>
                  <div className="line">
                    {linecolor == 5 ? (
                      <i className="fas fa-check-circle"></i>
                    ) : (
                      <i className="fas fa-times-circle"></i>
                    )}
                  </div>
                  <p>Node js</p>
                </li>
                <li
                  onClick={() => {
                    handleClick(6, expresscourseprogress());
                  }}
                >
                  <div className="image">
                    <img src={express} alt="" />
                  </div>
                  <div className="line">
                    {linecolor == 6 ? (
                      <i className="fas fa-check-circle"></i>
                    ) : (
                      <i className="fas fa-times-circle"></i>
                    )}
                  </div>
                  <p>Express</p>
                </li>
                <li
                  onClick={() => {
                    handleClick(7, mongocourseprogress());
                  }}
                >
                  <div className="image">
                    <img src={mongo} alt="" />
                  </div>
                  <div className="line">
                    {linecolor == 7 ? (
                      <i className="fas fa-check-circle"></i>
                    ) : (
                      <i className="fas fa-times-circle"></i>
                    )}
                  </div>

                  <p>MongoDB</p>
                </li>
                <li
                  onClick={() => {
                    handleClick(8, backendprojectsprogress());
                  }}
                >
                  <div className="image">
                    <img src={project1} alt="" />
                  </div>
                  <div className="line">
                    {linecolor == 8 ? (
                      <i className="fas fa-check-circle"></i>
                    ) : (
                      <i className="fas fa-times-circle"></i>
                    )}
                  </div>

                  <p>Backend projects</p>
                </li>
                <li
                  onClick={() => {
                    handleClick(9, mevnfullstackprojectsprogress());
                  }}
                >
                  <div className="image">
                    <img src={mevn} alt="" />
                  </div>
                  <div className="line">
                    {linecolor == 9 ? (
                      <i className="fas fa-check-circle"></i>
                    ) : (
                      <i className="fas fa-times-circle"></i>
                    )}
                  </div>

                  <p>MEVN projects</p>
                </li>
                <li>
                  <div className="image">
                    <img src={finish1} alt="" />
                  </div>

                  <p>FULL STACK WEB DEV</p>
                </li>{" "}
              </ul>
            </div>
          ) : course === "reactfront" ? (
            <div className="container-progress">
              <ul className="items">
                <li
                  onClick={() => {
                    handleClick(1, htmlcourseprogress());
                  }}
                >
                  <div className="image">
                    <img src={htmlandcss} alt="" />
                  </div>
                  <div className="line">
                    {linecolor == 1 ? (
                      <i className="fas fa-check-circle"></i>
                    ) : (
                      <i className="fas fa-times-circle"></i>
                    )}
                  </div>
                  <p>HTML & CSS</p>
                </li>
                <li
                  onClick={() => {
                    handleClick(2, javascriptcourseprogress());
                  }}
                >
                  <div className="image">
                    <img src={js} alt="" />
                  </div>
                  <div className="line">
                    {linecolor == 2 ? (
                      <i className="fas fa-check-circle"></i>
                    ) : (
                      <i className="fas fa-times-circle"></i>
                    )}{" "}
                  </div>

                  <p>JavaScript</p>
                </li>
                <li
                  onClick={() => {
                    handleClick(3, reactcourseprogress());
                  }}
                >
                  <div className="image">
                    <img src={react} alt="" />
                  </div>
                  <div className="line">
                    {linecolor == 3 ? (
                      <i className="fas fa-check-circle"></i>
                    ) : (
                      <i className="fas fa-times-circle"></i>
                    )}{" "}
                  </div>

                  <p>React Js</p>
                </li>
                <li
                  onClick={() => {
                    handleClick(4, frontendprojectsreactprogress());
                  }}
                >
                  <div className="image">
                    <img src={project1} alt="" />
                  </div>
                  <div className="line">
                    {linecolor == 4 ? (
                      <i className="fas fa-check-circle"></i>
                    ) : (
                      <i className="fas fa-times-circle"></i>
                    )}{" "}
                  </div>
                  <p>Frontend projects</p>
                </li>
                <li>
                  <div className="image">
                    <img src={finish1} alt="" />
                  </div>

                  <p>FRONT END WEB DEV</p>
                </li>{" "}
              </ul>
            </div>
          ) : course === "nodejsback" ? (
            <div className="container-progress">
              <ul className="items">
                <li
                  onClick={() => {
                    handleClick(5, nodecourseprogress());
                  }}
                >
                  <div className="image">
                    <img src={node} alt="" />
                  </div>
                  <div className="line">
                    {linecolor == 5 ? (
                      <i className="fas fa-check-circle"></i>
                    ) : (
                      <i className="fas fa-times-circle"></i>
                    )}
                  </div>
                  <p>Node js</p>
                </li>
                <li
                  onClick={() => {
                    handleClick(6, expresscourseprogress());
                  }}
                >
                  <div className="image">
                    <img src={express} alt="" />
                  </div>
                  <div className="line">
                    {linecolor == 6 ? (
                      <i className="fas fa-check-circle"></i>
                    ) : (
                      <i className="fas fa-times-circle"></i>
                    )}
                  </div>
                  <p>Express</p>
                </li>
                <li
                  onClick={() => {
                    handleClick(7, mongocourseprogress());
                  }}
                >
                  <div className="image">
                    <img src={mongo} alt="" />
                  </div>
                  <div className="line">
                    {linecolor == 7 ? (
                      <i className="fas fa-check-circle"></i>
                    ) : (
                      <i className="fas fa-times-circle"></i>
                    )}
                  </div>

                  <p>MongoDB</p>
                </li>
                <li
                  onClick={() => {
                    handleClick(8, backendprojectsprogress());
                  }}
                >
                  <div className="image">
                    <img src={project1} alt="" />
                  </div>
                  <div className="line">
                    {linecolor == 8 ? (
                      <i className="fas fa-check-circle"></i>
                    ) : (
                      <i className="fas fa-times-circle"></i>
                    )}
                  </div>

                  <p>Backend projects</p>
                </li>
                <li>
                  <div className="image">
                    <img src={finish1} alt="" />
                  </div>

                  <p>Back END WEB DEV</p>
                </li>{" "}
              </ul>
            </div>
          ) : (
            <></>
          )}
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};

export default Progressbar;
