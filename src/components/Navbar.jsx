import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export const Navbar = () => {
  const { authUser, setAuthUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthUser(null);
    navigate("/");
  };
  return (
    <div className="mx-10 pb-3 flex justify-between items-center">
      <h1 className="text-3xl my-10 text-center font-extrabold text-violet-600">
        My Note App
      </h1>

      <div className="flex items-center">
        {authUser && (
          <>
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
          </>
        )}

        <div>
          <button>ID</button>
          <button>Theme</button>
          <button onClick={() => logout()}>Account</button>
        </div>
      </div>
    </div>
  );
};
