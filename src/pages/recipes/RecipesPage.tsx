import Container from "../../components/container/Container.tsx";
import {FaPlus} from "react-icons/fa6";
import {FaSearch} from "react-icons/fa";

const RecipesPage = () => {
    return <div className={"grid grid-cols-12 gap-5 h-full"}>
        <div className={"col-span-12"}>
            <Container titleSize={"text-3xl"} bold={true} title={"My recipes"}
                       subtitle={"Manage your personal recipe collection"} buttonIcon={FaPlus}
                       buttonText={"Add Recipe"} showBackground={false} body={
                <div className={"grid grid-cols-12"}>
                    <div className={"col-span-12 mt-8"}>
                        <div className={"relative"}>
                            <FaSearch
                                className={"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4"}/>
                            <input placeholder={"Search recipes or ingredients..."}
                                   className={"w-full pl-10 bg-white border-1 p-1.5 rounded-md border-gray-300"}/>
                        </div>
                    </div>
                    <div className={"col-span-12 flex justify-center items-center mt-10 h-60"}>
                        <div className={"flex flex-col items-center gap-4"}>
                            <div className={"rounded-full h-30 w-30 flex justify-center items-center bg-gray-100 p-8"}>
                                <FaPlus className={"text-4xl text-gray-400"}/>
                            </div>
                            <h3 className={"font-semibold text-xl"}>No recipes yet</h3>
                            <p className={"text-gray-500"}>Start building your recipe collection by adding your first recipe</p>
                            <button className={"bg-black py-2 px-5 text-white rounded-md flex gap-5 items-center"}>
                                <FaPlus className={"text-md"}/>
                                <p>Add Your First Recipe</p>
                            </button>
                        </div>
                    </div>
                </div>
            }/>
        </div>
    </div>
}

export default RecipesPage;