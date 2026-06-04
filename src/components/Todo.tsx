const Todo = ({ container_name }: { container_name: string }) => {
  return (
    <div className="h-[75vh] w-96 bg-white rounded-lg flex flex-col">
      
      <h1 className="text-yellow-500 text-3xl text-center m-3 font-medium">
        {container_name}
      </h1>

      <div className="flex-1 p-1 flex flex-col gap-2 overflow-y-auto">
        <div className="w-full min-h-[10%] bg-yellow-300/25">1 todo</div>
        <div className="w-full min-h-[10%] bg-yellow-300/25">1 todo</div>
        <div className="w-full min-h-[10%] bg-yellow-300/25">1 todo</div>
        <div className="w-full min-h-[10%] bg-yellow-300/25">1 todo</div>
        <div className="w-full min-h-[10%] bg-yellow-300/25">1 todo</div>
        <div className="w-full min-h-[10%] bg-yellow-300/25">1 todo</div>
        <div className="w-full min-h-[10%] bg-yellow-300/25">1 todo</div>
        <div className="w-full min-h-[10%] bg-yellow-300/25">1 todo</div>
        <div className="w-full min-h-[10%] bg-yellow-300/25">1 todo</div>
        <div className="w-full min-h-[10%] bg-yellow-300/25">1 todo</div>
        <div className="w-full min-h-[10%] bg-yellow-300/25">1 todo</div>
        <div className="w-full min-h-[10%] bg-yellow-300/25">1 todo</div>
        <div className="w-full min-h-[10%] bg-yellow-300/25">1 todo</div>
        <div className="w-full min-h-[10%] bg-yellow-300/25">1 todo</div>
        <div className="w-full min-h-[10%] bg-yellow-300/25">1 todo</div>
        <div className="w-full min-h-[10%] bg-yellow-300/25">1 todo</div>
        <div className="w-full min-h-[10%] bg-yellow-300/25">1 todo</div>
        <div className="w-full min-h-[10%] bg-yellow-300/25">1 todo</div>
        <div className="w-full min-h-[10%] bg-yellow-300/25">1 todo</div>
        <div className="w-full min-h-[10%] bg-yellow-300/25">1 todo</div>
        <div className="w-full min-h-[10%] bg-yellow-300/25">1 todo</div>
        <div className="w-full min-h-[10%] bg-yellow-300/25">1 todo</div>
      </div>
    </div>
  );
};

export default Todo;