import React from "react";
import Profile from "../../assets/images/profileBig.png";
import styles from "./ProfileCard.module.css";

const ProfileCard = () => {
  let userDetails = localStorage.getItem("userData");
  let genre = localStorage.getItem("genre");
  let formattedGenres;
  if(genre){
    formattedGenres = genre.split(",");
  }
  if (userDetails) {
    userDetails = JSON.parse(userDetails);
  }
  return (
    <div className={styles.profileContainer}>
      <div>
        <img className={styles.avatarIcon} src={Profile} alt="" />
      </div>
      <div className={styles.profileDetails}>
        <p>{userDetails?.name}</p>
        <p>{userDetails?.email}</p>
        <h2>{userDetails?.userName}</h2>
        {formattedGenres ? (
          <div className={styles.genresList}>
            {formattedGenres.map((genre) => (
              <p key={genre}>{genre}</p>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default ProfileCard;
