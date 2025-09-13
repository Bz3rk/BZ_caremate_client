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
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dob: "",
      password: "",
      confirmPassword: "",
    },
  });

  const passwordValue = watch("password");

  //step funtion
  const nextStep = async () => {
    const isValid = await trigger(["firstName", "lastName", "email", "dob"]);

    if (isValid) setFirstStep(false);
  };

  //step function
  const prevStep = () => setFirstStep(true);

  const onSubmit = (data) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSignedUp(true);
      fireConfetti();
    }, 3000);

    console.log("form submitted", data);

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
  };

  return (
    <div className="container">
      <div className=" text-4xl text-center font-semibold italic text-primary-300 pb-8">
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
              firstStep ? "text-gray-600" : "bg-primary-200 text-white"
            } duration-700 text-xl flex justify-center items-center`}
          >
            2
          </div>
        </div>
      </div>
      <div className="max-w-[860px] min-h-[500px] mx-auto shadow-[0px_3px_8px_rgba(0,0,0,0.30)] p-4 ">
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
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
                <div className={` ${firstStep ?"block":"hidden"}`}>
                  {/* Names and Identification section ( step ) */}
                  <div className="flex flex-col ">
                    <label
                      htmlFor="firstName"
                      className="text-lg sm:text-xl text-gray-600 font-semibold "
                    >
                      First name
                    </label>

                    <div className="flex  items-center">
                      <input
                        className="form-input"
                        type="text"
                        id="firstName"
                        placeholder="Input your First name...."
                        {...register("firstName", {
                          required: "First Name is required",
                        })}
                      />
                      <IdentificationIcon className="w-6 h-6 text-shadow-lg text-primary-200" />
                    </div>
                    {errors.firstName && (
                      <p className="text-red-500 tracking-wider font-semibold italic">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label
                      className=" text-lg sm:text-xl text-gray-600 font-semibold"
                      htmlFor="lastName"
                    >
                      Last name
                    </label>
                    <div className="flex items-center">
                      <input
                        className="form-input"
                        type="text"
                        id="lastName"
                        placeholder="Input your Last name...."
                        {...register("lastName", {
                          required: "Last Name is required",
                        })}
                      />
                      <IdentificationIcon className="w-6 h-6 text-primary-200" />
                    </div>
                    {errors.lastName && (
                      <p className="text-red-500 tracking-wider font-semibold italic">
                        {errors.lastName.message}
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
                        type="email"
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
             
                  {/* contact and password verification */}
                  <div className={` ${firstStep ?"hidden":"block"}`}>

                  <div className="flex flex-col">
                    <label
                      className="text-lg sm:text-xl text-gray-600 font-semibold"
                      htmlFor="phone"
                    >
                      Phone Number
                    </label>
                    <div className="flex  items-center">
                      <input
                        className="form-input"
                        type="tel"
                        id="phone"
                        {...register("phone", {
                          required: "Phone number is required",
                        })}
                      />
                      <PhoneIcon className="w-6 h-6 text-shadow-lg text-primary-200" />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 tracking-wider font-semibold italic">
                        {errors.phone.message}
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
                      htmlFor="confirmPassword"
                    >
                      Confirm Password
                    </label>

                    <div className="flex  items-center">
                      <input
                        className="form-input"
                        type={`${showPassword ? "password" : "text"}`}
                        id="confirmPassword"
                        //checks if both the password and confirm password are the same
                        {...register("confirmPassword", {
                          required: "Confirm password is required",
                          validate: (value) =>
                            value === passwordValue || "Passwords do not match",
                        })}
                      />
                      <LockClosedIcon className="w-6 h-6 text-shadow-lg text-primary-200" />
                    </div>
                    {errors.confirmPassword && (
                      <p className="text-red-500 tracking-wider font-semibold italic">
                        {errors.confirmPassword.message}
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
                    <button
                    type="button"
                      onClick={prevStep}
                      className={` ${
                        firstStep
                          ? "bg-primary-300 p-2 px-4 rounded-full text-white"
                          : "p-2 px-4 "
                      } duration-700`}
                    >
                      Previous
                    </button>
                    <button
                    type="button"
                      onClick={nextStep}
                      className={` ${
                        !firstStep
                          ? "bg-primary-300 p-2 px-4 rounded-full text-white"
                          : "p-2 px-4 "
                      } duration-700`}
                    >
                      Next
                    </button>
                  </div>
                )}
                {!firstStep && (
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={` ${
                      isLoading ? "secondary-button" : "primary-button"
                    } w-full sm:w-auto`}
                  >
                    Sign up
                  </button>
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
    </div>
  );
};

export default RegisterPage;
