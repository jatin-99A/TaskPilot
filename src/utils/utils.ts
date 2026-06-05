import type { ResponseType, TodoDataType } from "../type"

export const registerData = (key: string, data: TodoDataType): ResponseType => {
    const json = JSON.stringify(data);
    localStorage.setItem(key, json as unknown as string);
    return { success: true };
}

export const getData = (key: string): TodoDataType | null => {
    const json = localStorage.getItem(key);
    if (json) {
        return JSON.parse(json);
    }
    return null;
}