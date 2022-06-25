import { useState, useContext, useEffect } from "react";
import FormInput from "./FormInput";
import "./Login.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
// import axios from "axios";
import axios from "../../API/axios";
import UseAuth from "../../Hooks/UseAuth";

const LOGIN_URL = "/login";

const Login = () => {
  const { logged, setLogged } = UseAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // getting where users came from || go to '/'
  const from = location.state?.from?.pathname || "/";

  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errMsg, setErrMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const inputs = [
    {
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
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { email, password } = values;

    try {
      const response = await axios.post(LOGIN_URL, { email, password });
      const { data } = response.data;
      localStorage.setItem("data", JSON.stringify(data?.token));
      setValues({
        email: "",
        password: "",
      });
      setIsLoading(true);
      setErrMsg(response?.data.message);
      // navigates to where the user clicked before redirected to home page or the '/'
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
        console.log(errMsg);
      } else {
        setErrMsg("Login Failed");
      }
    }
  };

  return (
    <div className="page-content">
      <form className="signUp" onSubmit={handleSubmit}>
        <h1>Login</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>{isLoading ? "Loading" : "Submit"}</button>
        <p style={{ color: "red" }}>{errMsg}</p>
      </form>
    </div>
  );
};

export default Login;
