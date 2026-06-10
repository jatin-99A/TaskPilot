import * as React from "react";
import type { TodoDataType } from "../../type";

type TodoContextType = {
    todo: TodoDataType[];
    setTodo: React.Dispatch<React.SetStateAction<TodoDataType[]>>;
    selectedTodoId: string | null;
    setSelectedTodoId: React.Dispatch<React.SetStateAction<string | null>>;
    filteredTodo: Partial<TodoDataType>[];
    setFilteredTodo: React.Dispatch<React.SetStateAction<Partial<TodoDataType>[]>>
};

export const TodoContext = React.createContext<TodoContextType>({
    todo: [],
    setTodo: () => { },
    selectedTodoId: null,
    setSelectedTodoId: () => { },
    filteredTodo: [],
    setFilteredTodo: () => { },
});