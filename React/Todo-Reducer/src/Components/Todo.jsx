import { useState } from "react";

function Todo({ task, remove, edit }) {
  const [mode, setMode] = useState("list");
  const [text, setText] = useState(task.text);
  if (mode == "list") {
    return (
      <div className="bg-[#E3E7EC] flex justify-between items-center rounded-lg w-96 pl-2">
        <p>{task.text}</p>
        <div className="my-2">
          <button
            className="bg-[#FFBF0E] px-3 py-1 mr-2 rounded-md text-white"
            onClick={() => setMode("edit")}
          >
            Edit
          </button>
          <button
            className="bg-[#DC3545] px-3 py-1 mr-2 rounded-md text-white"
            onClick={remove}
          >
            Remove
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className=" bg-[#E3E7EC] flex justify-between items-center rounded-lg w-96 pl-2">
        <input
          className="rounded-lg px-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="my-2">
          <button
            className="bg-[#046FFD] px-3 py-1 mr-2 rounded-md text-white"
            onClick={() => {
              edit(text);
              setMode("list");
            }}
          >
            Save
          </button>
          <button
            className="bg-[#DC3545] px-3 py-1 mr-2 rounded-md text-white"
            onClick={() => {
              setMode("list");
              setText(task.text);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

export default Todo;
