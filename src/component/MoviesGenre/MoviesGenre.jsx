import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import action from "../../assets/images/action.png";
import drama from "../../assets/images/drama.png";
import romance from "../../assets/images/romance.png";
import thriller from "../../assets/images/thriller.png";
import western from "../../assets/images/western.png";
import horror from "../../assets/images/horror.png";
import fantasy from "../../assets/images/fantasy.png";
import music from "../../assets/images/music.png";
import fiction from "../../assets/images/fiction.png";
import styles from "./MoviesGenre.module.css";
import BlockCard from "../BlockCard/BlockCard";

const DEFAULT_GENRE = [
  {
    id: "Action",
    color: "#FF5209",
    image: (
      <img
        style={{ width: "160px", height: "120px" }}
        src={action}
        alt="Action genre"
      />
    ),
  },
  {
    id: "Drama",
    color: "#D7A4FF",
    image: (
      <img
        style={{ width: "160px", height: "120px" }}
        src={drama}
        alt="Drama genre"
      />
    ),
  },
  {
    id: "Romance",
    color: "#11B800",
    image: (
      <img style={{ width: "160px", height: "120px" }} src={romance} alt="" />
    ),
  },
  {
    id: "Thriller",
    color: "#84C2FF",
    image: (
      <img style={{ width: "160px", height: "120px" }} src={thriller} alt="" />
    ),
  },
  {
    id: "Western",
    color: "#912500",
    image: (
      <img style={{ width: "160px", height: "120px" }} src={western} alt="" />
    ),
  },
  {
    id: "Horror",
    color: "#7358FF",
    image: (
      <img style={{ width: "160px", height: "120px" }} src={horror} alt="" />
    ),
  },
  {
    id: "Fantasy",
    color: " #FF4ADE",
    image: (
      <img style={{ width: "160px", height: "120px" }} src={fantasy} alt="" />
    ),
  },
  {
    id: "Music",
    color: "#E61E32",
    image: (
      <img style={{ width: "160px", height: "120px" }} src={music} alt="" />
    ),
  },
  {
    id: "Fiction",
    color: "#6CD061",
    image: (
      <img style={{ width: "160px", height: "120px" }} src={fiction} alt="" />
    ),
  },
];
export default function GenrePage() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [lengthError, setLengthError] = useState(false);

  // useEffect(() => {
  //     console.log("categories", categories);
  // }, [categories]);

  const removeCategory = (value) => {
    const newCategoryList = categories.filter((category) => category !== value);
    setCategories(newCategoryList);
  };
  const handleSubmit = () => {
    if (categories.length < 3) {
      setLengthError(true);
      return;
    }
    localStorage.setItem("genre", categories);
    navigate("/");
  };

  return (
    <div className={styles.body}>
      <div className={styles.left}>
        <p className={styles.heading}>Super app</p>
        <p className={styles.subHeading}>Choose your entertainment category</p>
        <div>
          {categories.map((category) => (
            <div key={category} className={styles.selectedGenre}>
              <p>{category}</p>
              <span onClick={() => removeCategory(category)}>X</span>
            </div>
          ))}
          {lengthError ? (
            <p className={styles.error}>Please choose at least 3</p>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className={styles.right}>
        {DEFAULT_GENRE.map((genre, idx) => (
          <BlockCard
            genreDetails={genre}
            idx={idx}
            key={genre.id}
            setCategories={setCategories}
            categoriesList={categories}
            // removeCategory={removeCategory}
          />
        ))}
      </div>
      <button className={styles.nextBtn} onClick={handleSubmit}>
        Next Page
      </button>
    </div>
  );
}
