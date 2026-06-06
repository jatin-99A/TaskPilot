// UserProvider.js
import * as React from "react";
import { TodoContext } from "./todo-context";
import type { TodoDataType } from "../../type";

export default function TodosProvider({ children }: { children: React.ReactNode }) {
    const [todo, setTodo] = React.useState<TodoDataType[] | []>([]);

    return (
        <TodoContext.Provider value={{ todo, setTodo }}>
            {children}
        </TodoContext.Provider>
    );
}