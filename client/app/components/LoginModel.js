'use client';
import React from 'react';

const LoginModal = () => {
  return (
    <div>
      <button
        className="btn w-max bg-white border-none"
        onClick={() => window.my_modal_3.showModal()}
      >
        Sign In
      </button>
      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box">
          <button
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </form>
      </dialog>
    </div>
  );
};

export default LoginModal;
