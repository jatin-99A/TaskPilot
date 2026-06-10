import { Funnel, Search } from "lucide-react";
import * as React from "react";
import FilterPanel from "./filter-panel";


const FilterAndSearch = () => {
    const [showFilter, setShowFilter] = React.useState(false);
    const [title, setTitle] = React.useState("");

    return (
        <div className="relative w-[92vw] md:w-[80vw] max-w-7xl h-14 bg-transparent border border-white/40 my-6 lg:my-0 mx-auto rounded-lg">
            <div className="flex justify-between items-center h-full w-full">
                <Search className="ml-3 text-white/40" />
                <input onChange={(e) => setTitle(e.target.value)} className="h-full w-full focus:outline-transparent focus:outline-0 text-[1.2rem] m-2.5 text-white/40" type="text" placeholder="Search by title" />
                <button onClick={() => setShowFilter(true)} className="flex justify-center items-center gap-2 w-[20%] text-white bg-white/5 backdrop-blur-xl h-full rounded-r-lg border border-white/40 cursor-pointer ">
                    <Funnel />
                    Filters
                </button>
            </div>
            <FilterPanel title={title} visible={showFilter} onClose={() => setShowFilter(false)} />
        </div>
    )
}

export default FilterAndSearch