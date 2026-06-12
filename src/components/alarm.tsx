import { X } from "lucide-react";
import alarmPng from "../assets/alarm.png";
import alarmSound from "../assets/alarm-sound.mp3";
import * as React from "react";
import { PopUpContainerContext } from "../state/pop-up-container/pop-up-container-context";

const Alarm = () => {
    const { setIsPopUpContainerOpen, setContainerName, setAlarm, alarm } = React.useContext(PopUpContainerContext);
    const soundRef = React.useRef<HTMLAudioElement>(null);

    const stopAlarm = () => {

        if (soundRef.current) {
            soundRef.current.pause();
            soundRef.current.loop = false;
            soundRef.current = null;
        }

        setContainerName(null);
        setIsPopUpContainerOpen(false);
        setAlarm(false);
    }

    // Handling alarm event
    React.useEffect(() => {
        let id: number;

        if (alarm) {
            soundRef.current = new Audio(alarmSound);
            soundRef.current.loop = true;
            soundRef.current.play();

            id = setTimeout(() => {
                stopAlarm();
            }, 60000);

        }

        return () => {
            if (id !== undefined) {
                clearTimeout(id);
            }

            soundRef.current?.pause();
            soundRef.current = null;
        }
    }, [alarm]);

    const handleAlarmTurnOff = () => {
        stopAlarm();
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