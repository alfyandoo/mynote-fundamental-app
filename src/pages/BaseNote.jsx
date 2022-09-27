import React, { useState, useEffect } from "react";
import { getActiveNotes, deleteNote, archiveNote } from "../utils/local-data";
import { CardNote } from "../components/CardNote";
import { SearchNote } from "../components/SearchNotes";
import { Navbar } from "../components/Navbar";
import { useSearchParams } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { AppendNote } from "../components/AppendNote";

export const BaseNote = () => {
  const [data, setData] = useState([]);
  const [statusName, setStatusName] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const title = searchParams.get("title") || "";

  const setSearchParamsHandler = (title) => {
    setSearchParams({ title });
  };

  useEffect(() => {
    setStatusName("note");
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
          !!data &&
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

      <AppendNote />
    </div>
  );
};
