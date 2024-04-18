import React, { useEffect, useRef, useState } from "react";
import { Search, User } from "lucide-react";
import gitLogo from "../../../assets/git.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useSearch } from "../../../contaxt/SearchContaxt";
import { useCookies } from "react-cookie";

export default function Header() {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  const { searchValue, setSearchValue, focus } = useSearch();

  let [cookie, setCookie] = useCookies([]);
  console.log("🚀 ~ Header ~ cookie:", cookie.user)

  const inputRef = useRef("");

  useEffect(() => {
    if (focus) inputRef.current.focus();
  }, [focus]);

  const toggle = () => setModal(!modal);
  return (
    <>
      <div className="pl-5 pr-10 flex items-center justify-between w-100 pt-3 pb-3 font-sans sticky-top top-0 bg-gray-100 shadow-md">
        <div className="pe-5 h-full grid content-center">
          <img
            role="button"
            onClick={() => navigate("/")}
            src={gitLogo}
            className="h-16 w-16"
            alt="Git Logo"
          />
        </div>
        <div className="flex focus-within:border-1 bg-white focus-within:border-gray-400 rounded-md overflow-hidden roun w-[57%] border-2 border-gray-300">
          <Search
            strokeWidth={1}
            size={25}
            role="button"
            className=" text-gray-400 mx-2 my-1 "
          />
          <input
            ref={inputRef}
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search your Git account with user name..."
            className="py-1 rounded-md focus:!ring-0 border-none w-full"
          />
        </div>
        {false ? (
          <div className="flex gap-10 items-center justify-center">
            <NavLink
              to={"/profile"}
              className="navigate_class cursor-pointer flex flex-col justify-center items-center mt-1"
            >
              <User onClick={toggle} role="button" strokeWidth={1} />
              <span
                role="button"
                onClick={toggle}
                className="tracking-widest text-[13px] text-decoration-none text-sm text-black"
              >
                Account
              </span>
            </NavLink>
          </div>
        ) : (
          <button
            className="transition-colors duration-500 p-2 px-7 rounded-md border-2 !border-gray-600	bg-white text-gray-600 hover:text-white hover:bg-gray-600"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        )}
      </div>
    </>
  );
}
