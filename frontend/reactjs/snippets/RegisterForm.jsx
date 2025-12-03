import { useEffect, useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({ username: "" });
  const [formError, setFormError] = useState({});
  const [onBlur, setOnBlur] = useState({ username: false });

  useEffect(() => {
    const validationErrors = registerValidate();
    setFormError(validationErrors);
  }, [formData]);

  const registerValidate = () => {
    const errorsObject = {};
    if (!formData.username) {
      errorsObject.username = "Username is required";
    }
    return errorsObject;
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnBlur = (field) => {
    // const validationErrors = registerValidate();
    // setFormError(validationErrors);
    setOnBlur({ ...onBlur, [field]: true });
    console.log(onBlur);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setFormError(registerValidate());

    if (Object.keys(formError).length === 0) {
      console.log(formData);
      // Proceed with form submission logic (e.g., API call)
    } else {
      console.log("Form not valid");
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        //
        onChange={handleOnChange}
        name="username"
        onBlur={() => handleOnBlur("username")}
      />
      {onBlur.username && formError.username && <p>{formError.username}</p>}

      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegisterForm;
