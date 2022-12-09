import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "./components/Admin/adminLogin";
import UserLogin from "./components/Users/userLogin";

import Home from "./home";
import AdminPortal from "./components/Admin/adminPortal";
import SideBar from "./components/Admin/sideBar";
import UserPortal from "./components/Users/userPortal";

function App() {
  const email = "admin@gmail.com";

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/admin-dashboard/*"
            element={
              <div style={{ display: "flex" }}>
                <AdminPortal />
              </div>
            }
          />
          <Route
            path="/admin_login"
            element={
              <div style={{ display: "flex" }}>
                <AdminLogin />
              </div>
            }
          />
          <Route
            path="/user-login"
            element={
              <div>
                <UserLogin />
              </div>
            }
          />
          <Route
            path="/user-portal/*"
            element={
              <div style={{ display: "flex" }}>
                <UserPortal />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
