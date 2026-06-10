export interface TodoDataType {

    title: string,
    id: string,
    description: string,
    date: Date,
    difficulty: "easy" | "medium" | "hard",
    priority: "high" | "low" | "medium",
    category: "work" | "personal" | "urgent",
    state: "pending" | "in-progress" | "completed",
}

export type AllowedUpdateTodoValues = Partial<Omit<TodoDataType, "id">>;

export interface Reminders {
    id: string;
    time: string;
}