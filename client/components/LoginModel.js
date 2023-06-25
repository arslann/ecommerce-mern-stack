'use client';
import React, { useContext, useState } from 'react';
import styles from './LoginModal.css';
import { AuthContext } from '@/lib/context/AuthContext';

const LoginModal = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegisterFormActive, setIsRegisterFormActive] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false); // New state for fade-in animation

  const { login, error } = useContext(AuthContext);

  // Get form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
    }
  };

  // Make request to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  // toggle form registration or sign in
  const handleRegisterClick = () => {
    setIsRegisterFormActive(!isRegisterFormActive);
  };

  // fade-in animation toggle
  const handleAnimation = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div>
      <button
        className="w-max bg-white border-none text-[#686868] hover:text-black"
        onClick={() => window.my_modal_3.showModal()}
      >
        Sign In
      </button>
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
              isFormVisible ? 'animate-fade-in' : '' // Apply fade-in animation class conditionally
            }`}
            onAnimationEnd={handleAnimation}
          >
            <h2 className="mt-4 font-bold self-center text-2xl mb-4">
              {isRegisterFormActive ? 'Register' : 'Sign In'}
            </h2>

            {/* Show submit errors */}
            {error &&
              error.map((err) => (
                <p className="text-red-500 font-bold" key={err.msg}>
                  {err.msg}
                </p>
              ))}

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
              type="submit"
              onClick={handleSubmit}
              className="btn btn-block bg-black text-white hover:bg-[#282828] mt-4"
            >
              {isRegisterFormActive ? 'Register' : 'Sign In'}
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
              {isRegisterFormActive ? 'Sign In' : 'Create an Account'}
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default LoginModal;
