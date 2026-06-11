import { ReminderContext } from "../state/reminder/reminder-context";
import type { Reminders } from "../type";
import * as React from "react";


export const useReminder = () => {
    const { setReminder, removeReminder, reminders } = React.useContext(ReminderContext);
    const key = "reminders";


    //For get all persist data from localStorage It will run only first time when application will load

    function getAllReminders() {
        const data = localStorage.getItem(key);
        let parseData: Reminders[]

        // If data is null set empty array in the localstorage by make it json
        if (!data) {
            localStorage.setItem(key, JSON.stringify([]));
            return [];
        } else {
            parseData = JSON.parse(data);
        }

        // If we get data then set all the reminders in reminders-state(which is hashMap)
        parseData.forEach(reminder => {
            setReminder(reminder.id, reminder.time);
        });
    }


    // For set reminders we are getting id, and time as an argument and updating data into the localStorage and set reminder state as well
    function setReminders(id: string, time: number) {

        const data = localStorage.getItem(key);
        let parseData: Reminders[] = JSON.parse(data ? data : "[]");

        parseData.push({ id, time });

        localStorage.setItem(key, JSON.stringify(parseData));
        setReminder(id, time);
    }


    // For removing reminders
    function removeReminders(id: string) {
        const data = localStorage.getItem(key);
        const parseData: Reminders[] = JSON.parse(data ? data : "[]");

        if (parseData.length !== 0) {
            const updatedData = parseData.filter((reminder) => reminder.id !== id);
            localStorage.setItem(key, JSON.stringify(updatedData));
            removeReminder(id);
        }
    }

    // Timer only call when reminders are exists 
    const intervalRef = React.useRef<number>(null);
    function reminderTimer(setAlarm: React.Dispatch<React.SetStateAction<boolean>>): void {

        if (reminders.size !== 0) {
            const data = localStorage.getItem(key);
            const parseData: Reminders[] = JSON.parse(data!);

            intervalRef.current = setInterval(() => {
                parseData.forEach(rem => {
                    if (Date.now() >= rem.time) {
                        setAlarm(true);
                        removeReminders(rem.id);
                    }
                    console.log("Timer : ", Date.now())
                })
            }, 3000);

        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        }
    }

    return { getAllReminders, setReminders, removeReminders, reminderTimer }
}
