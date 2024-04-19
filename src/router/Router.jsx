// -------------- Packages ---------------
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// -------------- Files ---------------
import Header from "@component/Header/Header";
import FooterCom from "@component/Footer/Footer";
import GitProfilePage from "@page/GitProfilePage/GitProfilePage";
import Login from "@page/Login/Login";
import SignUp from "@page/SignUp/SignUp";
import Profile from "@page/Profile/Profile";
import Error404 from "@page/Error404/Error404";
import Home from "@page/Home/Home";
import { LoginProdtector, ProtectedRoute } from "./AuthRoute";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/user/:userName" Component={GitProfilePage} />
          <Route
            path="/login"
            element={<LoginProdtector Component={<Login />} />}
          />
          <Route
            path="/register"
            element={<LoginProdtector Component={<SignUp />} />}
          />
          <Route
            path="/profile"
            element={<ProtectedRoute Component={<Profile />} />}
          />
          <Route path="*" Component={Error404} />
        </Routes>
        <FooterCom />
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}
