import Image from "next/image";
import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center  bg-black bg-opacity-70  transition-all duration-500 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Modal Content with Zoom Animation */}
      <div
        className={`modal-content bg-white w-full max-w-[800px] rounded-[20px] lg:px-[144px] lg:pt-[48px] lg:pb-[24px] p-4 relative   transform transition-transform duration-500 ${
          isOpen ? "scale-100" : "scale-90"
        }`}
        style={{ boxShadow: "0px 0px 15px 0px rgba(0,0,0,0.15)" }}
      >
        <Image
          src="images/close.svg"
          onClick={onClose}
          width={16}
          height={16}
          alt="close"
          className="cursor-pointer absolute right-[30px] top-[20px]"
        />
        {children}
      </div>

      {/* Styles for Zoom Animation */}
      <style jsx>{`
        .modal-content {
          animation: zoom-in 0.6s ease-in-out;
        }

        @keyframes zoom-in {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.7;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Modal;
