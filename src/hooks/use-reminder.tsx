import type { Reminders } from "../type";


export const useReminder = () => {
    const key = "reminders";
    const reminders = JSON.parse(localStorage.getItem(key) ?? "[]");

    function getAllReminder() {
        if (!reminders) {
            localStorage.setItem(key, JSON.stringify([]));
            return [];
        }

        return reminders
    }

    function setAllReminder(data: Reminders) {
        if (reminders) {
            localStorage.setItem(key, JSON.stringify([...reminders, data]));
        } else {
            localStorage.setItem(key, JSON.stringify([data]));
        }
    }

    return { getAllReminder, setAllReminder }
}
