import React, { useState, useEffect } from "react";
import styles from "./Notes.module.css";

const Notes = () => {
  const [notesData, setNotesData] = useState("");

  const handleSaveNotes = (event) => {
    const { value } = event.target;
    setNotesData(value);
    if (value === "") {
      localStorage.removeItem("notes");
    } else {
      localStorage.setItem("notes", JSON.stringify(value));
    }
  };

  useEffect(() => {
    const notes = localStorage.getItem("notes");
    if (notes) {
      setNotesData(JSON.parse(notes));
    }
  }, []);

  return (
    <div className={styles.notesection}>
      <p>All notes</p>
      <textarea
        value={notesData}
        placeholder="Enter your notes here..."
        onChange={handleSaveNotes}
      />
    </div>
  );
};

export default Notes;
