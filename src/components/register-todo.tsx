import * as React from "react"
import type { TodoDataType } from "../type";
import { useAddTodo } from "../hooks/use-add-todo";
import { PopUpContainerContext } from "../state/pop-up-container/pop-up-container-context";
import { X } from "lucide-react";
import { useUpdateTodo } from "../hooks/use-update-todo";
import { TodoContext } from "../state/todo/todo-context";

const AddTodoForm = ({ isUpdateForm = false }: { isUpdateForm?: boolean }) => {
    const { addTodo } = useAddTodo();
    const { selectedTodoId, setSelectedTodoId } = React.useContext(TodoContext);
    const { updateTodo } = useUpdateTodo();
    const { setIsPopUpContainerOpen, setContainerName } = React.useContext(PopUpContainerContext);


    // Handling closing form
    const handleClosingForm = () => {
        setContainerName(null);
        setIsPopUpContainerOpen(false);
    }

    // Handling form submission
    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget)) as unknown as TodoDataType;

        if (!Object.values(data).every(value => value !== "") || !data.category || !data.priority || !data.difficulty) {
            alert("All fields are required. Please fill all the fields before submitting");
            return;
        }

        if(new Date(data.date).getTime() < Date.now()){
            alert("You are using past data and time");
            return
        }

        // Off popUp container
        setContainerName(null);
        setIsPopUpContainerOpen(false);

        setTimeout(() => {
            alert("Todo added successfully.");
        }, 200);

        // Add todo with the given data and reset form
        addTodo(data);
        e.currentTarget.reset();
    }

    // Handling update form submission
    const handleUpdateFormSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget)) as unknown as TodoDataType;

        if (!data.title && !data.description && !data.date && !data.category && !data.priority && !data.difficulty) {
            alert("There must be at least one field");
            return;
        }

        // Off popUp container
        setContainerName(null);
        setIsPopUpContainerOpen(false);


        setTimeout(() => {
            alert("Todo updated successfully.");
        }, 200);

        // Update todo with the given data
        updateTodo((selectedTodoId) as string, data);

        // Reset selected todo id and form
        setSelectedTodoId(null);
        e.currentTarget.reset();
    }


    const inputClass = "w-full px-3 py-2 rounded-md border border-slate-400/40 bg-slate-50/30 text-white/70 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-slate-400";

    return (
        <form onSubmit={isUpdateForm ? handleUpdateFormSubmit : handleSubmit} className="relative w-full md:w-[70vw] lg:w-[60vw] bg-transparent rounded-lg flex flex-col justify-center gap-5 items-center p-6 border border-white/10">
            <h1 className="text-3xl font-bold text-white">{isUpdateForm ? "Update" : "Register"} Todo</h1>
            <X className="absolute right-4 top-4 text-red-500 cursor-pointer" onClick={handleClosingForm} />

            {/* Title */}
            <input className={inputClass} type="text" placeholder="title" name="title" />

            {/* Description */}
            <input className={inputClass} type="text" placeholder="description" name="description" />

            {/* Date and Time */}
            <input className={inputClass + " w-full"} type="datetime-local" id="date" name="date" />

            <div className="w-full flex flex-col gap-4">

                {/* Difficulty */}
                <div>
                    <p className="font-semibold mb-2 text-white/70">Difficulty</p>
                    <div className="flex justify-around text-slate-400 p-2  rounded-md border border-slate-400/40 bg-slate-50/30 ">
                        <label className="flex items-center gap-1 text-white/70">
                            <input type="radio" name="difficulty" value="easy" className="" />
                            Easy
                        </label>

                        <label className="flex items-center gap-1 text-white/70">
                            <input type="radio" name="difficulty" value="medium" className="" />
                            Medium
                        </label>

                        <label className="flex items-center gap-1 text-white/70">
                            <input type="radio" name="difficulty" value="hard" className="" />
                            Hard
                        </label>
                    </div>
                </div>

                {/* Priority */}
                <div>
                    <p className="font-semibold mb-2 text-white/70">Priority</p>
                    <div className="flex justify-around text-slate-400 p-2  rounded-md border border-slate-400/40 bg-slate-50/30 ">
                        <label className="flex items-center gap-1 text-white/70">
                            <input type="radio" name="priority" value="high" className="" />
                            High
                        </label>

                        <label className="flex items-center gap-1 text-white/70">
                            <input type="radio" name="priority" value="moderate" className="" />
                            Moderate
                        </label>

                        <label className="flex items-center gap-1 text-white/70">
                            <input type="radio" name="priority" value="low" className="" />
                            Low
                        </label>
                    </div>
                </div>

                {/* Category */}
                <div>
                    <p className="font-semibold mb-2 text-white/70">Category</p>
                    <div className="flex justify-around text-slate-400 p-2  rounded-md border border-slate-400/40 bg-slate-50/30 ">
                        <label className="flex items-center gap-1 text-white/70">
                            <input type="radio" name="category" value="work" className="" />
                            Work
                        </label>

                        <label className="flex items-center gap-1 text-white/70">
                            <input type="radio" name="category" value="personal" className="" />
                            Personal
                        </label>

                        <label className="flex items-center gap-1 text-white/70">
                            <input type="radio" name="category" value="urgent" className="" />
                            Urgent
                        </label>
                    </div>
                </div>

                <button type="submit" className="p-2.5 bg-sky-500 rounded-lg text-white font-bold hover:bg-sky-600 transition-all duration-75 cursor-pointer">{isUpdateForm ? "Update" : "Add"} Todo</button>

            </div>
        </form>
    )
}

export default AddTodoForm