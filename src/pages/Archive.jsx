import React, { useState, useEffect } from "react";
import { CardNote } from "../components/CardNote";
import { Navbar } from "../components/Navbar";
import { SearchNote } from "../components/SearchNotes";
import {
  deleteNote,
  getArchivedNotes,
  unarchiveNote,
} from "../utils/local-data";
import { useSearchParams } from "react-router-dom";
import { NoteNotFound } from "../components/NoteNotFound";
import { AppendNote } from "../components/AppendNote";

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

  return (
    <div className="m-10 relative">
      <Navbar />
      <SearchNote
        title={title}
        setSearchParamsHandler={setSearchParamsHandler}
      />
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 lg:grid-cols-4 relative">
        {data.length === 0 ? (
          <NoteNotFound className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        ) : (
          !!data &&
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

      <AppendNote />
    </div>
  );
};
