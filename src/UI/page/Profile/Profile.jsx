import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../api/service/user";
import { toast } from "react-toastify";

export default function Profile() {
  let [{ user }, setCookie, removeCookie] = useCookies([]);
  const navigate = useNavigate();

  const logoutHandler = async () => {
    const { error, data } = await logoutUser();
    if (error) toast.error(error.message);
    else {
      toast.success("logout successfully");
      removeCookie("user");
      navigate("/");
    }
  };
  return (
    <div className="mx-36 mb-36 mt-10">
      <h1 className="text-center mb-5 text-4xl font-semibold">ACCOUNT</h1>
      <hr />
      <h3 className="font-semibold mt-10  text-xl mb-9">ACCOUNT DETAILS</h3>
      <div>
        <ul className="[&>li>span]:font-semibold">
          <li className=" py-3 border-b-2">
            <span>NAME</span> : {user?.name || "User"}{" "}
          </li>
          <li className="py-3 border-b-2">
            <span>EMAIL</span> : {user?.email}{" "}
          </li>
          <li className="py-3 border-b-2">
            <span>ADDRESS</span> : {user?.address?.[0]?.add}
          </li>
          <li className="py-3 border-b-2">
            <span>COUNTRY</span> : India
          </li>
          <li className="py-3 border-b-2">
            <span>ZIP</span> : {user?.address?.[0]?.pincode}
          </li>
          <li className="py-3 mb-5 border-b-2">
            <span>PHONE</span> : {user?.number}
          </li>
        </ul>
        <button
          className="p-2 px-10 rounded-md border-2 !border-gray-600	bg-white text-gray-600 hover:text-white hover:bg-gray-600"
          onClick={() => logoutHandler()}
        >
          LOGOUT
        </button>
      </div>
    </div>
  );
}
