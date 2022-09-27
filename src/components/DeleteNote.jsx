import React from "react";
import { FaTrash } from "react-icons/fa";

export const DeleteNote = ({
  id,
  onDelete,
  setData,
  getActiveNotes,
  getArchivedNotes,
  statusName,
}) => {
  return (
    <>
      <button
        className="absolute px-3 py-2 m-3 top-4 right-2 rounded-md group text-white bg-red-500 hover:bg-gray-500 hover:text-yellow-400"
        onClick={(event) => {
          event.stopPropagation();
          if (statusName === "note") {
            onDelete(id);
            setData(getActiveNotes);
          } else {
            onDelete(id);
            setData(getArchivedNotes);
          }
        }}
      >
        <FaTrash />
      </button>
    </>
  );
};
