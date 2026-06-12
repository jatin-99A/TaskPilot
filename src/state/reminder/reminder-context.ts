import * as React from "react";

type ReminderContextType = {
    reminders: Map<string, number>;
    setReminder: (id: string, time: number) => void;
    removeReminder: (id: string) => void;
};

export const ReminderContext = React.createContext<ReminderContextType>({
    reminders: new Map<string, number>(),
    setReminder: () => { },
    removeReminder: () => { },
});