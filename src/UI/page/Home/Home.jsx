import React, { useEffect, useState } from "react";
import { useSearch } from "../../../contaxt/SearchContaxt";
import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { searchValue, setFocus } = useSearch();
  const [user, setUser] = useState({});

  useEffect(() => {
    const delay = 500;
    let timeoutId = null;
    if (searchValue) {
      timeoutId = setTimeout(() => {
        fetchSearchResults();
      }, delay);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchValue]);

  return (
    <div className="flex  justify-center items-center">
      <div className="flex flex-col">
        <h1>Search Git User By User Name</h1>
        <button
          onClick={() => setFocus(true)}
          className="mt-2 text-sm transition-colors duration-500 rounded-md  !border-gray-600	bg-white text-gray-600 hover:text-white hover:bg-gray-600 border-2 py-2 px-12  me-3"
        >
          Search User
        </button>
      </div>
    </div>
  );
}
