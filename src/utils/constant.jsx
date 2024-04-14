// 2nd error logic
    const errors = {};
    if (!formData.name.trim().length) {
      errors.name = "name required";
    }

    if (!formData.userName.trim().length) {
      errors.userName = "userName required";
    }
    if (!formData.email.trim().length) {
      errors.email = "email required";
    }

    if (!formData.mobile.trim().length) {
      errors.mobile = "mobile no required";
    }

    if (!formData.mobile.trim().length) {
      errors.isAgreed = "Agreement field is required";
    }

    setErrors(errors);
    if (!Object.keys(errors).length) {
      localStorage.setItem("userData", JSON.stringify(formData));
      navigate("/genre");
    }
