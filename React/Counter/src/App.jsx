import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center gap-10 bg-[#242424]">
        {" "}
        <h1 className="text-white text-4xl">Count is {count}</h1>
        <div>
          <button
            className="bg-white px-5 py-2 rounded-lg mr-4"
            onClick={() => setCount((count) => count + 1)}
          >
            Increment
          </button>
          <button
            className="bg-white px-5 py-2 rounded-lg"
            onClick={() => setCount((count) => count - 1)}
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
