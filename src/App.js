import React, { useEffect, useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AuthContext } from "./contexts/AuthContext";
import { getUserLogged } from "./utils/network-data";
import { paths } from "./routes/paths";
import { LocalizationContext } from "./contexts/LocalizationContext";

export const App = () => {
  const [authUser, setAuthUser] = useState(null);
  const [localization, setLocalization] = useState("id");

  useEffect(() => {
    initialDataUser();
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

  return (
    <AuthContext.Provider value={authContextValue}>
      <LocalizationContext.Provider value={localizationContextValue}>
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
      </LocalizationContext.Provider>
    </AuthContext.Provider>
  );
};
