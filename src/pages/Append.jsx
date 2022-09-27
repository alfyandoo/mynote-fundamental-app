import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { addNote } from "../utils/local-data";
import { FaPlus } from "react-icons/fa";

export const Append = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [maxLengthTitle, setMaxLengthTitle] = useState(50);
  const [maxLengthBody, setMaxLengthBody] = useState(255);

  const navigate = useNavigate();

  return (
    <div className="mx-10 mt-0">
      <Navbar />
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addNote({
            title: title,
            body: body,
          });
          navigate("/");
          setTitle("");
          setBody("");
          setMaxLengthTitle(50);
          setMaxLengthBody(255);
        }}
      >
        <div className="my-5">
          <p className="flex mr-3 justify-end">
            remaining characters: {maxLengthTitle}
          </p>
          <input
            className="w-full text-xl p-3 rounded-md border-2 border-violet-200"
            type="text"
            name="title"
            placeholder="input your note title.."
            value={title}
            onChange={(event) => {
              setMaxLengthTitle(50 - event.target.value.slice(0, 50).length);
              setTitle(event.target.value.slice(0, 50));
            }}
            required
          />
        </div>

        <div>
          <p className="flex justify-end">
            remaining characters: {maxLengthBody}
          </p>
          <textarea
            className="w-full h-64 p-3 rounded-md border-2 border-violet-200"
            typeof="text"
            name="body"
            placeholder="input your note body.."
            value={body}
            onChange={(event) => {
              setMaxLengthBody(255 - event.target.value.slice(0, 255).length);
              setBody(event.target.value.slice(0, 255));
            }}
            required
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
