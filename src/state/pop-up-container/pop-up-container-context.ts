import * as React from "react";

export type ContainerNameType = "registerTodoForm" | "updateTodoForm" | "alarm" | null;

type PopUpContainerContextType = {
    isPopUpcontainerOpen: boolean;
    setIsPopUpContainerOpen: React.Dispatch<React.SetStateAction<boolean>>;
    containerName: ContainerNameType;
    setContainerName: React.Dispatch<React.SetStateAction<ContainerNameType>>;
    alarm: boolean;
    setAlarm: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PopUpContainerContext = React.createContext<PopUpContainerContextType>({
    isPopUpcontainerOpen: false,
    containerName: null,
    setContainerName: () => { },
    setIsPopUpContainerOpen: () => { },
    alarm: false,
    setAlarm: () => { },
});