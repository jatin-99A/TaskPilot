import PopUpContainer from "./components/pop-up-container"
import Todo from "./components/todo-container"
import * as React from "react"
import { Plus, X } from "lucide-react"
import { useGetTodo } from "./hooks/use-get-todo"
import { PopUpContainerContext } from "./state/pop-up-container/pop-up-container-context"
import { useUpdateTodo } from "./hooks/use-update-todo"
import type { TodoDataType } from "./type"
import FilterAndSearch from "./components/filter-search"
import { TodoContext } from "./state/todo/todo-context"
import { useReminder } from "./hooks/use-reminder"
import { ReminderContext } from "./state/reminder/reminder-context"


const App = () => {
  const { setIsPopUpContainerOpen, setContainerName } = React.useContext(PopUpContainerContext);
  const { filteredTodo, setFilteredTodo } = React.useContext(TodoContext);
  const [taskElement, setTaskElement] = React.useState<HTMLElement | null>(null);
  const { updateTodo } = useUpdateTodo();
  const { getAllReminders, reminderTimer } = useReminder();
  const { reminders } = React.useContext(ReminderContext);
  const [alarm, setAlarm] = React.useState<boolean>(false);

  React.useEffect(() => {
    getAllReminders()
  }, [])

  // Running timer interval if we have any reminders
  React.useEffect(() => {
    reminderTimer(setAlarm);
    console.log("Alarm : ", alarm);
  }, [reminders])


  // Fetch all the data
  useGetTodo();

  // Handling add todo
  const handleAddTodo = () => {
    setContainerName("registerTodoForm");
    setIsPopUpContainerOpen(true);
  }

  // Handling drag start
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;

    if (target.id === "task") {
      target.classList.add("opacity-10");
      setTaskElement(target);
    }
  }

  // Handling drag end
  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;

    if (target.id === "task") {
      target.classList.remove("opacity-10");
      setTaskElement(null);
    }
  }

  // Handling drag drop
  const handleDragDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;

    if (taskElement && target.id === "todo-container") {
      const state = (target.previousElementSibling as HTMLElement)?.innerText as TodoDataType["state"];
      const todoId = (taskElement.lastChild as HTMLElement).id
      updateTodo(todoId, { state })

      target.parentElement?.classList.remove("!border-2", "!border-sky-400");
    }
  }

  // Handling remove filters 
  const handleRemoveFilters = () => {
    setFilteredTodo([]);
  }


  return (
    <div
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      onDrop={handleDragDrop}
      className="relative h-full w-full bg-linear-to-r from-slate-950 to-slate-900 p-3.5"
    >
      <div className="h-40 w-40 shadow-[0_0_700px_200px_rgba(59,130,246,0.3)] fixed left-0 -translate-x-full "></div>
      <div className="h-40 w-40 shadow-[0_0_700px_200px_rgba(236,72,153,0.18)] fixed bottom-0 left-1/2 translate-y-full "></div>
      <h1 className="text-5xl font-bold text-white text-left m-3.5 -mb-3.5">TaskPilot</h1>
      <div className="flex justify-end px-4" >
        <div onClick={handleAddTodo} className="p-2 w-fit rounded-full border-2 border-sky-400 cursor-pointer hover:bg-sky-400/20 transition-all duration-75" >
          <Plus className="text-sky-400" />
        </div>
      </div>
      <FilterAndSearch />
      <div className="w-full todo-container flex flex-col lg:flex-row items-center gap-5 lg:mt-0 lg:justify-around lg:h-[90vh]">
        <Todo isDraggable={true} container_name="pending" />
        <Todo isDraggable={true} container_name="in-progress" />
        <Todo isDraggable={true} container_name="completed" />
      </div>

      // Filtered Todo render if its length !== 0;
      {
        filteredTodo.length !== 0 && (
          <div className="absolute top-0 backdrop-blur-xl w-full min-h-full -mx-3.5">
            <div className="ml-6 my-6 flex justify-between">
              <h1 className="text-white text-2xl md:text-5xl">Filtered Tasks</h1>
              <button onClick={handleRemoveFilters} className="flex text-slate-400 cursor-pointer border border-sky-400/80 p-2 md:p-4 rounded-lg mr-1 md:mr-3.5 lg:mr-6">
                <X className="text-red-400 mr-1" />
                Remove filters
              </button>
            </div>
            <div className="h-full w-full flex flex-col items-center justify-around lg:flex-row">
              <Todo container_name="pending" isDraggable={false} isTodoFilterContainer={true} />
              <Todo container_name="in-progress" isDraggable={false} isTodoFilterContainer={true} />
              <Todo container_name="completed" isDraggable={false} isTodoFilterContainer={true} />
            </div>
          </div>
        )
      }

      // PopUp container
      <PopUpContainer />
    </div>
  )
}

export default App