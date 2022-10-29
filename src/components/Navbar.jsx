import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { LocalizationContext } from "../contexts/LocalizationContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { useLocalization } from "../hooks/useLocalization";

export const Navbar = () => {
  const { authUser, setAuthUser } = useContext(AuthContext);
  const { toggleLocalization } = useContext(LocalizationContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const text = useLocalization("nav");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthUser(null);
    navigate("/");
  };
  return (
    <div className="px-10 flex justify-between items-center dark:bg-primary-dark">
      <h1 className="text-3xl my-10 text-center font-extrabold text-violet-600 dark:text-white">
        My Note App
      </h1>

      <div className="flex items-center">
        {authUser && (
          <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row">
            <Link
              to={"/"}
              className="py-4 px-4 font-semibold hover:bg-violet-600 hover:text-white dark:text-white rounded-md"
            >
              {text.home}
            </Link>
            <Link
              to={"/archive"}
              className="py-4 px-4 font-semibold hover:bg-violet-600 hover:text-white dark:text-white rounded-md"
            >
              {text.archive}
            </Link>
          </div>
        )}

        <div>
          <button onClick={toggleLocalization} className="dark:text-white">
            <img
              src="/images/translate.png"
              alt="translate"
              className="w-12 h-12 self-center hover:scale-95"
            />
          </button>

          <button onClick={toggleTheme} className="mx-3 dark:text-white">
            {theme === "light" ? (
              <img
                src="/images/sun.png"
                alt="translate"
                className="w-12 h-12 self-center hover:scale-95"
              />
            ) : (
              <img
                src="/images/moon.png"
                alt="translate"
                className="w-12 h-12 self-center hover:scale-95"
              />
            )}
          </button>

          {authUser && (
            <button onClick={() => logout()}>
              <img
                src="/images/log.png"
                alt="translate"
                className="w-12 h-12 self-center hover:scale-95"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
