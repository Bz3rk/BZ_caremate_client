import React, { useState } from "react";

import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import DotLoader from "../components/DotLoader";
import {useForm} from "react-hook-form"


const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false)

  const{register, handleSubmit, formState:{errors}}= useForm()

  const handleSignIn= (data) =>{
    console.log("Form submitted", data)
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 3000);
  }

  return (
    <div className="container">
      
      <div className=" text-4xl text-center font-semibold italic text-primary-300 pb-8">
        Sign In
      </div>
      <div className="max-w-[860px] min-h-[350px] mx-auto shadow-[0px_3px_8px_rgba(0,0,0,0.30)] p-4 ">
        <form onSubmit={handleSubmit(handleSignIn)}
        className="space-y-6">
          <div className="flex flex-col">
            <label
              className="text-lg sm:text-xl text-gray-600 font-semibold"
              htmlFor="firstname"
            >
              Email
            </label>
            <div>
            <div className="flex  items-center">
              <input
                className="form-input"
                type="text"
                name="firstname"
                id="firstname"
                placeholder="abc@gmail.com...."
                {...register("email", {required: "Email is required"})}
              />
              <EnvelopeIcon className="w-6 h-6 text-shadow-lg text-primary-200" />
              
            </div>
            
              {errors.email && <p className="text-red-500 tracking-wider font-semibold italic">{errors.email.message}</p>}
              
            </div>
          </div>
          <div className="flex flex-col">
            <label
              className="text-lg sm:text-xl text-gray-600 font-semibold"
              htmlFor="password"
            >
              Password
            </label>
            <div>
            <div className="flex  items-center">
              <input
                className="form-input"
                type={`${showPassword ? "password" : "text"}`}
                name="password"
                id="password"
                placeholder="****"
                {...register("password", {required: "Password is required"})}
              />
              <LockClosedIcon className="w-6 h-6 text-shadow-lg text-primary-200" />
            </div>
              {errors.password && <p className="text-red-500 tracking-wider font-semibold italic">{errors.password.message}</p>}
            </div>
          </div>
          {isLoading ? <DotLoader/> : <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
        
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className=" text-gray-500"
          >
            {showPassword ? (
              // Eye open
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            ) : (
              // Eye with slash
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.956 9.956 0 012.816-4.419M9.88 9.88a3 3 0 104.24 4.24M6.1 6.1l11.8 11.8"
                />
              </svg>
            )}
          
          </button>
          <p className="text-gray-600 font-semibold">Show password</p>
        </div>
        <div className="text-gray-600 font-semibold">Don't have an account 
          <Link to={ "/register"} className="bg-gray-300 p-[6px] px-2 mx-2 italic rounded-full hover:bg-primary-300 hover:text-white duration-700">Sign up</Link>
        </div>
        </div> }
       
        <center>
          <button type="submit" disabled={isLoading} className={` ${isLoading ? "secondary-button  cursor-not-allowed":"primary-button  "} w-full sm:w-auto my-6 font-semibold `}>
            Sign in
          </button>
        </center>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
