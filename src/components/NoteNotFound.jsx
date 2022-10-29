import React from "react";
import PropTypes from "prop-types";

export const NoteNotFound = ({ className }) => {
  return (
    <div className={className}>
      <div className="flex flex-col items-center">
        <span className="text-6xl mb-2">&#128531;</span>
        <h2 className="text-3xl font-bold dark:text-white">Note not found</h2>
      </div>
    </div>
  );
};

NoteNotFound.propTypes = {
  className: PropTypes.string,
};
