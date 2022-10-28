import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/network-data";
import { FaPlus } from "react-icons/fa";
import { useInput } from "../hooks/useInput";

export const Append = () => {
  const [title, setTitle] = useInput("");
  const [body, setBody] = useState("");

  const navigate = useNavigate();

  const handleAddNote = async (note) => {
    try {
      console.log(note);
      const { error } = await addNote(note);

      if (!error) {
        navigate("/");
      }
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  };

  return (
    <div className="mx-10 mt-0">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleAddNote({
            title: title,
            body: body,
          });
          setTitle("");
          setBody("");
        }}
      >
        <div className="my-5">
          <input
            className="w-full text-xl p-3 rounded-md border-2 border-violet-200"
            type="text"
            name="title"
            placeholder="input your note title.."
            value={title}
            onChange={setTitle}
            required
          />
        </div>

        <div>
          <div
            className="w-full h-64 p-3 rounded-md border-2 border-violet-200"
            placeholder="input input your note body.."
            contentEditable
            onInput={(event) => {
              setBody(event.target.innerText);
            }}
          />
        </div>

        <button className="my-5 p-4 rounded-md group text-white bg-violet-600 hover:bg-gray-600">
          <span className="flex items-center text-white group-hover:text-yellow-400">
            <FaPlus className="mr-2" /> Add
          </span>
        </button>
      </form>
    </div>
  );
};
