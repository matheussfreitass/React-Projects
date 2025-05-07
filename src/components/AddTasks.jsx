import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Enter the title: "
        className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Enter the title description: "
        className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          if (!title || !description) {
            return alert("Answer the title and description!");
          }
          setTitle("");
          setDescription("");
          onAddTaskSubmit(title, description);
        }}
        className="hover:bg-sky-800 transition delay-150 duration-300 bg-slate-500 text-white px-4 py-2  rounded-md"
      >
        SEND
      </button>
    </div>
  );
}

export default AddTask;
