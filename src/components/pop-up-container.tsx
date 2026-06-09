import * as React from "react"
import { PopUpContainerContext } from "../state/pop-up-container/pop-up-container-context";
import AddTodoForm from "./register-todo";

const PopUpContainer = () => {

  const { isPopUpcontainerOpen, containerName } = React.useContext(PopUpContainerContext);
  React.useEffect(() => {
    document.body.style.overflow = isPopUpcontainerOpen ? "hidden" : "";
  }, [isPopUpcontainerOpen])

  return (
    <div className={`h-full w-full bg-black/80 backdrop-blur-[10px] flex items-center justify-center fixed top-0 left-0 max-h-screen overflow-hidden ${!isPopUpcontainerOpen && 'hidden'}`}>
      {containerName === "updateTodoForm" && <AddTodoForm isUpdateForm={true} />}
      {containerName === "registerTodoForm" && <AddTodoForm />}
    </div>
  )
}

export default PopUpContainer