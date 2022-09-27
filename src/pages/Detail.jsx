import React from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { getNoteById } from "../utils/local-data";
import { showFormattedDate } from "../utils/index";
import { NotFound } from "../components/NotFound";

export const Detail = () => {
  const { id } = useParams();

  const data = getNoteById(id);

  return (
    <div className="m-10 relative">
      <Navbar />
      {!data ? (
        <NotFound className="absolute top-72 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      ) : (
        <div className="rounded-md mt-5 px-7 pb-7 pt-3 bg-violet-100">
          <div className="flex items-center justify-between">
            <h2 className="my-5 text-center font-bold text-3xl">
              {data.title}
            </h2>
            <p className="text-yellow-700">
              {showFormattedDate(data.createdAt)}
            </p>
          </div>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
};
