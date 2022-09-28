import React from "react";
import { showFormattedDate } from "../utils/index";
import parser from "html-react-parser";
import PropType from "prop-types";

export const DetailNote = ({ note }) => {
  const { title, createdAt, body } = note;

  return (
    <div className="rounded-md mt-5 px-7 pb-7 pt-3 bg-violet-100">
      <div className="flex items-center justify-between">
        <h2 className="my-5 text-center font-bold text-3xl">{title}</h2>
        <p className="text-yellow-700">{showFormattedDate(createdAt)}</p>
      </div>
      <p>{parser(body)}</p>
    </div>
  );
};

DetailNote.propTypes = {
  note: PropType.object.isRequired,
};
