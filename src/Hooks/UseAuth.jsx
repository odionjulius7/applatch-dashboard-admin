import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

// to be able to use context with import useContext all the time
const UseAuth = () => {
  return useContext(AuthContext);
};

export default UseAuth;
