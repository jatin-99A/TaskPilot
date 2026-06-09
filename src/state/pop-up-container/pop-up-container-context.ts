import * as React from "react";

export type ContainerNameType = "registerTodoForm" | "updateTodoForm" | null;

type PopUpContainerContextType = {
    isPopUpcontainerOpen: boolean;
    setIsPopUpContainerOpen: React.Dispatch<React.SetStateAction<boolean>>;
    containerName: ContainerNameType;
    setContainerName: React.Dispatch<React.SetStateAction<ContainerNameType>>
};

export const PopUpContainerContext = React.createContext<PopUpContainerContextType>({
    isPopUpcontainerOpen: false,
    containerName: null,
    setContainerName: () => { },
    setIsPopUpContainerOpen: () => { },
});