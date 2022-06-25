import { useState } from "react";
import FormInput from "./FormInput";
import "./SignUp.css";
import axios from "../../API/axios";

//
const REGISTER_URL = "/signup";

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
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = values;

    try {
      const response = await axios.post(
        REGISTER_URL,
        { email, password },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("data"))}`,
          },
        }
      );
      console.log(response);
      setErrMsg(response?.data.message);
      // setValues({
      //   email: "",
      //   password: "",
      // });
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
        <p style={{ color: "#7a1a1a", fontSize: "25px" }}>{errMsg}</p>
      </form>
    </div>
  );
};

export default SignUp;
