import { TodoContext } from "../state/todo/todo-context";
import { getData } from "../utils/utils";
import * as React from "react";

export const useGetTodo = (): void => {
    const todos = getData("todos");
    const { setTodo } = React.useContext(TodoContext);
    React.useEffect(() => {
        setTodo(todos === null ? [] : todos);
    }, [])
}