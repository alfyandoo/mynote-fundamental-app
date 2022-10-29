/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AuthContext } from "./contexts/AuthContext";
import { getUserLogged } from "./utils/network-data";
import { paths } from "./routes/paths";
import { LocalizationContext } from "./contexts/LocalizationContext";
import { ThemeContext } from "./contexts/ThemeContext";

export const App = () => {
  const [authUser, setAuthUser] = useState(null);
  const [localization, setLocalization] = useState(
    localStorage.getItem("localization") || "id"
  );
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  console.log(theme);
  useEffect(() => {
    initialDataUser();

    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      document.body.classList.add("dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      document.body.classList.remove("dark");
    }
  }, []);

  const initialDataUser = async () => {
    const { error, data } = await getUserLogged();
    if (!error) {
      setAuthUser(data);
    }
  };

  const toggleLocalization = () => {
    localStorage.setItem("localization", localization === "en" ? "id" : "en");
    setLocalization((prevState) => (prevState === "en" ? "id" : "en"));
  };

  const toggleTheme = () => {
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));

    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      document.body.classList.remove("dark");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      document.body.classList.add("dark");
    }
  };

  const authContextValue = useMemo(
    () => ({
      authUser,
      setAuthUser,
    }),
    [authUser]
  );

  const localizationContextValue = useMemo(
    () => ({
      localization,
      toggleLocalization,
    }),
    [localization]
  );

  const themeContextValue = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),

    [theme]
  );

  return (
    <AuthContext.Provider value={authContextValue}>
      <LocalizationContext.Provider value={localizationContextValue}>
        <ThemeContext.Provider value={themeContextValue}>
          <>
            <header>
              <Navbar />
            </header>
            <main>
              <Routes>
                {paths.map((item, index) => (
                  <Route key={index} {...item} />
                ))}
              </Routes>
            </main>
          </>
        </ThemeContext.Provider>
      </LocalizationContext.Provider>
    </AuthContext.Provider>
  );
};
