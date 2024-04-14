import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getMoviesList } from "../../apis/movies";
import Profile from "../../assets/images/profileSmall.png";
import styles from "./Movies.module.css";
const Movies = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  let genreDetails = localStorage.getItem("genre");
  console.log(genreDetails);

  if (genreDetails) {
    genreDetails = genreDetails.split(",");
  }
  console.log(genreDetails);

  useEffect(() => {
    fetchMoviesListByTitle(genreDetails[1]);
  }, [genreDetails]);

  const fetchMoviesListByTitle = async (title) => {
    const result = await getMoviesList(title);
    const requiredResult = result.slice(0, 6);
    setMovies(requiredResult);
  };

  function handleNavigate() {
    navigate("/");
  }
  return (
    <>
      <div className={styles.moviesContainer}>
        <div onClick={handleNavigate}>
          <img className={styles.avatar} src={Profile} alt="movie cover" />
        </div>
        <p className={styles.header}>Super app</p>
        <h2>Entertainment according to your choice</h2>
        <div>
          <p>Action</p>
          <div className={styles.moviesList}>
            {movies?.map((movie) => (
              <div>
                <img className={styles.movieCard} src={movie?.Poster} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div>
          <p>Thriller</p>
          <div className={styles.moviesList}>
            {movies?.map((movie) => (
              <div>
                <img className={styles.movieCard} src={movie?.Poster} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Movies;
