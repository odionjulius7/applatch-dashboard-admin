// import "./App.css";
import Footer from "./Components/Footer";
import SidebarNav from "./Components/SidebarNav";
import Dashboard from "./Pages/Dashboard";
import SingleUser from "./Pages/SingleUser";

import Users from "./Pages/Users";
import Virality from "./Pages/Virality";
import SignUp from "./Pages/SignUP/SignUp";
import Login from "./Pages/Login/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* <SignUp />
      <Login /> */}
      <div className="main-wrapper">
        <SidebarNav />
        <div className="page-wrapper">
          <div className="page-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/virality" element={<Virality />} />
              <Route
                path="/users/singleUser/:userId"
                element={<SingleUser />}
              />
              <Route path="/users" element={<Users />} />
              <Route
                path="*"
                element={
                  <main style={{ padding: "20rem", fontSize: "3rem" }}>
                    <p>There's nothing here!</p>
                  </main>
                }
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
