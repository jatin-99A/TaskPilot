import * as React from "react";
import { PopUpContainerContext } from "./pop-up-container-context";

export const PopUpContainerProvider = ({ children }: { children: React.ReactNode }) => {
    const [isPopUpcontainerOpen, setIsPopUpContainerOpen] = React.useState<boolean>(false);
    return (
        <PopUpContainerContext.Provider value={{ isPopUpcontainerOpen, setIsPopUpContainerOpen }}>
            {children}
        </PopUpContainerContext.Provider>
    )
}