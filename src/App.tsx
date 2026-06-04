import PopUpContainer from "./components/PopUpContainer"
import Todo from "./components/Todo"
import AddTodoForm from "./components/AddTodoForm"
import * as React from "react"
import { Plus } from "lucide-react"


const App = () => {
  const [isPopUpContainerOpen, setIsPopUpContainerOpen] = React.useState<boolean>(false);

  return (
    <div className="relative">
      <h1 className="text-5xl text-center font-semibold text-white underline">TaskPilot</h1>
      <div className="flex justify-end px-4" >
        <div className="p-2 w-fit rounded-full border border-sky-400 cursor-pointer hover:bg-sky-400/20 transition-all duration-75" onClick={() => setIsPopUpContainerOpen(!isPopUpContainerOpen)}>
          <Plus className="text-sky-400" />
        </div>
      </div>
      <div className="w-full todo-container flex flex-col lg:flex-row items-center gap-5 mt-5 lg:mt-0 lg:justify-around lg:h-[90vh]">
        <Todo container_name="Pending" />
        <Todo container_name="In-Progress" />
        <Todo container_name="Completed" />
      </div>
      <PopUpContainer isPopUpContaineerOpen={isPopUpContainerOpen}>
        <AddTodoForm />
      </PopUpContainer>
    </div>
  )
}

export default App