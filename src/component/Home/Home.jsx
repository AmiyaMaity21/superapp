import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProfileCard from "../ProfileCard/ProfileCard";
import Notes from "../Notes/Notes";
import News from "../News/News";
import Weather from "../Weather/Weather";
import Timer from "../Timer/Timer";
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();
  const userDetails = localStorage.getItem("userData");
  useEffect(() => {
    if (!userDetails) {
      navigate("/register");
    }
  },[userDetails,navigate]);

  const navigateToMovies = () => {
    navigate("/movies");
  };

  return (
    <div className={styles.homeContainer}>
      <div>
        <div>
          <ProfileCard />
          <Weather />
          <Timer />
        </div>
        <div>
          <Notes />
        </div>
        <div>
          <News />
        </div>
      </div>
      <button className={styles.browseBtn} onClick={navigateToMovies}>Browse</button>
    </div>
  );
};
export default Home;
