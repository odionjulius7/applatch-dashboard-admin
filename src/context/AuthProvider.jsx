import { createContext, useEffect, useState } from "react";

import axios from "../API/axios";
const USERS_URL = "/users";
const NEW_USERS_URL = "/users/stats";
const MONTHLY_USERS_URL = "/users/month";

const AuthContext = createContext({});

// const USERS_URL = "/users";

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [newUsers, setNewUsers] = useState([]);
  const [topReferrals, setTopReferrals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [dataMain, setDataMain] = useState([]);
  const [users, setUsers] = useState([]);
  const [usersPage, setUsersPage] = useState(1);
  const [topReferralsPage, setTopReferralsPage] = useState(1);

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${USERS_URL}?page=${usersPage}`, {
        // headers: { "x-access-token": localStorage.getItem("token") },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("data"))}`,
        },
      });
      const { data } = response?.data;
      setUsers(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err.response);
    }
  };

  const fetchNewUsers = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${NEW_USERS_URL}?page=${topReferralsPage}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("data"))}`,
          },
        }
      );
      const { data } = response?.data;
      setNewUsers(data.newUsers);
      setTopReferrals(data.topReferrals);
      setIsLoading(false);
      // console.log(topReferrals);
    } catch (err) {
      console.log(err.response);
    }
  };

  const fetchUsersMonthly = async () => {
    try {
      const response = await axios.get(MONTHLY_USERS_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("data"))}`,
        },
      });
      // console.log(response.data);
      const { data } = response?.data;
      const data1 = Object.entries(data).map((item) => {
        // object.entries returns arrays of array, so at each item position you return the index u want
        return {
          name: item[0].slice(0, 3),
          amt: item[1],
        };
      });

      setDataMain(data1);
    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [usersPage]);

  useEffect(() => {
    fetchNewUsers();
  }, [topReferralsPage]);
  useEffect(() => {
    fetchUsersMonthly();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        topReferrals,
        isLoading,
        newUsers,
        dataMain,
        users,
        setUsersPage,
        usersPage,
        topReferralsPage,
        setTopReferralsPage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
