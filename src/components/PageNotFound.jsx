import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-9xl font-bold text-gray-400">404</h1>
        <h2 className="text-3xl font-bold text-gray-400">Page Not Found</h2>
        <button className="py-3 text-gray-500 hover:text-gray-300" onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </button>
      </div>
    </>
  );
};
