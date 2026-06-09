import * as React from "react";
import { PopUpContainerContext, type ContainerNameType } from "./pop-up-container-context";

export const PopUpContainerProvider = ({ children }: { children: React.ReactNode }) => {
    const [isPopUpcontainerOpen, setIsPopUpContainerOpen] = React.useState<boolean>(false);
    const [containerName, setContainerName] = React.useState<ContainerNameType>(null);
    return (
        <PopUpContainerContext.Provider value={{ isPopUpcontainerOpen, setIsPopUpContainerOpen, containerName, setContainerName }}>
            {children}
        </PopUpContainerContext.Provider>
    )
}