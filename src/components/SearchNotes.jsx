import React from "react";
import PropTypes from "prop-types";
import { useLocalization } from "../hooks/useLocalization";

export const SearchNote = ({ title, setSearchParamsHandler }) => {
  const text = useLocalization("search");

  return (
    <>
      <div className="w-full mb-5">
        <input
          type="search"
          className="w-full text-xl p-3 rounded-xl border-2 border-violet-200 dark:bg-primary-dark dark:border-secondary-dark dark:text-white"
          placeholder={text.placeholder}
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
