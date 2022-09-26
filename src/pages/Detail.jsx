import { useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { getNoteById } from "../utils/local-data";
import { showFormattedDate } from "../utils/index";

export const Detail = () => {
  const { id } = useParams();

  const data = getNoteById(id);

  return (
    <div className="m-10">
      <Navbar />
      <div className="rounded-md mt-5 px-7 pb-7 pt-3 bg-violet-100">
        <div className="flex items-center justify-between">
          <h2 className="my-5 text-center font-bold text-3xl">
            {data.title}
          </h2>
          <p className="text-yellow-700">{showFormattedDate(data.createdAt)}</p>
        </div>
        <p>{data.body}</p>
      </div>
    </div>
  );
};
