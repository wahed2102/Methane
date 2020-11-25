import React from "react";
import Profile from "../../Components/Profile";
import Background from "../../images/photo_background.svg";
import Photo from "../../images/wahed.jpg";
import { LandingPage } from "../../Components/LandingPage";
import Footer from "../../Components/Footer";
import { NavBar } from "../../Components/NavBar";
import News from "../../Components/News/News";
import Courses from "../../Courses/Courses";
import { PostButton } from "../../Components/CreatePostButton.jsx/PostButton";
import { Login } from "../../Components/Login";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "1128px",
          margin: "0px auto",
          marginTop: "49px",
        }}
      >
        <div style={{ flexBasis: "200px" }}>
          <Profile
            name="Wahed Ali"
            alt="Wahed Ali"
            image={Photo}
            description="Fellow - Full stack Developer Masai School Full-time"
            background={Background}
            connections={33}
            viewed={16}
          />
          {/* <LandingPage></LandingPage>
      <Footer /> */}
        </div>
        <div style={{ flexBasis: "555px" }}></div>
        <div style={{ flexBasis: "315px" }}>
          <News />
          <Courses />
        </div>
      </div>
    </div>
  );
};

export default Main;