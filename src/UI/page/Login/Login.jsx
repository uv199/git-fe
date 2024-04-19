import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

import { loginUser } from "../../api/service/user";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let [{ token }, setCookie] = useCookies([""]);

  const navigate = useNavigate();

  const loginHandler = async (formData) => {
    const { error, data } = await loginUser(formData);
    if (error) toast.error(error.message);
    else {
      toast.success("Login successfully");
      setCookie("user", data?.data?.data);
      setCookie("token", data?.data?.token);
      setCookie("staredRepo", data?.data?.staredRepo);
      navigate(-1);
    }
  };

  return (
    <div className="flex flex-col py-9 justify-center">
      <h1 className="text-center pb-10 font-medium text-3xl">
        ALREADY REGISTERED?
      </h1>
      <div className="flex px-24 justify-center">
        <div className="border px-5 py-9 ml-2 rounded-md">
          <form className="w-[30vw]" onSubmit={handleSubmit(loginHandler)}>
            <h3>LOGIN</h3>
            <p className="text-slate-400 my-3 text-sm	">
              If you have an account with us, please log in.
            </p>
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
                  required: "Email is Require*",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Email is invalid",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors?.email?.message}</p>
              )}
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                PASSWORD *
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-100 border-none text-gray-900 text-sm rounded-lg focus:ring-gray-600  block w-full p-2.5 "
                placeholder="Enter Password"
                {...register("password", {
                  required: "Password is Require*",
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors?.password?.message}
                </p>
              )}
            </div>
            <p>
              Create Account
              <span
                onClick={() => navigate("/register")}
                className="text-red-600 ml-2 cursor-pointer hover:text-gray-800"
              >
                SignUp ?
              </span>
            </p>
            <button className="w-full mt-6 text-sm transition-colors duration-500 rounded-md  !border-gray-600	bg-white text-gray-600 hover:text-white hover:bg-gray-600 border-2 py-2 px-12  me-3">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
