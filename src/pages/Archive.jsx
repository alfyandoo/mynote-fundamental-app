import React, { useState, useEffect } from "react";
import { CardNote } from "../components/CardNote";
import { Navbar } from "../components/Navbar";
import { SearchNote } from "../components/SearchNotes";
import {
  deleteNote,
  getArchivedNotes,
  unarchiveNote,
} from "../utils/local-data";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { NotFound } from "../components/NotFound";

export const Archive = () => {
  const archiveNote = getArchivedNotes();
  const [data, setData] = useState(archiveNote);
  const [statusName, setStatusName] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const title = searchParams.get("title") || "";

  const setSearchParamsHandler = (title) => {
    setSearchParams({ title });
  };

  useEffect(() => {
    setStatusName("archived");
    if (!title) {
      setData(getArchivedNotes());
    } else {
      setData(
        getArchivedNotes().filter((note) =>
          note.title.toLowerCase().includes(title.toLowerCase())
        )
      );
    }
  }, [title]);

  const navigate = useNavigate();

  return (
    <div className="m-10 relative">
      <Navbar />
      <SearchNote
        title={title}
        setSearchParamsHandler={setSearchParamsHandler}
      />
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 lg:grid-cols-4 relative">
        {data.length === 0 ? (
          <NotFound className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        ) : (
          data.map((item, index) => (
            <CardNote
              key={index}
              note={item}
              statusName={statusName}
              onChangeArchiveStatus={unarchiveNote}
              onDelete={deleteNote}
              setData={setData}
              getArchivedNotes={getArchivedNotes}
            />
          ))
        )}
      </div>

      <div className="relative">
        <div className="fixed right-10 bottom-10 z-40">
          <div className="relative group">
            <button
              className="w-12 h-12 bg-green-600 hover:bg-green-500 rounded-2xl cursor-pointer"
              onClick={() => navigate("/new")}
            >
              <span className="text-white flex justify-center">
                <FaPlus />
              </span>
            </button>
            <div className="absolute left-1 top-1 -z-10 rounded-2xl border-2 w-full h-full hidden group-hover:block border-green-600"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
