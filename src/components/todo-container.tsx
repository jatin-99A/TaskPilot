import { TodoContext } from "../state/todo/todo-context";
import type { TodoDataType } from "../type";
import Task from "./task";
import * as React from "react";

const Todo = ({ container_name }: { container_name: TodoDataType["state"] }) => {
  const { todo } = React.useContext(TodoContext);
  const filterTodos = todo.filter(todo => todo.state === container_name);
  console.log(filterTodos)
  return (
    <div className="h-[75vh] w-96 bg-white/5 backdrop-blur-xl rounded-xl flex flex-col border border-white/20 p-4">

      <h1 className="text-white text-[1.65rem] text-left mb-3 ml-2 font-semibold">
        {container_name}
      </h1>

      <div className="flex-1 p-1 flex flex-col gap-2 overflow-y-auto todo-container">
        {filterTodos.map((task) => (
          <Task
            key={task.id}
            {...task}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;