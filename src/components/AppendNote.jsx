import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

export const AppendNote = () => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <div className="fixed right-10 bottom-10 z-40">
        <div className="relative group">
          <button
            className="w-12 h-12 bg-green-600 dark:bg-green-dark hover:bg-green-500 rounded-2xl cursor-pointer"
            onClick={() => navigate("/new")}
          >
            <span className="text-white flex justify-center">
              <FaPlus />
            </span>
          </button>
          <div className="absolute left-1 top-1 -z-10 rounded-2xl border-2 w-full h-full hidden group-hover:block border-green-600 dark:border-green-dark"></div>
        </div>
      </div>
    </div>
  );
};
