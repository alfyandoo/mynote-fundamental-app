import { useNavigate } from "react-router-dom";
import { useInput } from "../hooks/useInput";
import { login } from "../utils/network-data";

export const Login = () => {
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const navigate = useNavigate();

  const signIn = async (user) => {
    const { error } = await login(user);

    if (!error) {
      navigate("/");
    }
  };

  return (
    <div className="m-10 relative">
      <div className="absolute top-72 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-4xl font-bold">Login</h1>
        <form
          className="mt-10"
          onSubmit={(event) => {
            event.preventDefault();
            signIn({ email, password });
          }}
        >
          <div className="mb-5">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={setEmail}
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              value={password}
              onChange={setPassword}
              required
            />
          </div>
          <p className="my-3">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="cursor-pointer text-blue-800 hover:text-gray-400"
            >
              Sign up
            </span>
          </p>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
