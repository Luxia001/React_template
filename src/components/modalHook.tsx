import React from "react";

interface ModalHookProps {
  children: React.ReactNode;
  onClose: () => void;
}

function ModalHook({ children, onClose }: ModalHookProps) {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full place-content-center z-50"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      onClick={onClose}
    >
      <div className="bg-white shadow-lg p-10 m-10 rounded-lg">
        <button
          onClick={onClose}
          className="flex justify-end items-center text-gray-500 hover:text-red-700 w-full"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
}

export default ModalHook;
