import { MdMenuBook } from "react-icons/md";

const DashboardCard = () => {
    return <div className={"flex flex-col bg-white border-1 w-full border border-gray-200 h-30 p-5 rounded-lg"}>
        <div className={"flex justify-between mb-2"}>
            <h2 className={"font-semibold"}>Total Recipes</h2>
            <MdMenuBook />
        </div>
        <h2 className={"text-2xl font-bold"}>2</h2>
        <p className={"text-sm text-gray-500"}>Your recipe collection</p>
    </div>
}

export default DashboardCard