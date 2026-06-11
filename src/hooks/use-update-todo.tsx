import { TodoContext } from "../state/todo/todo-context";
import type { AllowedUpdateTodoValues, TodoDataType } from "../type";
import { getData, registerData } from "../utils/utils";
import * as React from "react";

export const useUpdateTodo = () => {
    const { setTodo, todo } = React.useContext(TodoContext);
    const [todos, setTodos] = React.useState<TodoDataType[]>([]);

    React.useEffect(() => {
        const storedTodos = getData("todos") || [];
        setTodos(storedTodos);
    }, [todo]);

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

    // For filter todo
    const filterTodo = (filters: Partial<TodoDataType>): TodoDataType[] => {
        const filteredTodo = todos?.filter(todo =>
            (!filters.title || todo.title.includes(filters.title)) &&
            (!filters.priority?.length || filters.priority.includes(todo.priority)) &&
            (!filters.category?.length || filters.category.includes(todo.category)) &&
            (!filters.difficulty?.length || filters.difficulty.includes(todo.difficulty)) &&
            (!filters.date || todo.date === filters.date)
        );

        return filteredTodo!;
    }

    return { updateTodo, deleteTodo, filterTodo }
}