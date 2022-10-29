import React from "react";
import { FaTrash } from "react-icons/fa";
import PropTypes from "prop-types";
import { deleteNote } from "../utils/network-data";

export const DeleteNote = ({
  id,
  getActiveNotes,
  getArchivedNotes,
  setData,
  statusName,
}) => {
  const handleDeleteNote = async (id) => {
    try {
      await deleteNote(id);
      if (statusName === "note") {
        const { error, data } = await getActiveNotes();

        if (!error) {
          setData(data);
        }
      } else {
        const { error, data } = await getArchivedNotes();

        if (!error) {
          setData(data);
        }
      }
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  };

  return (
    <>
      <button
        className="absolute px-3 py-2 m-3 top-4 right-2 rounded-md group text-white bg-red-500 hover:bg-gray-500 hover:text-yellow-400 dark:bg-[#A91079] dark:hover:bg-gray-500"
        onClick={(event) => {
          event.stopPropagation();
          handleDeleteNote(id);
        }}
      >
        <FaTrash />
      </button>
    </>
  );
};

DeleteNote.propTypes = {
  id: PropTypes.string.isRequired,
  setData: PropTypes.func.isRequired,
  getActiveNotes: PropTypes.func,
  getArchivedNotes: PropTypes.func,
  statusName: PropTypes.string.isRequired,
};
