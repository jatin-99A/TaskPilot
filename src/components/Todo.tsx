import Task from "./Task";

const Todo = ({ container_name }: { container_name: string }) => {
  return (
    <div className="h-[75vh] w-96 bg-white/5 backdrop-blur-xl rounded-xl flex flex-col border border-white/20 p-4">

      <h1 className="text-white text-[1.65rem] text-left mb-3 ml-2 font-semibold">
        {container_name}
      </h1>

      <div className="flex-1 p-1 flex flex-col gap-2 overflow-y-auto">
        <Task 
        title="Implement User Login"
        description="Add JWT login flow and registration endpoint for secure access"
        />
        <Task 
        title="Implement User Login"
        description="Add JWT login flow and registration endpoint for secure access"
        />
        <Task 
        title="Implement User Login"
        description="Add JWT login flow and registration endpoint for secure access"
        />
        <Task 
        title="Implement User Login"
        description="Add JWT login flow and registration endpoint for secure access"
        />
        <Task 
        title="Implement User Login"
        description="Add JWT login flow and registration endpoint for secure access"
        />
        <Task 
        title="Implement User Login"
        description="Add JWT login flow and registration endpoint for secure access"
        />
      </div>
    </div>
  );
};

export default Todo;