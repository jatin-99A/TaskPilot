import { Funnel, Search } from "lucide-react";


const FilterAndSearch = () => {
  return (
    <div className="w-[92vw] md:w-[80vw] max-w-7xl h-14 bg-transparent border border-white/40 my-6 lg:my-0 mx-auto rounded-lg">
        <div className="flex justify-between items-center h-full w-full">
            <Search className="ml-3 text-white/40" />
            <input className="h-full w-full focus:outline-transparent focus:outline-0 text-[1.2rem] m-2.5 text-white/40" type="text" placeholder="Search by title" />
            <button className="flex justify-center items-center gap-2 w-[20%] text-white bg-white/5 backdrop-blur-xl h-full rounded-r-lg border border-white/40 cursor-pointer ">
            <Funnel />
            Filters
            </button>
        </div>
    </div>
  )
}

export default FilterAndSearch