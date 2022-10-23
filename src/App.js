import React, { useEffect, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AuthContext } from "./contexts/AuthContext";
import { getUserLogged } from "./utils/network-data";
import { paths } from "./routes/paths";

export const App = () => {
  const [authUser, setAuthUser] = React.useState(null);

  useEffect(() => {
    initialDataUser();
  }, []);

  const initialDataUser = async () => {
    const { error, data } = await getUserLogged();
    if (!error) {
      setAuthUser(data);
    }
  };

  const authContextValue = useMemo(
    () => ({
      authUser,
      setAuthUser,
    }),
    [authUser]
  );

  return (
    <AuthContext.Provider value={authContextValue}>
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
    </AuthContext.Provider>
  );
};
