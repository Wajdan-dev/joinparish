import Image from "next/image";
import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* Modal Content with Flip Animation */}
      <div
        className="modal-content bg-white w-full max-w-[800px] rounded-[20px] lg:px-[144px] lg:pt-[48px] lg:pb-[24px] p-4 relative h-[600.208px] overflow-y-scroll"
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

      {/* Styles for Flip Animation */}
      <style jsx>{`
        .modal-content {
          animation: flip-in 0.6s ease-in-out;
        }

        @keyframes flip-in {
          0% {
            transform: rotateY(-90deg);
            opacity: 0;
          }
          50% {
            transform: rotateY(-45deg);
            opacity: 0.5;
          }
          100% {
            transform: rotateY(0deg);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Modal;
