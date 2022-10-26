import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { LocalizationContext } from "../contexts/LocalizationContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { useLocalization } from "../hooks/useLocalization";
import "/node_modules/flag-icons/css/flag-icons.min.css";

export const Navbar = () => {
  const { authUser, setAuthUser } = useContext(AuthContext);
  const { localization, toggleLocalization } = useContext(LocalizationContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme);
  const text = useLocalization("nav");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthUser(null);
    navigate("/");
  };
  return (
    <div className={`${theme === "dark" ? "dark" : ""}`}>
      <div className="mx-10 pb-3 flex justify-between items-center dark:bg-primary-dark">
        <h1 className="text-3xl my-10 text-center font-extrabold text-violet-600">
          My Note App
        </h1>

        <div className="flex items-center">
          {authUser && (
            <>
              <Link
                to={"/"}
                className="py-4 px-4 hover:bg-violet-600 hover:text-white dark:text-white rounded-md"
              >
                {text.home}
              </Link>
              <Link
                to={"/archive"}
                className="py-4 px-4 hover:bg-violet-600 hover:text-white dark:text-white rounded-md"
              >
                {text.archive}
              </Link>
            </>
          )}

          <div>
            <button onClick={toggleLocalization} className="mx-3 dark:text-white">
              {localization === "id" ? "ID" : "EN"}
            </button>

            <button onClick={toggleTheme} className="mx-3 dark:text-white">
              {theme === "light" ? "LIGHT" : "DARK"}
            </button>

            <button onClick={() => logout()}>Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};
