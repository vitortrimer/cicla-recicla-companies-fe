import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

const AppRoutes = () => {

  useEffect(() => {
    const jwt = localStorage.getItem("user-token")
    const pathname = window.location.pathname

    if(!jwt && (pathname !== "/login" && pathname !== "/cadastro")) {
      window.location.assign("/login")
    }
  }, [])

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
};

export default AppRoutes