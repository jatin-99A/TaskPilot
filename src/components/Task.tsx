import { Pencil, Trash } from "lucide-react"
import type { TodoDataType } from "../type"


const Task = ({title, description, difficulty, priority, category}: TodoDataType) => {
  return (
    <div className="w-full p-2.5 bg-[#BFBAA8] rounded-xl border border-white/60">
        <div className="flex justify-between">
            <aside><h1 className="font-medium">{title}</h1></aside>
            <aside className="flex">
                <Pencil className="cursor-pointer hover:bg-black/10 p-1 rounded-md"/>
                <Trash className="text-red-500 cursor-pointer hover:bg-red-500/10 p-1 rounded-md"/>
            </aside>
        </div>
        <p className="text-[14px] text-black/70 mt-2 leading-6">{description}</p>
        <div>
            <h3>Difficulty: <span>{difficulty}</span></h3>
            <h3>Priority: <span>{priority}</span></h3>
            <h3>Category: <span>{category}</span></h3>
        </div>
        
    </div>
  )
}

export default Task