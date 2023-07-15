export const initialState = {
  counter: 3,
  tasks: [
    {
      id: 1,
      text: "Eat",
    },
    {
      id: 2,
      text: "Sleep",
    },
    {
      id: 3,
      text: "Code",
    },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "add": {
      const newCounter = state.counter + 1;
      const newTask = {
        id: newCounter,
        text: action.text,
      };
      return {
        counter: newCounter,
        tasks: [...state.tasks, newTask],
      };
    }
    case "edit": {
      const idx = state.tasks.findIndex((t) => t.id === action.id);
      const task = Object.assign({}, state.tasks[idx]);
      task.text = action.text;
      const tasks = Object.assign([], state.tasks);
      tasks.splice(idx, 1, task);
      return{
        counter: state.counter,
        tasks: tasks
      }
    }
    case "remove": {
      const idx = state.tasks.findIndex((t) => t.id === action.id);
      const tasks = Object.assign([], state.tasks);
      tasks.splice(idx, 1);
      return {
        counter: state.counter,
        tasks: tasks,
      };
    }
    default:
      return state;
  }
};
