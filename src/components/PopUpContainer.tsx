
const PopUpContainer = ({isPopUpContaineerOpen ,children}: {children: React.ReactNode,  isPopUpContaineerOpen: boolean}) => {
  return (
    <div className={`h-full w-full bg-black/80 flex items-center justify-center fixed top-0 left-0 max-h-screen overflow-hidden ${!isPopUpContaineerOpen && 'hidden'}`}>
        {children}
    </div>
  )
}

export default PopUpContainer