import { Calendar, Pencil, Trash } from "lucide-react"
import type { TodoDataType } from "../type"
import * as React from "react"


const Task = ({ title, description, difficulty, priority, category, date, id }: Pick<TodoDataType, "title" | "difficulty" | "priority" | "description" | "category" | "date" | "id">) => {

    // console.log(new Date(date).getTime())
    date = new Date(date).toLocaleString() as unknown as Date;
    title = title.toUpperCase();

    return (
        <div draggable id="task" className="w-full p-2.5 bg-[#BFBAA8] rounded-xl border border-white/60">
            <div className="flex justify-between">
                <aside><h1 className={`font-medium`}>{title}</h1></aside>
                <aside className="flex">
                    <Pencil className="cursor-pointer hover:bg-black/10 p-1 rounded-md" />
                    <Trash className="text-red-500 cursor-pointer hover:bg-red-500/10 p-1 rounded-md" />
                </aside>
            </div>
            <p className="text-[14px] text-black/70 mt-2 leading-6">{description}</p>
            <div>
                <h3 className="font-medium text-[14px] text-purple-600 p-1 rounded-lg bg-purple-400/20 mt-1">Difficulty : <span className="font-normal">{difficulty}</span></h3>
                <h3 className="font-medium text-[14px] text-green-600 p-1 rounded-lg bg-green-400/20 mt-1">Priority : <span className="font-normal">{priority}</span></h3>
                <h3 className="font-medium text-[14px] text-yellow-600 p-1 rounded-lg bg-yellow-400/20 mt-1">Category : <span className="font-normal">{category}</span></h3>
            </div>

            <p className="m-1 text-black/60 text-[0.9rem] px-2 py-1.5 rounded-lg bg-black/10 flex gap-2"><Calendar />{date as unknown as string}</p>
            <span id={id}></span>
        </div>
    )
}

export default Task