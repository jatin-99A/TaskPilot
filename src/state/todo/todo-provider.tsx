// UserProvider.js
import * as React from "react";
import { TodoContext } from "./todo-context";
import type { TodoDataType } from "../../type";

export default function TodosProvider({ children }: { children: React.ReactNode }) {
    const [todo, setTodo] = React.useState<TodoDataType[] | []>([]);
    const [selectedTodoId, setSelectedTodoId] = React.useState<string | null>(null);

    return (
        <TodoContext.Provider value={{ todo, setTodo, selectedTodoId, setSelectedTodoId }}>
            {children}
        </TodoContext.Provider>
    );
}