import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="pb-3">
      <h1 className="text-3xl my-10 text-center font-extrabold text-violet-600">
        My Note App
      </h1>

      <div>
        <Link
          to={"/"}
          className="py-4 px-4 hover:bg-violet-600 hover:text-white rounded-md"
        >
          Home
        </Link>
        <Link
          to={"/archive"}
          className="py-4 px-4 hover:bg-violet-600 hover:text-white rounded-md"
        >
          Archive
        </Link>
      </div>
    </div>
  );
};
