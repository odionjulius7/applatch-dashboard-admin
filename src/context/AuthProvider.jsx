import { createContext, useEffect, useState } from "react";
// import axios from "axios";
import axios from "../API/axios";

const AuthContext = createContext({});

const USERS_URL = "/users";

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [logged, setLogged] = useState(true);
  // const [users, setUsers] = useState([]);

  // const fetchUsers = async () => {
  //   try {
  //     const response = await axios.get(USERS_URL, {
  //       // headers: { "x-access-token": localStorage.getItem("token") },
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${JSON.parse(localStorage.getItem("data"))}`,
  //       },
  //     });
  //     const { data } = response?.data;
  //     setUsers(data);
  //     console.log(data);
  //   } catch (err) {
  //     console.log(err.response);
  //   }
  // };

  // // console.log(users);

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, logged, setLogged }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
