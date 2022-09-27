import React from "react";
import PropType from "prop-types";

export const SearchNote = ({ title, setSearchParamsHandler }) => {
  return (
    <>
      <div className="w-full my-5">
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
  title: PropType.string.isRequired,
  setSearchParamsHandler: PropType.func.isRequired,
};
