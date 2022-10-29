import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useInput } from "../hooks/useInput";
import { useLocalization } from "../hooks/useLocalization";
import { login, putAccessToken } from "../utils/network-data";

export const Login = () => {
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const navigate = useNavigate();
  const { setAuthUser } = useContext(AuthContext);
  const text = useLocalization("login");

  const signIn = async (user) => {
    const { error, data } = await login(user);
    if (!error) {
      putAccessToken(data.accessToken);
      setAuthUser(data);
      navigate("/");
    }
  };

  return (
    <div className="m-10 relative">
      <div className="absolute top-52 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-4xl font-bold dark:text-white">{text.title}</h1>
        <form
          className="mt-10"
          onSubmit={(event) => {
            event.preventDefault();
            signIn({ email, password });
          }}
        >
          <div className="mb-5">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 dark:text-white"
              htmlFor="email"
            >
              {text.email}
            </label>
            <input
              className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-black dark:border-secondary-dark dark:text-white"
              id="email"
              type="text"
              placeholder={text.emailPlaceholder}
              value={email}
              onChange={setEmail}
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2 dark:text-white"
              htmlFor="password"
            >
              {text.password}
            </label>
            <input
              className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-black dark:border-secondary-dark dark:text-white"
              id="password"
              type="password"
              placeholder={text.passwordPlaceholder}
              value={password}
              onChange={setPassword}
              required
            />
          </div>
          <p className="my-3 dark:text-white">
            {text.question}{" "}
            <span
              onClick={() => navigate("/register")}
              className="cursor-pointer text-blue-800 hover:text-gray-400 dark:text-blue-500 dark:hover:text-blue-700"
            >
              {text.register}
            </span>
          </p>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {text.title}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
