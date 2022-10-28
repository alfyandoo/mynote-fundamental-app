/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useParams } from "react-router-dom";
import { NoteNotFound } from "../components/NoteNotFound";
import { DetailNote } from "../components/DetailNote";
import { useState } from "react";
import { getNote } from "../utils/network-data";
import { useEffect } from "react";
import { Loading } from "../components/Loading";

export const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleGetNoteById();
  }, []);

  const handleGetNoteById = async () => {
    try {
      setLoading(true);
      const { error, data } = await getNote(id);
      console.log(data);
      if (!error) {
        setData(data);
      }
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
    setLoading(false)
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="m-10 relative">
            {!data ? (
              <NoteNotFound className="absolute top-72 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            ) : (
              !!data && <DetailNote note={data} />
            )}
          </div>
        </>
      )}
    </>
  );
};
