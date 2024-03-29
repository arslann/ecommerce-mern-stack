"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./LoginModal.css";
import { useDispatch, useSelector } from "react-redux";
import { login, register, logout, setCredentials } from "@/app/store/authSlice";
import { useGetUserDetailsQuery } from "@/app/store/authService";

import { BiLogIn, BiLogOut } from "react-icons/bi";

const LoginModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isRegisterFormActive, setIsRegisterFormActive] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false); // New state for fade-in animation

  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const user = useSelector((state) => state.auth.user);

  // Get form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "name":
        setName(value);
        break;
      case "password":
        setPassword(value);
        break;
    }
  };

  // Close form after successful attempt
  useEffect(() => {
    if (!user) return;

    setTimeout(() => {
      window.my_modal_3.close();
    }, 1500); // 1.5 seconds delay
  }, [user]);

  // Make request to backend
  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      if (isRegisterFormActive) {
        dispatch(register({ email, name, password }));
      } else {
        dispatch(login({ email, password }));
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  // toggle form between registration and login
  const handleRegisterClick = () => {
    setIsRegisterFormActive(!isRegisterFormActive);
  };

  // fade-in animation toggle
  const handleAnimation = () => {
    setIsFormVisible(true);

    setTimeout(() => {
      setIsFormVisible(false);
    }, 500);
  };

  // dispatch logout
  const handleSignOut = () => {
    dispatch(logout());
  };

  return (
    <div>
      {user === null ? (
        <button
          className="w-max bg-white border-none text-[#686868] hover:text-black "
          onClick={() => window.my_modal_3.showModal()}
        >
          <BiLogIn size={30} className="sm:hidden mt-2" />
          <span className="hidden sm:block">Sign In</span>
        </button>
      ) : (
        <button
          className="w-max bg-white border-none text-[#686868] hover:text-black"
          onClick={() => handleSignOut()}
        >
          <BiLogOut size={30} className="sm:hidden mt-2" />
          <span className="hidden sm:block">Sign Out</span>
        </button>
      )}

      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className={`modal-box flex flex-col`}>
          <button
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>

          {/* Inner container to use fade-in animation */}
          <div
            className={`flex flex-col gap-3 ${
              isFormVisible ? "animate-fade-in" : "" // Apply fade-in animation class conditionally
            }`}
            // onAnimationEnd={handleAnimation}
          >
            <h2 className="mt-4 font-bold self-center text-2xl mb-4">
              {isRegisterFormActive ? "Register" : "Sign In"}
            </h2>

            {/* logged in message */}
            {user && isRegisterFormActive && (
              <p className="text-green-600 font-bold">Account Created</p>
            )}

            {/* user created message */}
            {user && !isRegisterFormActive && (
              <p className="text-green-600 font-bold">Successfully logged in</p>
            )}

            {/* Show submit errors */}
            {error &&
              error.map((err) => <p className="text-red-600">{err.msg}</p>)}

            <label htmlFor="email" className="text-[#282828]">
              Email address *
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              className="border-2 border-gray-400 py-2 px-3 focus-visible:outline-none"
            />
            {isRegisterFormActive && (
              <>
                <label htmlFor="name" className="text-[#282828]">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleInputChange}
                  className="border-2 border-gray-400 py-2 px-3 focus-visible:outline-none"
                />
              </>
            )}

            <label htmlFor="password" className="text-[#282828]">
              Password *
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
              className="border-2 border-gray-400 py-2 px-3 focus-visible:outline-none"
            />
            <button
              type="button"
              onClick={handleSubmit}
              className="btn btn-block bg-black text-white hover:bg-[#282828] mt-4"
            >
              {isRegisterFormActive ? "Register" : "Sign In"}
            </button>
            <div className="divider">OR</div>
            <button
              type="button"
              className="btn btn-block"
              onClick={() => {
                handleRegisterClick();
                handleAnimation();
              }} // Trigger fade-in animation on button click
            >
              {isRegisterFormActive ? "Sign In" : "Create an Account"}
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default LoginModal;
