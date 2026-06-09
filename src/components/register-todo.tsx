import * as React from "react"
import type { TodoDataType } from "../type";
import { useAddTodo } from "../hooks/use-add-todo";
import { PopUpContainerContext } from "../state/pop-up-container/pop-up-container-context";
import { X } from "lucide-react";
import { useUpdateTodo } from "../hooks/use-update-todo";
import { TodoContext } from "../state/todo/todo-context";

const AddTodoForm = ({ isUpdateForm = false, todoId }: { isUpdateForm?: boolean, todoId?: string }) => {
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


    const inputClass = "w-full px-3 py-2 rounded-md border border-yellow-400/40 bg-yellow-50/30 text-yellow-900 placeholder-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400";

    return (
        <form onSubmit={isUpdateForm ? handleUpdateFormSubmit : handleSubmit} className="relative w-full md:w-[70vw] lg:w-[60vw] bg-white rounded-lg flex flex-col justify-center gap-5 items-center p-6">
            <h1 className="text-3xl font-bold">{isUpdateForm ? "Update" : "Register"} Todo</h1>
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

                <button type="submit" className="p-2.5 bg-yellow-400 rounded-lg text-white font-bold hover:bg-yellow-300 transition-all duration-75 cursor-pointer">{isUpdateForm ? "Update" : "Add"} Todo</button>

            </div>
        </form>
    )
}

export default AddTodoForm