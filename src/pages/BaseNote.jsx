import React, { useEffect } from "react";
import { getActiveNotes, deleteNote, archiveNote } from "../utils/local-data";
import { CardNote } from "../components/CardNote";
import { SearchNote } from "../components/SearchNotes";
import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { useNavigate, useSearchParams } from "react-router-dom";

export const BaseNote = () => {
  const [data, setData] = useState([]);
  const [statusName, setStatusName] = useState("note");
  const [searchParams, setSearchParams] = useSearchParams();

  const title = searchParams.get("title") || "";

  const setSearchParamsHandler = (title) => {
    setSearchParams({ title });
  };

  useEffect(() => {
    if (!title) {
      setData(getActiveNotes());
    } else {
      setData(
        getActiveNotes().filter((note) =>
          note.title.toLowerCase().includes(title.toLowerCase())
        )
      );
    }
  }, [title]);

  const navigate = useNavigate();

  return (
    <div className="m-10 relative overflow-visible">
      <Navbar />
      <SearchNote
        title={title}
        setSearchParamsHandler={setSearchParamsHandler}
      />
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 lg:grid-cols-4 relative">
        {data.length === 0 ? (
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col items-center">
              <span className="text-6xl mb-2">&#128531;</span>
              <h2 className="text-3xl font-bold">Note not found</h2>
            </div>
          </div>
        ) : (
          data.map((item, index) => (
            <CardNote
              key={index}
              note={item}
              statusName={statusName}
              onChangeArchiveStatus={archiveNote}
              onDelete={deleteNote}
              setData={setData}
              getActiveNotes={getActiveNotes}
            />
          ))
        )}
      </div>

      <div className="fixed right-10 bottom-10">
        <button
          className="w-12 h-12 bg-green-500 rounded-2xl cursor-pointer"
          onClick={() => navigate("/new")}
        >
          +
        </button>
      </div>
    </div>
  );
};
