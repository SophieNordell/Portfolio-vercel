import React from "react";

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-white p-10 md:p-12 rounded-lg shadow-lg max-w-lg w-full z-10 text-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-gray-500 hover:text-gray-800 transition"
        >
          ✖
        </button>

        <div className="text-gray-800 font-nunito text-lg leading-relaxed flex flex-col justify-center items-center h-full">
          {content}
        </div>

        <div className="mt-6">
          <button
            onClick={onClose}
            className="bg-[#8F9779] text-white px-6 py-2 rounded-md hover:bg-[#7A8669] transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
