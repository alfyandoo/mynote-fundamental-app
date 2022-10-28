import React from "react";
import PropTypes from "prop-types";

export const SearchNote = ({ title, setSearchParamsHandler }) => {
  return (
    <>
      <div className="w-full mb-5">
        <input
          type="search"
          className="w-full text-xl p-3 rounded-md border-2 border-violet-200"
          placeholder="Search by title.."
          name="search"
          value={title}
          onChange={(event) => setSearchParamsHandler(event.target.value)}
          maxLength={50}
        />
      </div>
    </>
  );
};

SearchNote.propTypes = {
  title: PropTypes.string.isRequired,
  setSearchParamsHandler: PropTypes.func.isRequired,
};
