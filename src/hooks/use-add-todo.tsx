import { TodoContext } from "../state/todo/todo-context";
import type { TodoDataType } from "../type";
import { getData, registerData } from "../utils/utils";
import * as React from "react";

export const useAddTodo = () => {
    const { setTodo } = React.useContext(TodoContext);

    const addTodo = (data: TodoDataType) => {
        let todos = getData("todos") || [];

        // Add additional properties
        data.id = Date.now() + data.title;
        data.state = "pending";

        // Add the new todo to the existing list 
        todos.push(data);

        // Register the updated list and update the state
        registerData("todos", todos);
        setTodo(todos);
    };

    return { addTodo };
};