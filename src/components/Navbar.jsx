import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { LocalizationContext } from "../contexts/LocalizationContext";
import { useLocalization } from "../hooks/useLocalization";
import "/node_modules/flag-icons/css/flag-icons.min.css";

export const Navbar = () => {
  const { authUser, setAuthUser } = useContext(AuthContext);
  const { localization, toggleLocalization } = useContext(LocalizationContext);
  const text = useLocalization("nav");
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
              {text.home}
            </Link>
            <Link
              to={"/archive"}
              className="py-4 px-4 hover:bg-violet-600 hover:text-white rounded-md"
            >
              {text.archive}
            </Link>
          </>
        )}

        <div>
          <button onClick={toggleLocalization} className="mx-3">
            {localization === "id" ? "ID" : "EN"}
          </button>

          <button className="mx-3">Theme</button>
          <button onClick={() => logout()}>Account</button>
        </div>
      </div>
    </div>
  );
};
