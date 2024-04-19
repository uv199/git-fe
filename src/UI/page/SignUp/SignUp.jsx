import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

import { loginUser, registerUser } from "../../api/service/user";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  let [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let [cookie, setCookie] = useCookies([]);

  const navigate = useNavigate();

  const registerHandler = async (formData) => {
    if (formData.password !== formData.conPassword)
      return toast.error("Confirm password does not match");
    const { error, data } = await registerUser(formData);
    if (error) toast.error(error.message);
    else {
      toast.success("Register successfully");
      setCookie("user", data?.data?.data);
      setCookie("token", data?.data?.staredRepo);
      setCookie("staredRepo", data?.data?.staredRepo);
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col py-9 justify-center">
      <h1 className="text-center pb-10 font-medium text-3xl">NEW REGISTER ?</h1>
      <div className="flex px-24 justify-center">
        <div className="border px-5 py-9 ml-2 rounded-md">
          <form className="w-[30vw]" onSubmit={handleSubmit(registerHandler)}>
            <h3>REGISTER</h3>
            <p className="text-slate-400 my-3 text-sm	">
              If you have an account with us, please log in.
            </p>
            <div className="mb-5">
              <label
                htmlFor="firstName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                FIRST NAME *
              </label>
              <input
                type="text"
                id="fistName"
                className="bg-gray-100 border-none text-gray-900 text-sm rounded-lg focus:ring-gray-600  block w-full p-2.5 "
                placeholder="enter fisrt name"
                {...register("firstName", {
                  required: "first name is require*",
                })}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">
                  {errors?.firstName?.message}
                </p>
              )}
            </div>
            <div className="mb-5">
              <label
                htmlFor="lastName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                LAST NAME *
              </label>
              <input
                type="text"
                id="lastName"
                className="bg-gray-100 border-none text-gray-900 text-sm rounded-lg focus:ring-gray-600  block w-full p-2.5 "
                placeholder="enter last name"
                {...register("lastName", {
                  required: "fisrt name is require*",
                })}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">
                  {errors?.lastName?.message}
                </p>
              )}
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                E-MAIL *
              </label>
              <input
                type="text"
                id="email"
                className="bg-gray-100 border-none text-gray-900 text-sm rounded-lg focus:ring-gray-600  block w-full p-2.5 "
                placeholder="Enter E-mail"
                {...register("email", {
                  required: "email is require*",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "email is invalid",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors?.email?.message}</p>
              )}
            </div>
            <div className="mb-5">
              <label
                htmlFor="contactNo"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                CONTACT NO *
              </label>
              <input
                type="text"
                id="contactNo"
                className="bg-gray-100 border-none text-gray-900 text-sm rounded-lg focus:ring-gray-600  block w-full p-2.5 "
                placeholder="Enter Contact No "
                {...register("contactNo", {
                  required: "contact no is require*",
                })}
              />
              {errors.contactNo && (
                <p className="text-red-500 text-sm">
                  {errors?.contactNo?.message}
                </p>
              )}
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                PASSWORD *
              </label>
              <div className="flex items-center pr-3 bg-gray-100 text-gray-900 text-sm rounded-lg focus-within:!ring-1 focus-within:!ring-gray-600  w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className=" flex bg-gray-100 border-none text-gray-900 text-sm rounded-lg focus:ring-0 w-full p-2.5 "
                  placeholder="Enter Password"
                  {...register("password", {
                    required: "password is require*",
                  })}
                />

                {showPassword ? (
                  <Eye
                    className="text-gray-400 cursor-pointer"
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <EyeOff
                    className="text-gray-400 cursor-pointer"
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors?.password?.message}
                </p>
              )}
            </div>
            <div className="mb-5">
              <label
                htmlFor="con-password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                CONFIRM - PASSWORD *
              </label>
              <input
                type="password"
                id="con-password"
                className="bg-gray-100 border-none text-gray-900 text-sm rounded-lg focus:ring-gray-600  block w-full p-2.5 "
                placeholder="Enter confirm password"
                {...register("conPassword", {
                  required: "confirm password is require*",
                })}
              />
              {errors.conPassword && (
                <p className="text-red-500 text-sm">
                  {errors?.conPassword?.message}
                </p>
              )}
            </div>
            <p className="text-sm">
              Already have Account
              <span
                onClick={() => navigate("/login")}
                className="text-red-600 ml-2 cursor-pointer hover:text-gray-800"
              >
                Login ?
              </span>
            </p>
            <button className="w-full mt-6 text-sm transition-colors duration-500 rounded-md  !border-gray-600	bg-white text-gray-600 hover:text-white hover:bg-gray-600 border-2 py-2 px-12  me-3">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
