import { useState } from "react";

function Form({ add }) {
  const [task, setTask] = useState("");
  const handleChange = (e) => setTask(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task != "") {
      add(task);
      setTask("");
    }
  };
  return (
    <form className="flex justify-center gap-4">
      {" "}
      <input
        className="border-2 w-72 rounded-xl px-2"
        type="text"
        name="todo"
        value={task}
        autoComplete="off"
        onChange={handleChange}
      />
      <button
        onClick={handleSubmit}
        className="bg-gray-400 py-2 px-4 rounded-xl text-white"
        type="submit"
      >
        Add
      </button>
    </form>
  );
}

export default Form;
