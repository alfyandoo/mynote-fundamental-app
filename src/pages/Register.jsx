import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useInput } from "../hooks/useInput";
import { useLocalization } from "../hooks/useLocalization";
import { register } from "../utils/network-data";

export const Register = () => {
  const [name, setName] = useInput("");
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const [confirmPassword, setConfirmPassword] = useInput("");

  const navigate = useNavigate();
  const text = useLocalization("register");

  useEffect(() => {}, []);

  const signUp = async (newUser) => {
    const { error } = await register(newUser);

    if (!error) {
      navigate("/login");
    }
  };

  return (
    <div className="m-10 relative">
      <div className="absolute top-52 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-4xl font-bold dark:text-white">{text.title}</h1>
        <form
          className="mt-10"
          onClick={(event) => {
            event.preventDefault();
            if (password === confirmPassword) {
              signUp({ name, email, password });
            } else {
              alert(`${text.alert}`);
            }
          }}
        >
          <div className="mb-5">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 dark:text-white"
              htmlFor="name"
            >
              {text.name}
            </label>
            <input
              className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-black dark:border-secondary-dark dark:text-white"
              id="name"
              type="text"
              placeholder={text.namePlaceholder}
              value={name}
              onChange={setName}
              required
            />
          </div>
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
              type="email"
              placeholder={text.emailPlaceholder}
              value={email}
              onChange={setEmail}
              required
            />
          </div>
          <div className="mb-5">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 dark:text-white"
              htmkFor="password"
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
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2 dark:text-white"
              htmlFor="confirmPassword"
            >
              {text.confirmPassword}
            </label>
            <input
              className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-black dark:border-secondary-dark dark:text-white"
              id="confirmPassword"
              type="password"
              placeholder={text.confirmPasswordPlaceholder}
              value={confirmPassword}
              onChange={setConfirmPassword}
              required
            />
          </div>
          <p className="my-3 dark:text-white">
            {text.question}{" "}
            <span
              onClick={() => navigate("/login")}
              className="cursor-pointer text-blue-800 hover:text-gray-400 dark:text-blue-500 dark:hover:text-blue-700"
            >
              {text.login}
            </span>
          </p>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outlinedark:bg-black dark:border-secondary-dark dark:text-white"
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
