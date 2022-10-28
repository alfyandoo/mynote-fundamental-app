import React from "react";
import { showFormattedDate } from "../utils/index";
import { DeleteNote } from "./DeleteNote";
import { useNavigate } from "react-router-dom";
import { FaFolderOpen, FaFolder } from "react-icons/fa";
import parser from "html-react-parser";
import PropTypes from "prop-types";
import { archiveNote, unarchiveNote } from "../utils/network-data";
import { useLocalization } from "../hooks/useLocalization";
import { useContext } from "react";
import { LocalizationContext } from "../contexts/LocalizationContext";

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
  const { localization } = useContext(LocalizationContext)
  const navigate = useNavigate();
  const text = useLocalization('card');
  const language = localization === 'en' ? 'en-US' : 'id-ID';

  const handleArchiveNote = async (id) => {
    try {
      await archiveNote(id);
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  };

  const handleUnArchiveNote = async (id) => {
    try {
      await unarchiveNote(id);
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  };

  return (
    <>
      <div className="relative group h-fit">
        <div
          className="relative p-7 flex flex-col bg-violet-100 rounded-xl box-border overflow-hidden z-20 cursor-pointer"
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
          <p className="flex my-2 self-end text-yellow-700">
            {showFormattedDate(createdAt, language)}
          </p>
          <p className="text-justify">{parser(body)}</p>
          <button
            className={`border-none text-white text-base rounded-md mt-5 px-5 py-2 ${
              statusName === "note"
                ? "bg-blue-600 hover:bg-gray-500 hover:text-yellow-400"
                : "bg-orange-400 hover:bg-gray-500 hover:text-yellow-400"
            }`}
            onClick={(event) => {
              event.stopPropagation();
              if (statusName === "note") {
                handleArchiveNote(id);
                getActiveNotes();
              } else {
                handleUnArchiveNote(id);
                getArchivedNotes();
              }
            }}
          >
            <span className="flex justify-center items-center">
              {statusName === "note" ? (
                <>
                  <FaFolder />
                  <span className="px-2">{text.archive}</span>
                </>
              ) : (
                <>
                  <FaFolderOpen />
                  <span className="px-2">{text.unarchive}</span>
                </>
              )}
            </span>
          </button>
        </div>
        <div className="absolute border-2 border-violet-500 rounded-xl z-10 w-full h-full top-2 left-2 hidden group-hover:block"></div>
      </div>
    </>
  );
};

CardNote.propTypes = {
  note: PropTypes.object.isRequired,
  statusName: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onChangeArchiveStatus: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired,
  getActiveNotes: PropTypes.func,
  getArchivedNotes: PropTypes.func,
};
