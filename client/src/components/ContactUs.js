import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import contactbg from "../assets/images/contactbg4.jpg";
import axios from "axios";
import { apiUrl } from "../data/api";

const Container = styled.div`
  min-height: calc(100vh - 80px);
  overflow: hidden;
  padding: 10px 20px;
  background: url(${contactbg});
  background-size: cover;
  background-position: center;
  position: relative;
  .gradientbg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  }
  .container {
    position: relative;
    color: white;
    z-index: 10;
  }
  .up {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .title {
    font-size: clamp(2rem, 4.8vw, 3rem);
    font-weight: 500;
    margin-bottom: 10px;
  }
  .desc {
    text-align: center;
    width: min(100%, 1100px);
    font-size: clamp(0.75rem, 2vw, 1.3rem);
  }
  .contact {
    display: flex;
    align-items: center;
    padding: 50px 50px;
  }

  .left {
    margin-right: auto;
    min-width: 300px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .addressdetails {
    display: flex;
    margin-bottom: 40px;
  }
  .icon {
    width: clamp(40px, 10vw, 70px);
    height: clamp(40px, 10vw, 70px);
    background: white;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-right: 15px;
  }
  .addresstitle {
    color: #0affff;
    font-size: clamp(0.8rem, 2.2vw, 1.5rem);
    margin-bottom: 5px;
  }
  .addressdetails {
    font-size: clamp(0.75rem, 2vw, 1.4rem);
  }

  .right {
    min-width: 500px;
    background: white;
    color: black;
    padding: 30px;
  }

  .formtitle {
    font-size: 1.5rem;
    font-weight: 500;
  }
  .inputbox {
    position: relative;
    width: 100%;
    margin-top: 10px;
  }
  .inputbox input,
  .inputbox textarea {
    width: 100%;
    border: none;
    border-bottom: 2px solid black;
    outline: none;
    resize: none;
    margin: 10px 0;
    padding: 10px 0;
    font-size: 1.5rem;
  }
  .inputbox span {
    position: absolute;
    left: 0;
    margin: 10px 0;
    padding: 10px 0;
    font-size: 1.5rem;
    pointer-events: none;
    transition: 0.4s ease;
    color: #666;
  }
  .inputbox input:focus ~ span,
  .inputbox input:valid ~ span,
  .inputbox textarea:focus ~ span,
  .inputbox textarea:valid ~ span {
    transform: translateY(-20px);
    font-size: 1rem;
    color: red;
  }
  .inputbox input[type="submit"] {
    padding: 5px;
    border: none;
    color: white;
    background: #00bfff;
    width: 100px;
    cursor: pointer;
    font-size: 1.5rem;
  }
  @media screen and (max-width: 1122px) {
    .contact {
      flex-direction: column;
      padding: 0;
    }
    .left {
      margin: 40px auto 40px 0;
    }

    .addressdetails {
      margin-bottom: 20px;
    }
    .right {
      min-width: 95%;
    }
    .inputbox input,
    .inputbox textarea {
      font-size: 1.2rem;
    }
    .inputbox span {
      font-size: 1.2rem;
    }
    .inputbox input[type="submit"] {
      font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 515px) {
    .left {
      margin: 10px auto 10px 0;
    }
  }
`;

const ContactUs = () => {
  const [userdata, setuserdata] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const myLoginState = useSelector((state) => state.changeTheLogin);

  const CallContactPage = async () => {
    try {
      const res = await axios.get(apiUrl + `/getData/${myLoginState}`, {
        withCredentials: true,
      });

      const data = await res.data;
      console.log(data);
      setuserdata({
        ...userdata,
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      });
      if (res.status !== 200) {
        throw new Error(res.error);
      }
    } catch (e) {
      console.log(e);
    }
  };
  console.log(userdata);

  useEffect(() => {
    CallContactPage();
  }, []);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setuserdata({ ...userdata, [name]: value });
  };

  const contactForm = async (e) => {
    e.preventDefault();

    const { name, email, phone, message } = userdata;

    const res = await axios.post(
      apiUrl + `/contact/${myLoginState}`,
      {
        body: {
          name,
          email,
          phone,
          message,
        },
      },
      { withCredentials: true }
    );
    const data = await res.data;

    if (!data) {
      console.log("message not send");
    } else {
      alert("message send");
      //after sending message ,the message field will be empty
      setuserdata({ ...userdata, message: "" });
    }
  };

  return (
    <Container>
      <div className="gradientbg"></div>
      <div className="container">
        <div className="up">
          <div className="title">Contact Us</div>
          <div className="desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            nam cum sint, doloribus quam doloremque, similique quod unde dolor,
            aliquam mollitia laboriosam animi reprehenderit sapiente.
          </div>
          <div className="desc"> </div>
        </div>
        <div className="contact">
          <div className="left">
            <div className="addressdetails">
              <div className="icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div className="address">
                <div className="addresstitle">Address</div>
                <p className="addressdetails">
                  4671 Sugar Camp Road,
                  <br />
                  Owatana ,Minnesota,
                  <br />
                  55060
                </p>
              </div>
            </div>
            <div className="addressdetails">
              <div className="icon">
                <i class="fas fa-phone-alt"></i>
              </div>
              <div className="address">
                <div className="addresstitle">Phone</div>
                <p className="addressdetails">{userdata.phone}</p>
              </div>
            </div>
            <div className="addressdetails">
              <div className="icon">
                <i class="far fa-envelope"></i>
              </div>
              <div className="address">
                <div className="addresstitle">Email</div>
                <p className="addressdetails">wrub7d78i0e@temporary-mail.net</p>
              </div>
            </div>
          </div>
          <div className="right">
            <form method="POST">
              <div className="formtitle">Send Message</div>
              <div className="inputbox">
                <input
                  type="text"
                  onChange={handleInput}
                  name="name"
                  value={userdata.name}
                  required="required"
                />
                <span>Full Name</span>
              </div>
              <div className="inputbox">
                <input
                  type="text"
                  onChange={handleInput}
                  name="email"
                  value={userdata.email}
                  required="required"
                />
                <span>Email</span>
              </div>
              <div className="inputbox">
                <input
                  type="number"
                  onChange={handleInput}
                  name="phone"
                  value={userdata.phone}
                  required="required"
                />
                <span>Phone</span>
              </div>
              <div className="inputbox">
                <textarea
                  name="message"
                  onChange={handleInput}
                  value={userdata.message}
                  required="required"
                ></textarea>
                <span>Type Your Message...</span>
              </div>
              <div className="inputbox">
                <input onClick={contactForm} type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;
