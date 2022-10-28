import React from "react";
import { FaTrash } from "react-icons/fa";
import PropTypes from "prop-types";
import { deleteNote } from "../utils/network-data";

export const DeleteNote = ({
  id,
  getActiveNotes,
  getArchivedNotes,
  statusName,
}) => {
  const handleDeleteNote = async (id) => {
    try {
      await deleteNote(id);
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  };

  return (
    <>
      <button
        className="absolute px-3 py-2 m-3 top-4 right-2 rounded-md group text-white bg-red-500 hover:bg-gray-500 hover:text-yellow-400"
        onClick={(event) => {
          event.stopPropagation();
          if (statusName === "note") {
            handleDeleteNote(id);
            getActiveNotes();
          } else {
            handleDeleteNote(id);
            getArchivedNotes();
          }
        }}
      >
        <FaTrash />
      </button>
    </>
  );
};

DeleteNote.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired,
  getActiveNotes: PropTypes.func,
  getArchivedNotes: PropTypes.func,
  statusName: PropTypes.string.isRequired,
};
