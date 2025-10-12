import React from "react";
import { useState } from "react";
import {
  IdentificationIcon,
  EnvelopeIcon,
  CalendarIcon,
  PhoneIcon,
  LockClosedIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import confetti from "canvas-confetti";
import DotLoader from "../components/DotLoader";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { pageTransitionVariants } from "../utility/animation";
import axios from "axios";
import { BASE_URL } from "../utility/constant";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const [firstStep, setFirstStep] = useState(true);
  const [showPassword, setShowPassword] = useState(true);
  const [signedUp, setSignedUp] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    shouldUnregister: false,
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      dob: "",
      password: "",
      confirm_password: "",
    },
  });

  const passwordValue = watch("password");

  //step funtion
  const nextStep = async () => {
    const isValid = await trigger(["first_name", "last_name", "email", "dob"]);

    if (isValid) setFirstStep(false);
  };

  //step function
  const prevStep = () => setFirstStep(true);

  const handleSignUp = async (credentials, e) => {
    e.preventDefault();
    setIsLoading(true);

    {
      /* confetti animation upon sign up */
    }
    const fireConfetti = () => {
      confetti({
        particleCount: 120,
        startVelocity: 25,
        gravity: 0.5,
        decay: 0.92,
        spread: 100,
        origin: { y: 0.6 },
      });

      setTimeout(() => {
        confetti({
          particleCount: 150,
          startVelocity: 25,
          gravity: 0.5,
          decay: 0.92,
          spread: 120,
          origin: { y: 0.6 },
        });
      }, 400);
    };

    try {
      const response = await axios.post(
        `${BASE_URL}/user-registration/`,
        credentials,
        { headers: { "Content-Type": "application/json" } }
      );
      setSignedUp(true);
      fireConfetti();
    } catch (error) {
      if (error.response) {
        const errorMessage =
          error.response.data.Errors?.email ||
          "Registration failed due to a server error.";
        toast.error(errorMessage);
      } else {
        toast.error("Connection refused: Could not connect to the server.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.section 
    variants={pageTransitionVariants}
    initial = "hidden"
    animate = "visible"
    exit= "exit"
    className="container">
      <div className=" text-4xl text-center font-semibold italic text-primary-300 dark:text-primary-200 py-8">
        Register
      </div>
      {/* Progress slider */}
      <div className=" container flex justify-center items-center w-full pb-4">
        <div className="flex items-center">
          <div className=" w-8 h-8 rounded-full border-2 border-primary-200 text-white bg-primary-200 text-xl flex justify-center items-center">
            1
          </div>
          <div
            className={`w-60 h-[2px] rounded-full ${
              firstStep ? "bg-gray-200" : "bg-primary-200"
            } duration-700 `}
          ></div>
        </div>
        <div>
          <div
            className={`w-8 h-8 rounded-full border-2 border-primary-200 ${
              firstStep ? "text-gray-600 dark:text-gray-300" : "bg-primary-200 text-white"
            } duration-700 text-xl flex justify-center items-center`}
          >
            2
          </div>
        </div>
      </div>
      <div className="max-w-[860px] min-h-[500px] mx-auto shadow-card p-4 dark:bg-gray-100 rounded-lg">
        {signedUp ? (
          <div className="flex flex-col justify-center items-center gap-2 py-16">
            <CheckCircleIcon className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 text-green-700" />
            <div className=" text-3xl sm:text-4xl text-primary-300 font-semibold italic">
              You're all set
            </div>
            <div className=" text-base text-center sm:text-lg text-gray-600 font-semibold">
              Your account has been created successfully, welcome to Caremate!
            </div>
            <div className="py-2 text-base font-semibold text-gray-600 italic">
              Proceed to{" "}
              <Link
                to={"/login"}
                className="bg-gray-300 p-2 px-4 rounded-full hover:bg-primary-300 hover:text-white duration-700"
              >
                login
              </Link>
            </div>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit(handleSignUp)} className="space-y-6">
              <div className={`${firstStep ? "block" : "hidden"}`}>
                {/* Names and Identification section ( step ) */}
                <div className="flex flex-col ">
                  <label
                    htmlFor="first_Name"
                    className="text-lg sm:text-xl text-gray-600 font-semibold "
                  >
                    First name
                  </label>

                  <div className="flex  items-center">
                    <input
                      className="form-input"
                      type="text"
                      id="first_name"
                      placeholder="Input your First name...."
                      {...register("first_name", {
                        required: "First Name is required",
                      })}
                    />
                    <IdentificationIcon className="w-6 h-6 text-shadow-lg text-primary-200" />
                  </div>
                  {errors.first_name && (
                    <p className="text-red-500 tracking-wider font-semibold italic">
                      {errors.first_name.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label
                    className=" text-lg sm:text-xl text-gray-600 font-semibold"
                    htmlFor="last_name"
                  >
                    Last name
                  </label>
                  <div className="flex items-center">
                    <input
                      className="form-input"
                      type="text"
                      id="last_name"
                      placeholder="Input your Last name...."
                      {...register("last_name", {
                        required: "Last Name is required",
                      })}
                    />
                    <IdentificationIcon className="w-6 h-6 text-primary-200" />
                  </div>
                  {errors.last_name && (
                    <p className="text-red-500 tracking-wider font-semibold italic">
                      {errors.last_name.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label
                    className="text-lg sm:text-xl text-gray-600 font-semibold"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <div className="flex  items-center">
                    <input
                      className="form-input"
                      type="text"
                      id="email"
                      placeholder="abc@gmail.com...."
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Email must include @",
                        },
                      })}
                    />
                    <EnvelopeIcon className="w-6 h-6 text-shadow-lg text-primary-200" />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 tracking-wider font-semibold italic">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label
                    className="text-lg sm:text-xl text-gray-600 font-semibold"
                    htmlFor="dob"
                  >
                    Date of Birth
                  </label>
                  <div className="flex  items-center">
                    <input
                      className="form-input"
                      type="date"
                      id="dob"
                      {...register("dob", {
                        required: "Date of Birth is required",
                      })}
                    />
                    <CalendarIcon className="w-6 h-6 text-shadow-lg text-primary-200" />
                  </div>
                  {errors.dob && (
                    <p className="text-red-500 tracking-wider font-semibold italic">
                      {errors.dob.message}
                    </p>
                  )}
                </div>
              </div>

              <div className={`${firstStep ? "hidden" : "block"}`}>
                {/* contact and password verification */}

                <div className="flex flex-col">
                  <label
                    className="text-lg sm:text-xl text-gray-600 font-semibold"
                    htmlFor="phone_number"
                  >
                    Phone Number
                  </label>
                  <div className="flex  items-center">
                    <input
                      className="form-input"
                      type="tel"
                      id="phone_number"
                      {...register("phone_number", {
                        required: "Phone number is required",
                      })}
                    />
                    <PhoneIcon className="w-6 h-6 text-shadow-lg text-primary-200" />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 tracking-wider font-semibold italic">
                      {errors.phone_number.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label
                    className="text-lg sm:text-xl text-gray-600 font-semibold"
                    htmlFor="password"
                  >
                    Prefered Password
                  </label>
                  <div className="flex  items-center">
                    <input
                      className="form-input"
                      type={`${showPassword ? "password" : "text"}`}
                      id="password"
                      //checks is password inlclude both letters and numbers
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters",
                        },
                        validate: {
                          hasNumber: (value) =>
                            /\d/.test(value) ||
                            "Password must include a number",
                          hasLetter: (value) =>
                            /[a-zA-Z]/.test(value) ||
                            "Password must include a letter",
                        },
                      })}
                    />
                    <LockClosedIcon className="w-6 h-6 text-shadow-lg text-primary-200" />
                  </div>
                  {errors.password && (
                    <p className="text-red-500 tracking-wider font-semibold italic">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label
                    className="text-lg sm:text-xl text-gray-600 font-semibold"
                    htmlFor="confirm_password"
                  >
                    Confirm Password
                  </label>

                  <div className="flex  items-center">
                    <input
                      className="form-input"
                      type={`${showPassword ? "password" : "text"}`}
                      id="confirm_password"
                      //checks if both the password and confirm password are the same
                      {...register("confirm_password", {
                        required: "Confirm password is required",
                        validate: (value) =>
                          value === passwordValue || "Passwords do not match",
                      })}
                    />
                    <LockClosedIcon className="w-6 h-6 text-shadow-lg text-primary-200" />
                  </div>
                  {errors.confirm_password && (
                    <p className="text-red-500 tracking-wider font-semibold italic">
                      {errors.confirm_password.message}
                    </p>
                  )}
                </div>
              </div>

              {!firstStep && !isLoading && (
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setShowPassword((prevState) => !prevState)}
                    className=" text-gray-500 p-2 py-4"
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
              )}

              <div className="flex flex-col md:flex-row gap-4 justify-between items-center p-4 pt-8">
                {isLoading ? (
                  <DotLoader />
                ) : (
                  <div className="flex justify-between items-center bg-gray-200 rounded-full text-gray-600">
                    <motion.button
                      type="button"
                      onClick={prevStep}
                      className={` ${
                        firstStep
                          ? "bg-primary-300 p-2 px-4 rounded-full text-white"
                          : "p-2 px-4 "
                      } duration-700`}
                      whileTap={{ scale: 0.95 }}
                    >
                      Previous
                    </motion.button>
                    <motion.button
                      type="button"
                      onClick={nextStep}
                      className={` ${
                        !firstStep
                          ? "bg-primary-300 p-2 px-4 rounded-full text-white"
                          : "p-2 px-4 "
                      } duration-700`}
                      whileTap={{ scale: 0.95 }}
                    >
                      Next
                    </motion.button>
                  </div>
                )}
                {!firstStep && (
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    className={` ${
                      isLoading ? "secondary-button" : "primary-button"
                    } w-full sm:w-auto`}
                    whileTap={!isLoading ? { scale: 0.95, rotate: -1 } : {}}
                  >
                    Sign up
                  </motion.button>
                )}
              </div>
              {firstStep && (
                <div className="text-gray-600 font-semibold text-center">
                  Already have an account{" "}
                  <Link
                    to={"/login"}
                    className="bg-gray-300 p-[6px] px-2 mx-2 rounded-full hover:bg-primary-300 hover:text-white duration-700"
                  >
                    Sign in
                  </Link>
                </div>
              )}
            </form>
          </>
        )}
      </div>
    </motion.section>
  );
};

export default RegisterPage;
