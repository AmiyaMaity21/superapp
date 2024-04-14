import React, { useState, useEffect } from "react";
import styles from "./BlockCard.module.css";

export default function BlockCard(props) {
  const [isSelected, setIsSelected] = useState(false);
  const addValueToCategory = (value) => {
    const existingValue = props.categoriesList.filter(
      (category) => category === value
    );
    if (!existingValue.length) {
      props.setCategories([...props.categoriesList, value]);
    } else {
      // remove from list
      const newCategoryList = props.categoriesList.filter(
        (category) => category !== value
      );
      props.setCategories(newCategoryList);
    }
  };
  useEffect(() => {
    const isExists =
      props.categoriesList.includes(props.genreDetails.id) === true;
    setIsSelected(isExists);
  }, [props.categoriesList, props.genreDetails.id]);

  return (
    <div
      className={styles.cardBody}
      onClick={() => {
        addValueToCategory(props.genreDetails.id);
        setIsSelected(!isSelected);
      }}
      style={{
        background: props.genreDetails["color"],
        border: `${isSelected ? "4px solid green" : "4px solid white"}`,
      }}
    >
      <p>{props.genreDetails.id}</p>
      {props.genreDetails.image}
    </div>
  );
}
