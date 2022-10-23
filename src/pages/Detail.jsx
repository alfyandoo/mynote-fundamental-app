import React from "react";
import { useParams } from "react-router-dom";
import { getNoteById } from "../utils/local-data";
import { NoteNotFound } from "../components/NoteNotFound";
import { DetailNote } from "../components/DetailNote";

export const Detail = () => {
  const { id } = useParams();
  const data = getNoteById(id);

  return (
    <div className="m-10 relative">
      {!data ? (
        <NoteNotFound className="absolute top-72 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      ) : (
        !!data && <DetailNote note={data} />
      )}
    </div>
  );
};
