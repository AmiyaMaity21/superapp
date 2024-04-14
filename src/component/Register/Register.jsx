import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import coverImage from "../../assets/images/cover.png";
import Button from "../Button/Button";
import styles from "./Register.module.css";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    userName: "",
    email: "",
    mobile: "",
    isAgreed: false,
  });
  //const [nameErrors, setNameErrors] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    userName: "",
    email: "",
    mobile: "",
    isAgreed: "",
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    let isValid = true;
    event.preventDefault();
    const newErrors = {};

    if (!formData.name.trim().length) {
      isValid = false;
      newErrors.name = "Name field required";
    }
    if (!formData.userName.trim().length) {
      isValid = false;
      newErrors.userName = "Username field required";
    }
    if (!formData.email.trim().length) {
      isValid = false;
      newErrors.email = "Email field required";
    }
    if (!formData.mobile.trim().length) {
      isValid = false;
      newErrors.mobile = "Mobile field required";
    }
    if (!formData.isAgreed) {
      isValid = false;
      newErrors.isAgreed = "Agreement field is required";
    }
    console.log(newErrors);
    setErrors(newErrors);

    if (isValid) {
      localStorage.setItem("userData", JSON.stringify(formData));
      navigate("/genre");
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.bottom}>
          <p>Discover new things on SuperApp</p>
        </div>
        <img src={coverImage} alt="cover of music" />
      </div>
      <div className={styles.body}>
        <p className={styles.super}>Super App</p>
        <p>Create a new Account</p>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={(event) => handleChange(event)}
          ></input>
          {errors.name ? <p className={styles.error}>{errors.name}</p> : <></>}

          <input
            type="text"
            name="userName"
            placeholder="Enter your username"
            onChange={(event) => handleChange(event)}
          ></input>
          {errors.userName ? (
            <p className={styles.error}>{errors.userName}</p>
          ) : (
            <></>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(event) => handleChange(event)}
          ></input>
          {errors.email ? (
            <p className={styles.error}>{errors.email}</p>
          ) : (
            <></>
          )}

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile"
            onChange={(event) => handleChange(event)}
          ></input>
          {errors.mobile ? (
            <p className={styles.error}>{errors.mobile}</p>
          ) : (
            <></>
          )}

          <label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.checked })
              }
              type="checkbox"
              name="isAgreed"
            />
            Share my registration data with Superapp
          </label>
          {errors.isAgreed ? (
            <p className={styles.error}>{errors.isAgreed}</p>
          ) : (
            <></>
          )}

          <Button onClick={handleSubmit} />
          <footer className={styles.footer}>
            <p>
              By clicking on Sign up. you agree to Superapp
              <span style={{ color: "green" }}>
                Terms and Conditions of Use
              </span>
            </p>
            <p>
              To learn more about how Superapp collects, uses, shares and
              protects your personal data please head Superapp
              <span style={{ color: "green" }}> Privacy Policy</span>
            </p>
          </footer>
        </form>
      </div>
    </div>
  );
};
export default Register;
