import { ProtectedRoutes } from "../layouts/ProtectedRoutes";
import { Append } from "../pages/Append";
import { Archive } from "../pages/Archive";
import { BaseNote } from "../pages/BaseNote";
import { Detail } from "../pages/Detail";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { PageNotFound } from "../components/PageNotFound";

export const paths = [
  {
    path: "/",
    element: (
      <ProtectedRoutes mode="auth">
        <BaseNote />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/login",
    element: (
      <ProtectedRoutes mode="public">
        <Login />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/register",
    element: (
      <ProtectedRoutes mode="public">
        <Register />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/archive",
    element: (
      <ProtectedRoutes mode="auth">
        <Archive />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/new",
    element: (
      <ProtectedRoutes mode="auth">
        <Append />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/detail/:id",
    element: (
      <ProtectedRoutes mode="auth">
        <Detail />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/*",
    element: <PageNotFound />,
  },
];
