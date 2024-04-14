import React, { useState, useEffect } from 'react'
import styles from "./Notes.module.css"

const Notes = () => {
    const [notesData, setNotesData] = useState("")
    const handleSaveNotes = (event) => {
        setNotesData(event.target.value)
        localStorage.setItem("notes", JSON.stringify(notesData))
    }

    useEffect(() => {
        const notes = localStorage.getItem("notes")

        if (notes) {
            setNotesData(JSON.parse(notes))
        }
    }, [])
    return (
        <div className={styles.notesection}>
            <p>All notes</p>
            <textarea value={notesData}onChange={handleSaveNotes}/>
        </div>
    )
}

export default Notes;