import React from "react";
import styles from "./Button.module.css"
export default function Button(props) {
    console.log(props);
    return (
        <button className={styles.signupButton} type="submit" onClick={(e) => props.onClick(e)}>
            SIGN UP
        </button>
    );
}
