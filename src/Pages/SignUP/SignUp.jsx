import { useState } from "react";
import FormInput from "./FormInput";
import "./SignUp.css";
import axios from "axios";

//
const REGISTER_URL = "https://backend.applatch.com/api/v1/user/admin/signup";

const SignUp = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    // username: "",
    // birthday: "",
    // confirmPassword: "",
  });
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const inputs = [
    // {
    //   id: 1,
    //   name: "username",
    //   type: "text",
    //   placeholder: "Username",
    //   errorMessage:
    //     "Username should be 3-16 characters and shouldn't include any special character!",
    //   label: "Username",
    //   pattern: "^[A-Za-z0-9]{3,16}$",
    //   required: true,
    // },
    {
      // the email is required
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
      label: "Password",
      // the mail is required , pattern is used to validate e.g. here it must have nos, letters, special char and btween 8-20 chararcters
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    // {
    //   id: 5,
    //   name: "confirmPassword",
    //   type: "password",
    //   placeholder: "Confirm Password",
    //   errorMessage: "Passwords don't match!",
    //   label: "Confirm Password",
    //   pattern: values.password, // we pass the password to it and if what we typed doesn't match the value passed the the pattern irs wrong
    //   required: true,
    // },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = values;
    console.log(email, password);

    try {
      const response = await axios.post(
        REGISTER_URL,
        { email, password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      // TODO: remove console.logs before deployment
      console.log(JSON.stringify(response?.data));
      setSuccess(true);
      //clear state and controlled inputs
      setValues({});
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="page-content">
      <form className="signUp" onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
