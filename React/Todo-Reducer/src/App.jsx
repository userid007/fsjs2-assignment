import { useReducer } from "react";
import Form from "./Components/Form";
import { initialState, reducer } from "./Reducer/tasksReducer";
import Todo from "./Components/Todo";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div className="container mx-auto flex flex-col gap-2 justify-center items-center mt-96">
        {" "}
        <h1 className="text-4xl font-bold">TOOD LIST</h1>
        <Form add={(text) => dispatch({ type: "add", text: text })} />
        {state.tasks.map((t) => (
          <Todo
            key={t.id}
            task={t}
            remove={() => dispatch({ type: "remove", id: t.id })}
            edit={(text) => dispatch({ type: "edit", id: t.id, text: text })}
          />
        ))}
      </div>
    </>
  );
}

export default App;
