import PopUpContainer from "./components/PopUpContainer"
import Todo from "./components/Todo"
import TodoForm from "./components/TodoForm"


const App = () => {
  return (
    <div className="relative">
      <h1 className="text-5xl text-center font-semibold text-white">Todo App</h1>
      <div className="w-full todo-container flex flex-col lg:flex-row items-center gap-5 mt-5 lg:mt-0 lg:justify-around lg:h-[90vh]">
        <Todo container_name="Pending" />  
        <Todo container_name="In-Progress" />  
        <Todo container_name="Completed" />  
      </div>
      {/* <PopUpContainer>
        <TodoForm />  
      </PopUpContainer> */}
    </div>
  )
}

export default App