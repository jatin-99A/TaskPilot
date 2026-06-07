import PopUpContainer from "./components/pop-up-container"
import Todo from "./components/todo-container"
import AddTodoForm from "./components/register-todo"
import * as React from "react"
import { Plus } from "lucide-react"
import { useGetTodo } from "./hooks/use-get-todo"
import { PopUpContainerContext } from "./state/pop-up-container/pop-up-container-context"


const App = () => {
    const { setIsPopUpContainerOpen } = React.useContext(PopUpContainerContext);

  useGetTodo();

  return (
    <div className="relative h-full w-full bg-linear-to-r from-slate-950 to-slate-900 p-3.5">
      <div className="h-40 w-40 shadow-[0_0_700px_200px_rgba(59,130,246,0.3)] fixed left-0 -translate-x-full "></div>
      <div className="h-40 w-40 shadow-[0_0_700px_200px_rgba(236,72,153,0.18)] fixed bottom-0 left-1/2 translate-y-full "></div>
      <h1 className="text-5xl font-bold text-white text-left m-3.5 -mb-3.5">TaskPilot</h1>
      <div className="flex justify-end px-4" >
        <div className="p-2 w-fit rounded-full border-2 border-sky-400 cursor-pointer hover:bg-sky-400/20 transition-all duration-75" onClick={() => setIsPopUpContainerOpen(true)}>
          <Plus className="text-sky-400" />
        </div>
      </div>
      <div className="w-full todo-container flex flex-col lg:flex-row items-center gap-5 lg:mt-0 lg:justify-around lg:h-[90vh]">
        <Todo container_name="pending" />
        <Todo container_name="in-progress" />
        <Todo container_name="completed" />
      </div>
      <PopUpContainer>
        <AddTodoForm />
      </PopUpContainer>
    </div>
  )
}

export default App