import React, { useEffect } from "react";
import { useSearch } from "../../../contaxt/SearchContaxt";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { focusToggle, setSearchValue } = useSearch();
  let [{ user, token }] = useCookies([""]);
  console.log("🚀 ~ Home ~ user:", user);
  const navigate = useNavigate();

  useEffect(() => {
    setSearchValue("");
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-[64vh]">
      <h1 className="text-3xl uppercase pb-2">
        WelCome TO GitUV <span className="font-bold">{user?.firstName}</span>
      </h1>
      <h1>Search Git User By User Name</h1>
      <div className="flex items-center justify-center">
        <button
          onClick={() => focusToggle()}
          className="mt-4  text-sm transition-colors duration-500 rounded-md  !border-gray-600	bg-white text-gray-600 hover:text-white hover:bg-gray-600 border-2 py-2 px-12 min-w-[70%] me-3"
        >
          Search User
        </button>
        <button
          onClick={() =>
            navigate(!token ? `/login` : `/user/${user?.gitUserName}`)
          }
          className="mt-4  text-sm transition-colors duration-500 rounded-md  !border-gray-600	bg-white text-gray-600 hover:text-white hover:bg-gray-600 border-2 py-2 px-12 min-w-[70%]  me-3"
        >
          View Own Profile
        </button>
      </div>
    </div>
  );
}
