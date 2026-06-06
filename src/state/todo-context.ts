import * as React from "react";
import type { TodoDataType } from "../type";

type TodoContextType = {
    todo: TodoDataType[];
    setTodo: React.Dispatch<React.SetStateAction<TodoDataType[]>>;
};

export const TodoContext = React.createContext<TodoContextType>({
    todo: [],
    setTodo: () => { },
});