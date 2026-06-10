import { ReminderContext } from "./reminder-context";
import * as React from "react";


export const ReminderProvider = ({ children }: { children: React.ReactNode }) => {
    const [reminders, setReminders] = React.useState<Map<string, number>>(new Map());

    const setReminder = (id: string, time: number) => {
        setReminders(prev => {
            const next = new Map(prev);
            next.set(id, time);
            return next;
        });
    };

    const removeReminder = (id: string) => {
        setReminders(prev => {
            const next = new Map(prev);
            next.delete(id);
            return next;
        });
    };

    return (
        <ReminderContext.Provider value={{ reminders, setReminder, removeReminder }}>
            {children}
        </ReminderContext.Provider>
    );
};