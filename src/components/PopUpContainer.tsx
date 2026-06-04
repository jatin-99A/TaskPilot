
const PopUpContainer = ({children}: {children: React.ReactNode }) => {
  return (
    <div className="h-full w-full bg-red-300 flex items-center justify-center fixed top-0 left-0 max-h-screen overflow-hidden ">
        {children}
    </div>
  )
}

export default PopUpContainer