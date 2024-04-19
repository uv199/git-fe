import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center flex-col min-w-[100vw] min-h-[64vh]">
      <h1 className="text-5xl">Page not Found 404</h1>
      <button
        onClick={(e) => navigate(-1)}
        type="submit"
        className="mt-6 flex items-center text-sm transition-colors duration-500 rounded-md  !border-gray-600	bg-white text-gray-600 hover:text-white hover:bg-gray-600 border-2 py-2 pl-8 pr-12 me-3"
      >
        <ArrowLeft className="ml-2  mr-3" />
        <p className="text-xl">Go To Back</p>
      </button>
    </div>
  );
}
