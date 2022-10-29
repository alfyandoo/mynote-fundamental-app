import React, { useContext } from "react";
import { showFormattedDate } from "../utils/index";
import parser from "html-react-parser";
import PropTypes from "prop-types";
import { LocalizationContext } from "../contexts/LocalizationContext";

export const DetailNote = ({ note }) => {
  const { title, createdAt, body } = note;
  const { localization } = useContext(LocalizationContext);
  const language = localization === "en" ? "en-US" : "id-ID";

  return (
    <div className="rounded-md mt-5 px-7 pb-7 pt-3 bg-violet-100 dark:bg-secondary-dark">
      <div className="flex items-center justify-between">
        <h2 className="my-5 text-center font-bold text-3xl dark:text-gray-400">
          {title}
        </h2>
        <p className="text-yellow-700 dark:text-yellow-dark">
          {showFormattedDate(createdAt, language)}
        </p>
      </div>
      <p className="dark:text-tertiary-dark">{parser(body)}</p>
    </div>
  );
};

DetailNote.propTypes = {
  note: PropTypes.object.isRequired,
};
