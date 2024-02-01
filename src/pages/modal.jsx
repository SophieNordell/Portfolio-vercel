import React from "react";

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className=" font-nunito text-xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-100 p-16 rounded-md ">
      <div className="modal-content">
        <p>{content}</p>
        <button
          onClick={onClose}
          className="bg-[#8F9779] text-white px-4 py-2 mt-4 rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
