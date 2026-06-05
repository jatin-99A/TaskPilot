import type { ResponseType, TodoDataType } from "../type";
import { registerData } from "../utils/utils";

export const useRegisterTodo = (data: TodoDataType):ResponseType => {
    registerData("todo", data);

    return { success: true }
}