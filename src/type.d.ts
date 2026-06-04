export interface TodoDataType {
    
    title: string,
    description: string,
    date: Date | "",
    difficulty: "easy" | "medium" | "hard",
    priority: "high" | "low" | "moderate",
    category: "work"| "personal"| "urgent",
    
} 