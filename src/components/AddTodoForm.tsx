import * as React from "react"
import type { TodoDataType } from "../type";

const AddTodoForm = () => {
    const [data, setData] = React.useState<TodoDataType | null>(null);

    const inputClass = "w-full px-3 py-2 rounded-md border border-yellow-400/40 bg-yellow-50/30 text-yellow-900 placeholder-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400";


    return (
        <form className="w-full md:w-[70vw] lg:w-[60vw] bg-white rounded-lg flex flex-col justify-center gap-5 items-center p-6">
            <h1 className="text-3xl font-bold">Register Todo</h1>

            {/* Title */}
            <input className={inputClass} type="text" placeholder="title" name="title" />

            {/* Description */}
            <input className={inputClass} type="text" placeholder="description" name="description" />

            {/* Date and Time */}
            <input className={inputClass + " w-full"} type="datetime-local" id="date" name="date" />

            {/* Difficulty */}
            <div className="w-full flex flex-col gap-4">

                <div>
                    <p className="font-semibold mb-2 text-yellow-400">Difficulty</p>
                    <div className="flex justify-around text-yellow-400 p-2  rounded-md border border-yellow-400/40 bg-yellow-50/30 ">
                        <label className="flex items-center gap-1">
                            <input type="radio" name="difficulty" value="easy" className="" />
                            Easy
                        </label>

                        <label className="flex items-center gap-1">
                            <input type="radio" name="difficulty" value="medium" className="" />
                            Medium
                        </label>

                        <label className="flex items-center gap-1">
                            <input type="radio" name="difficulty" value="hard" className="" />
                            Hard
                        </label>
                    </div>
                </div>

                {/* Priority */}
                <div>
                    <p className="font-semibold mb-2 text-yellow-400">Priority</p>
                    <div className="flex justify-around text-yellow-400 p-2  rounded-md border border-yellow-400/40 bg-yellow-50/30 ">
                        <label className="flex items-center gap-1">
                            <input type="radio" name="priority" value="high" className="" />
                            High
                        </label>

                        <label className="flex items-center gap-1">
                            <input type="radio" name="priority" value="medium" className="" />
                            Medium
                        </label>

                        <label className="flex items-center gap-1">
                            <input type="radio" name="priority" value="low" className="" />
                            Low
                        </label>
                    </div>
                </div>

                {/* Category */}
                <div>
                    <p className="font-semibold mb-2 text-yellow-400">Category</p>
                    <div className="flex justify-around text-yellow-400 p-2  rounded-md border border-yellow-400/40 bg-yellow-50/30 ">
                        <label className="flex items-center gap-1">
                            <input type="radio" name="category" value="work" className="" />
                            Work
                        </label>

                        <label className="flex items-center gap-1">
                            <input type="radio" name="category" value="personal" className="" />
                            Personal
                        </label>

                        <label className="flex items-center gap-1">
                            <input type="radio" name="category" value="urgent" className="" />
                            Urgent
                        </label>
                    </div>
                </div>

                <button className="p-2.5 bg-yellow-400 rounded-lg text-white font-bold hover:bg-yellow-300 transition-all duration-75 cursor-pointer">Add Todo</button>

            </div>
        </form>
    )
}

export default AddTodoForm