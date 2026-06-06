import * as React from "react"
import { PopUpContainerContext } from "../state/pop-up-container/pop-up-container-context";

const PopUpContainer = ({ children }: { children: React.ReactNode }) => {

  const {isPopUpcontainerOpen} = React.useContext(PopUpContainerContext);
  React.useEffect(() => {
    document.body.style.overflow = isPopUpcontainerOpen ? "hidden" : "";
  }, [isPopUpcontainerOpen])
  
  return (
    <div className={`h-full w-full bg-black/80 backdrop-blur-[10px] flex items-center justify-center fixed top-0 left-0 max-h-screen overflow-hidden ${!isPopUpcontainerOpen && 'hidden'}`}>
      {children}
    </div>
  )
}

export default PopUpContainer