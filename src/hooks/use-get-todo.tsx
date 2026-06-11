import { TodoContext } from "../state/todo/todo-context";
import { getData } from "../utils/utils";
import * as React from "react";

export const useGetTodo = (): void => {
    const { setTodo } = React.useContext(TodoContext);
    React.useEffect(() => {
        const todos = getData("todos");
        setTodo(todos === null ? [] : todos);
    }, [])
}