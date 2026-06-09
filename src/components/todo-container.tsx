import { CircleDot, LayoutList, SquareCheckBig } from "lucide-react";
import { TodoContext } from "../state/todo/todo-context";
import type { TodoDataType } from "../type";
import Task from "./task";
import * as React from "react";

const Todo = ({ container_name }: { container_name: TodoDataType["state"] }) => {
  const { todo } = React.useContext(TodoContext);
  
  // Filter todos in order of state
  let filterTodos = todo !== null ? todo.filter(todo => todo.state === container_name) : [];

  // Handling drag over 
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;

    if (target.id === "todo-container" || target.id === "task") {
      e.preventDefault();

      if (target.id === "task") {
        target.parentElement?.parentElement?.classList.add("!border-2", "!border-sky-400");
      } else {
        target.parentElement?.classList.add("!border-2", "!border-sky-400");
      }
    }
  }

  // Handling drag leave
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;

    if (target.id === "todo-container" || target.id === "task") {
      if (target.id === "task") {
        target.parentElement?.parentElement?.classList.remove("!border-2", "!border-sky-400");
      } else {
        target.parentElement?.classList.remove("!border-2", "!border-sky-400");
      }
    }
  }

  return (
    <div id="card" onDragOver={handleDragOver} onDragLeave={handleDragLeave} className="h-[75vh] w-[90vw] lg:w-[30vw] bg-white/5 backdrop-blur-xl rounded-xl flex flex-col border border-white/20 p-4 m-3">

      <h1 className={`text-white text-[1.65rem] text-left mb-3 ml-2 font-semibold flex gap-1.5`}>
        {
          (
            <>
              {container_name === "pending" && <LayoutList className={`${container_name === "pending" && "text-sky-400 relative top-2.5 mr-1"}`} />}
              {container_name === "in-progress" && <CircleDot className={`${container_name === "in-progress" && "text-yellow-400 relative top-2.5 mr-1"}`} />}
              {container_name === "completed" && <SquareCheckBig className={`${container_name === "completed" && "text-green-400 relative top-2.5 mr-1"}`} />}
            </>
          )
        }
        {container_name}
      </h1>

      <div id="todo-container" className="flex-1 p-1 flex flex-col gap-2 overflow-y-auto todo-container">
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




