import * as React from "react";

type PopUpContainerContextType = {
    isPopUpcontainerOpen: boolean;
    setIsPopUpContainerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PopUpContainerContext = React.createContext<PopUpContainerContextType>({
    isPopUpcontainerOpen: false,
    setIsPopUpContainerOpen: () => { },
});