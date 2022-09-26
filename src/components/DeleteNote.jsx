import React from "react";

export const DeleteNote = ({
  id,
  onDelete,
  setData,
  getActiveNotes,
  getArchivedNotes,
  statusName,
}) => {
  console.log(id);
  return (
    <>
      <button
        className="w-6 absolute box-border m-3 top-4 right-2 rounded-md group bg-red-400 hover:bg-gray-500"
        onClick={(e) => {
          e.stopPropagation();
          if (statusName === "note") {
            onDelete(id);
            setData(getActiveNotes);
          } else {
            onDelete(id);
            setData(getArchivedNotes);
          }
        }}
      >
        <span className="text-white group-hover:text-yellow-400">X</span>
      </button>
    </>
  );
};
