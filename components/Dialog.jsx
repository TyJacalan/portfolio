import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const Dialog = ({ title, children, trigger }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsOpen(true);
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
  };

  const handleDialogClick = (event) => {
    event.stopPropagation();
  };

  return (
    <>
      <div className="h-full w-full" onClick={handleOpenDialog}>
        {trigger}
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/80 z-50"
          onClick={handleCloseDialog}
        >
          <div
            className="relative max-h-[90%] min-w-[350px] w-[75%] bg-white rounded-md pt-12 overflow-y-auto"
            onClick={handleDialogClick}
          >
            <h2 className="px-6 sm:px-24 text-2xl md:text-3xl text-center">
              {title}
            </h2>
            <div>{children}</div>
            <button
              className="md:text-lg absolute top-5 right-5 text-muted cursor-pointer"
              onClick={handleCloseDialog}
            >
              <IoCloseOutline />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Dialog;
