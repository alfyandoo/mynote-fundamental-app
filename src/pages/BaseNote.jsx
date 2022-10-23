import React, { useState, useEffect } from "react";
import { deleteNote, archiveNote } from "../utils/local-data";
import { CardNote } from "../components/CardNote";
import { SearchNote } from "../components/SearchNotes";
import { useSearchParams } from "react-router-dom";
import { NoteNotFound } from "../components/NoteNotFound";
import { AppendNote } from "../components/AppendNote";
import { getActiveNotes } from "../utils/network-data";

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
    handleGetActiveNotes()
    if (!title) {
      setData(data);
    } else {
      setData(
        data.filter((note) =>
          note.title.toLowerCase().includes(title.toLowerCase())
        )
      );
    }
  }, [title]);

  const handleGetActiveNotes = async () => {
    const { error, data, message} = await getActiveNotes();
  }

  return (
    <div className="mx-10 relative">
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
