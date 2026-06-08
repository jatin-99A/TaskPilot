import { TodoContext } from "../state/todo/todo-context";
import type { AllowedUpdateTodoValues, TodoDataType } from "../type";
import { getData, registerData } from "../utils/utils";
import * as React from "react";

export const useUpdateTodo = () => {
    const { setTodo } = React.useContext(TodoContext);
    let todos = getData("todos");

    const updateTodo = (id: TodoDataType["id"], data: AllowedUpdateTodoValues) => {
        const updatedTodo = todos?.map(todo =>
            todo.id === id ? { ...todo, ...data } : todo
        ) as TodoDataType[];


        registerData("todos", updatedTodo);
        setTodo(updatedTodo);
    }

    return { updateTodo }
}