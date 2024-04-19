import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Search, User } from "lucide-react";
import gitLogo from "../../../assets/git.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useSearch } from "../../../contaxt/SearchContaxt";
import { useCookies } from "react-cookie";
import { fetchSearchList } from "../../api/service/git";
import { toast } from "react-toastify";

export default function Header() {
  const [searchOption, setSearchOption] = useState([]);
  const [modal, setModal] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const navigate = useNavigate();

  const { searchValue, setSearchValue, focus } = useSearch();

  let [cookie, setCookie] = useCookies(["token"]);

  useEffect(() => {
    if (focus) inputRef.current.focus();
  }, [focus]);

  const inputRef = useRef(null);

  useEffect(() => {
    const delay = 200;
    let timeoutId = null;
    if (searchValue) {
      timeoutId = setTimeout(async () => {
        let { data, error } = await fetchSearchList(searchValue);
        if (error) return toast(error.message);
        if (data?.data?.length > 0) setSearchOption(data?.data);
        else setSearchOption([]);
      }, delay);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchValue]);

  const selectHandler = (e) => {
    setSearchValue("");
    setSearchOption([]);
    navigate("/user/" + e);
  };

  const inputHandler = (e) => {
    if (e) {
      setSearchValue(e);
    } else {
      setSearchValue("");
      setSearchOption([]);
    }
  };

  const toggle = () => setModal(!modal);
  return (
    <>
      <div
        onClick={() => setSearchOption([])}
        className="pl-5 pr-10 flex items-center justify-between w-100 pt-3 pb-3 font-sans sticky-top top-0 bg-gray-100 shadow-md"
      >
        <div className="pe-5 h-full grid content-center">
          <img
            role="button"
            onClick={() => navigate("/")}
            src={gitLogo}
            className="h-16 w-16"
            alt="Git Logo"
          />
        </div>
        <div className=" flex justify-center w-full relative">
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
              onBlur={(e) => setTimeout(() => setShowDropDown(false), 200)}
              onFocus={(e) => setTimeout(() => setShowDropDown(true), 200)}
              onChange={(e) => inputHandler(e?.target?.value)}
              placeholder="Search your Git account with user name..."
              className="py-1 rounded-md focus:!ring-0 focus:!border-none border-none w-full"
            />
            {showDropDown && (
              <ul className="bg-white border rounded-b-sm px-2  absolute right-[] top-9 w-[57%] z-10 ">
                {searchOption?.map?.((e, i) => {
                  return (
                    <div
                      className="border-b hover:bg-gray-200 cursor-pointer"
                      onClick={() => selectHandler(e)}
                      key={e + i}
                    >
                      <li>{e}</li>
                    </div>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
        {cookie.token ? (
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
