import { TodoContext } from "../state/todo-context";
import Task from "./task";
import * as React from "react";

const Todo = ({ container_name }: { container_name: string }) => {
  const { todo } = React.useContext(TodoContext);
  return (
    <div className="h-[75vh] w-96 bg-white/5 backdrop-blur-xl rounded-xl flex flex-col border border-white/20 p-4">

      <h1 className="text-white text-[1.65rem] text-left mb-3 ml-2 font-semibold">
        {container_name}
      </h1>

      <div className="flex-1 p-1 flex flex-col gap-2 overflow-y-auto">
        {todo.map((task) => (
          <Task
            key={task.id}
            date={task.date}
            title={task.title}
            description={task.description}
            difficulty={task.difficulty}
            priority={task.priority}
            category={task.category}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;