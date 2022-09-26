import React from "react";
import { showFormattedDate } from "../utils/index";
import { DeleteNote } from "./DeleteNote";
import { useNavigate } from "react-router-dom";

export const CardNote = ({
  note,
  statusName,
  onDelete,
  onChangeArchiveStatus,
  setData,
  getActiveNotes,
  getArchivedNotes,
}) => {
  const { id, title, body, createdAt } = note;
  const navigate = useNavigate();

  return (
    <>
      <div className="relative w-fit h-fit group ">
        <div
          className="relative p-7 flex flex-col bg-violet-100 rounded-xl box-border z-20 cursor-pointer"
          onClick={() => {
            navigate(`/detail/${id}`);
          }}
        >
          <h1 className="m-1 px-6 text-center font-bold text-2xl">{title}</h1>
          <DeleteNote
            id={id}
            onDelete={onDelete}
            setData={setData}
            getActiveNotes={getActiveNotes}
            getArchivedNotes={getArchivedNotes}
            statusName={statusName}
          />
          <div className="flex justify-between my-5">
            <button
              className={`border-none text-white text-base rounded-md px-5 py-2 ${
                statusName === "note"
                  ? "bg-blue-600 hover:bg-blue-300 hover:text-gray-500"
                  : "bg-orange-400 hover:bg-orange-300 hover:text-gray-500"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                if (statusName === "note") {
                  onChangeArchiveStatus(id);
                  setData(getActiveNotes);
                } else {
                  onChangeArchiveStatus(id);
                  setData(getArchivedNotes);
                }
              }}
            >
              <span>{statusName === "note" ? "Set Archive" : "Set Note"}</span>
            </button>

            <p className="flex text-yellow-700 items-center">
              {showFormattedDate(createdAt)}
            </p>
          </div>
          <p className="text-justify">{body}</p>
        </div>
        {/* klkl */}
        <div className="absolute border-2 border-violet-500 rounded-xl z-10 w-full h-full top-2 left-2 hidden group-hover:block"></div>
      </div>
    </>
  );
};
