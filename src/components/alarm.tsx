import { X } from "lucide-react";
import alarmPng from "../assets/alarm.png";
import * as React from "react";
import { PopUpContainerContext } from "../state/pop-up-container/pop-up-container-context";

const Alarm = () => {
    const { setIsPopUpContainerOpen, setContainerName, setAlarm, alarm } = React.useContext(PopUpContainerContext);
    // Handling alarm event
    React.useEffect(() => {
        let id: number;

        if (alarm) {
            id = setTimeout(() => {
                setContainerName(null);
                setIsPopUpContainerOpen(false);
                setAlarm(false);

            }, 60000);

        }

        return () => {
            if (id !== undefined) {
                clearTimeout(id);
            }
        }
    }, [alarm]);

    const handleAlarmTurnOff = () => {
        setContainerName(null);
        setIsPopUpContainerOpen(false);
        setAlarm(false);
    }

    return (
        <div className="relative w-[95vw] md:w-[50vw] lg:w-[40vw] m-3 text-white bg-transparent border border-white/20">
            <img src={alarmPng} alt="Alarm" />

            <button
                onClick={handleAlarmTurnOff}
                className="text-red-400 border-2 border-red-500 p-2 px-6 text-[1.25rem] absolute top-1 left-1 cursor-pointer flex gap-1">
                <X className="my-[0.370rem]" />
                Stop
            </button>
        </div>
    );
};

export default Alarm;