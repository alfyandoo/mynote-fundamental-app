import React from "react";
import { Routes, Route } from "react-router-dom";
import { PageNotFound } from "./components/PageNotFound";
import { Append } from "./pages/Append";
import { Archive } from "./pages/Archive";
import { BaseNote } from "./pages/BaseNote";
import { Detail } from "./pages/Detail";

export const App = () => {
  const paths = [
    {
      path: "/",
      element: <BaseNote />,
    },
    {
      path: "/archive",
      element: <Archive />,
    },
    {
      path: "/new",
      element: <Append />,
    },
    {
      path: "/detail/:id",
      element: <Detail />,
    },
    {
      path: "/*",
      element: <PageNotFound />,
    },
  ];

  return (
    <>
      <Routes>
        {paths.map((item, index) => (
          <Route key={index} {...item} />
        ))}
      </Routes>
    </>
  );
};
