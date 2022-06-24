import { createContext, useEffect, useState } from "react";
// import axios from "axios";
import axios from "../API/axios";

const AuthContext = createContext({});

const USERS_URL = "/users";

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(USERS_URL, {
        headers: { "x-access-token": localStorage.getItem("token") },
        // headers: {
        //   "Content-Type": "application/json",
        //   Authorization: `Bearer ${auth.accessToken()}`,
        // },
      });
      // setUsers(response.data);
      console.log(response?.data);
    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  const { role } = auth;

  console.log(JSON.stringify(auth.role));

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
