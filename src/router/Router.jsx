// -------------- Packages ---------------
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// -------------- Files ---------------
import Header from "@component/Header/Header";
import FooterCom from "@component/Footer/Footer";
import Home from "@page/Home/Home";
import Login from "@page/Login/Login";
import SignUp from "@page/SignUp/SignUp";
import Profile from "@page/Profile/Profile";
import Error404 from "@page/Error404/Error404";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={SignUp} />
          <Route path="/profile" Component={Profile} />
          <Route path="*" Component={Error404} />
        </Routes>
        <FooterCom />
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}
