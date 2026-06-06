import { TodoContext } from "../state/todo/todo-context";
import type { TodoDataType } from "../type";
import { getData } from "../utils/utils";
import * as React from "react";

export const useGetTodo = (): void => {
    const todos = getData("todos");
    const { setTodo } = React.useContext(TodoContext);
    React.useEffect(() => {
        setTodo(todos as unknown as TodoDataType[]);
    }, [])
}