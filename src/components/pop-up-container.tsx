import * as React from "react"

const PopUpContainer = ({ isPopUpContaineerOpen, children }: { children: React.ReactNode, isPopUpContaineerOpen: boolean }) => {

  React.useEffect(() => {
    document.body.style.overflow = isPopUpContaineerOpen ? "hidden" : "";
  }, [isPopUpContaineerOpen])
  
  return (
    <div className={`h-full w-full bg-black/80 backdrop-blur-[10px] flex items-center justify-center fixed top-0 left-0 max-h-screen overflow-hidden ${!isPopUpContaineerOpen && 'hidden'}`}>
      {children}
    </div>
  )
}

export default PopUpContainer