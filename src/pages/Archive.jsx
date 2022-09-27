import { useEffect } from "react";
import { useState } from "react";
import { CardNote } from "../components/CardNote";
import { Navbar } from "../components/Navbar";
import { SearchNote } from "../components/SearchNotes";
import {
  deleteNote,
  getArchivedNotes,
  unarchiveNote,
} from "../utils/local-data";
import { useNavigate, useSearchParams } from "react-router-dom";

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
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col items-center">
              <span className="text-6xl mb-2">&#128531;</span>
              <h2 className="text-3xl font-bold">Archive note not found</h2>
            </div>
          </div>
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
