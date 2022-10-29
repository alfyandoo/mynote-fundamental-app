/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { CardNote } from "../components/CardNote";
import { SearchNote } from "../components/SearchNotes";
import { useSearchParams } from "react-router-dom";
import { NoteNotFound } from "../components/NoteNotFound";
import { AppendNote } from "../components/AppendNote";
import { getArchivedNotes } from "../utils/network-data";
import { Loading } from "../components/Loading";

export const Archive = () => {
  const [data, setData] = useState([]);
  const [initialData, setInitialData] = useState(false);
  const [statusName, setStatusName] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const title = searchParams.get("title") || "";

  const setSearchParamsHandler = (title) => {
    setSearchParams({ title });
  };

  useEffect(() => {
    setStatusName("archived");
    if (!initialData) {
      handleGetArchiveNotes();
    }

    if (initialData) {
      let tempData = [...data];
      if (!title) {
        setData(tempData);
      } else {
        setData(
          tempData.filter((note) =>
            note.title.toLowerCase().includes(title.toLowerCase())
          )
        );
      }
    }
  }, [title]);

  const handleGetArchiveNotes = async () => {
    try {
      setLoading(true);
      const { error, data } = await getArchivedNotes();
      if (!error) {
        setData(data);
        setInitialData(true);
      }
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
    setLoading(false);
  };

  return (
    <div className="mx-10 relative">
      <SearchNote
        title={title}
        setSearchParamsHandler={setSearchParamsHandler}
      />
      {loading ? (
        <Loading />
      ) : (
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
                getArchivedNotes={handleGetArchiveNotes}
              />
            ))
          )}
        </div>
      )}

      <AppendNote />
    </div>
  );
};
