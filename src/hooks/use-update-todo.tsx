import { TodoContext } from "../state/todo/todo-context";
import type { AllowedUpdateTodoValues, TodoDataType } from "../type";
import { getData, registerData } from "../utils/utils";
import * as React from "react";

export const useUpdateTodo = () => {
    const { setTodo } = React.useContext(TodoContext);
    let todos = getData("todos");

    // For update todo
    const updateTodo = (id: TodoDataType["id"], data: AllowedUpdateTodoValues) => {
        const updatedTodo = todos?.map(todo =>
            todo.id === id ? {
                ...todo,
                title: data.title ? data.title : todo.title,
                description: data.description ? data.description : todo.description,
                date: data.date ? data.date : todo.date,
                difficulty: data.difficulty ? data.difficulty : todo.difficulty,
                priority: data.priority ? data.priority : todo.priority,
                category: data.category ? data.category : todo.category,
                state: data.state ? data.state : todo.state,
            } : todo
        ) as TodoDataType[];


        setTodo(updatedTodo);
        registerData("todos", updatedTodo);
    }

    // For delete todo
    const deleteTodo = (id: TodoDataType["id"]) => {
        const updatedTodo = todos?.filter(todo => todo.id !== id);
        setTodo(updatedTodo!);
        registerData("todos", updatedTodo!);
    }

    return { updateTodo, deleteTodo }
}