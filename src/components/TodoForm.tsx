/*

todos 

title
description
date and time
priority [high, low, medium]
difficulty level [easy, medium, hard]
category [work, personal, urgent]

*/

import { useState } from "react"
import type { TodoDataType } from "../type";

const TodoForm = () => {
    const [data, setData] = useState<TodoDataType>({
        title: "",
        description: "",
        date: "",
        difficulty: "",
        priority: "",
        category: "",
    });

    const inputClass = "w-full px-3 py-2 rounded-md border border-yellow-400/40 bg-yellow-50/30 text-yellow-900 placeholder-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400";


    return (
        <form className="w-full md:w-[70vw] lg:w-[60vw] bg-white rounded-lg flex flex-col justify-center gap-5 items-center p-6">
            <h1 className="text-3xl font-bold">Register Todo</h1>

            <input className={inputClass} type="text" placeholder="title" name="title" />

            <input className={inputClass} type="text" placeholder="description" name="description" />

            <input className={inputClass + " w-full"} type="datetime-local" id="date" name="date" />

            <div className="w-full flex flex-col gap-4">

                {/* Difficulty */}
                <div>
                    <p className="font-semibold mb-2">Difficulty</p>
                    <div className="flex gap-4">
                        <label className="flex items-center gap-1">
                            <input type="radio" name="difficulty" value="easy" className="accent-yellow-400" />
                            Easy
                        </label>

                        <label className="flex items-center gap-1">
                            <input type="radio" name="difficulty" value="medium" className="accent-yellow-400" />
                            Medium
                        </label>

                        <label className="flex items-center gap-1">
                            <input type="radio" name="difficulty" value="hard" className="accent-yellow-400" />
                            Hard
                        </label>
                    </div>
                </div>

                {/* Priority */}
                <div>
                    <p className="font-semibold mb-2">Priority</p>
                    <div className="flex gap-4">
                        <label className="flex items-center gap-1">
                            <input type="radio" name="priority" value="high" className="accent-yellow-400" />
                            High
                        </label>

                        <label className="flex items-center gap-1">
                            <input type="radio" name="priority" value="medium" className="accent-yellow-400" />
                            Medium
                        </label>

                        <label className="flex items-center gap-1">
                            <input type="radio" name="priority" value="low" className="accent-yellow-400" />
                            Low
                        </label>
                    </div>
                </div>

                {/* Category */}
                <div>
                    <p className="font-semibold mb-2">Category</p>
                    <div className="flex gap-4">
                        <label className="flex items-center gap-1">
                            <input type="radio" name="category" value="work" className="accent-yellow-400" />
                            Work
                        </label>

                        <label className="flex items-center gap-1">
                            <input type="radio" name="category" value="personal" className="accent-yellow-400" />
                            Personal
                        </label>

                        <label className="flex items-center gap-1">
                            <input type="radio" name="category" value="urgent" className="accent-yellow-400" />
                            Urgent
                        </label>
                    </div>
                </div>

            </div>
        </form>
    )
}

export default TodoForm