import React from "react";
import PropType from "prop-types";

export const NotFound = ({ className }) => {
  return (
    <div className={className}>
      <div className="flex flex-col items-center">
        <span className="text-6xl mb-2">&#128531;</span>
        <h2 className="text-3xl font-bold">Note not found</h2>
      </div>
    </div>
  );
};

NotFound.PropType = {
  className: PropType.string,
};
