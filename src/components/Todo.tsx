const Todo = ({ container_name }: { container_name: string }) => {
  return (
    <div className="h-[75vh] w-96 bg-white rounded-lg flex flex-col">
      
      <h1 className="text-yellow-500 text-4xl text-center m-3 font-medium">
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
      <button className=" bg-yellow-500 font-bold text-white/90 p-3.5 hover:bg-yellow-400 transition-all delay-100 cursor-pointer rounded-lg">Add Todo</button>

    </div>
  );
};

export default Todo;