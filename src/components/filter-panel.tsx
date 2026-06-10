import { useRef, useEffect } from "react";
import * as React from "react";
import { useUpdateTodo } from "../hooks/use-update-todo";
import { TodoContext } from "../state/todo/todo-context";

interface FilterPanelProps {
    visible: boolean;
    onClose: () => void;
    title: string;
}

export default function FilterPanel({ visible, onClose, title }: FilterPanelProps) {
    const panelRef = useRef<HTMLDivElement>(null);
    const { filterTodo } = useUpdateTodo();
    const { setFilteredTodo } = React.useContext(TodoContext);

    // Handling on submit
    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const filters = {} as any;

        // Get all the filters
        filters.title = title;
        const form = new FormData(e.currentTarget);
        filters.date = form.get("date");
        filters.priority = form.getAll("priority");
        filters.category = form.getAll("category");
        filters.difficulty = form.getAll("difficulty");

        // Filter todos and set to state variable
        const filterData = filterTodo(filters);
        setFilteredTodo(filterData);

        onClose();

    }

    // Hide filter component when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
                onClose();
            }
        }
        if (visible) document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [visible, onClose]);

    if (!visible) return null;

    return (
        <div
            ref={panelRef}
            className="w-72 rounded-xl border border-white/20 bg-[#0F172B] p-4 shadow-2xl text-slate-200 mt-2 absolute z-50 right-0"
        >

            <form onSubmit={handleSubmit} className="w-full h-full">
                {/* Date Range */}
                <div className="mt-4">
                    <p className="mb-1.5 text-sm font-medium text-slate-200">Title</p>
                    <input name="title" type="text" value={title} disabled className="cursor-not-allowed w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-400" />
                </div>

                {/* Date Range */}
                <div className="mt-4">
                    <p className="mb-1.5 text-sm font-medium text-slate-200">Date With Time</p>
                    <input name="date" type="datetime-local" className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-400" />
                </div>

                {/* Priority */}
                <div className="mt-4">
                    <p className="mb-2 text-sm font-semibold text-slate-200">Priority</p>
                    <div className="space-y-2">
                        {[
                            { label: "high", checked: true },
                            { label: "medium", checked: false },
                            { label: "low", checked: false },
                        ].map((c) => (
                            <label key={c.label} className="flex cursor-pointer items-center gap-2 text-sm text-slate-200">
                                <input
                                    value={c.label}
                                    type="checkbox"
                                    name="priority"
                                    defaultChecked={c.checked}
                                    className="h-4 w-4 rounded border-slate-600 bg-slate-800 accent-blue-500"
                                />
                                {c.label}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Difficulty */}
                <div className="mt-4">
                    <p className="mb-2 text-sm font-semibold text-slate-200">Difficulty</p>
                    <div className="space-y-2">
                        {[
                            { label: "high", checked: true },
                            { label: "medium", checked: false },
                            { label: "low", checked: false },
                        ].map((c) => (
                            <label key={c.label} className="flex cursor-pointer items-center gap-2 text-sm text-slate-200">
                                <input
                                    value={c.label}
                                    name="difficulty"
                                    type="checkbox"
                                    defaultChecked={c.checked}
                                    className="h-4 w-4 rounded border-slate-600 bg-slate-800 accent-blue-500"
                                />
                                {c.label}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Category */}
                <div className="mt-4">
                    <p className="mb-2 text-sm font-semibold text-slate-200">Category</p>
                    <div className="space-y-2">
                        {[
                            { label: "work", checked: true },
                            { label: "personal", checked: false },
                            { label: "urgent", checked: false },
                        ].map((c) => (
                            <label key={c.label} className="flex cursor-pointer items-center gap-2 text-sm text-slate-200">
                                <input
                                    value={c.label}
                                    name="category"
                                    type="checkbox"
                                    defaultChecked={c.checked}
                                    className="h-4 w-4 rounded border-slate-600 bg-slate-800 accent-blue-500"
                                />
                                {c.label}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Find */}
                <button
                    type="submit"
                    className="mt-5 w-full rounded-md bg-sky-600 py-2 text-sm font-medium text-white hover:bg-sky-500 cursor-pointer"
                >
                    Find
                </button>
            </form>
        </div>
    );
}
