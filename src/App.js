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
import { CurrentReferer } from "./Pages/CurrentReferer";

//
const USERS_URL = "/users";

function App() {
  return (
    <div className="main-wrapper">
      <SidebarNav />
      <div className="page-wrapper">
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="login" element={<Login />} />
              <Route element={<RequireAuth />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/allReferer" element={<Virality />} />
                <Route path="/currentReferer" element={<CurrentReferer />} />
                <Route path="/users" element={<Users />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/:userId" element={<SingleUser />} />
              </Route>
            </Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
