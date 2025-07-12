import { FaPlus } from "react-icons/fa6";
import { MdMenuBook } from "react-icons/md";


const Container = () => {
    return <div className={"bg-white border rounded-md border-gray-200 h-90 p-5"}>
        <div className={"flex w-full items-center justify-between"}>
            <div className={"flex flex-col"}>
                <h2 className={"text-2xl font-semibold"}>Recent Recipes</h2>
                <p className={"text-gray-500"}>Your latest recipe additions</p>
            </div>
            <button className={"flex items-center gap-4 border p-2 rounded-md border-gray-300"}>
                <FaPlus />
                <p className={"text-sm font-semibold"}>Add Recipe</p>
            </button>
        </div>
        <div className={"flex items-center justify-center h-full"}>
            <div className={"flex flex-col items-center gap-2"}>
                <MdMenuBook className={"text-5xl text-gray-400"} />
                <p className={"text-md text-gray-400"}>No recipes yet. Start by adding your first recipe!</p>
                <button className={"bg-black text-white py-2 px-10 rounded-md"}>Add Recipe</button>
            </div>
        </div>
    </div>
}

export default Container