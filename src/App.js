// import "./App.css";
import Footer from "./Components/Footer";
import SidebarNav from "./Components/SidebarNav";
import Dashboard from "./Pages/Dashboard";
import SingleUser from "./Pages/SingleUser";

import Users from "./Pages/Users";
import Virality from "./Pages/Virality";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUP/SignUp";

import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import RequireAuth from "./Components/RequireAuth";
import { TopReferer } from "./Pages/TopReferer";

function App() {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route element={<RequireAuth />}>
            <Route path="/" element={<Dashboard />} />
            {/* <Route path="/allReferer" element={<Virality />} /> */}
            <Route path="/topReferrals" element={<TopReferer />} />
            <Route path="/users" element={<Users />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/:userId" element={<SingleUser />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
