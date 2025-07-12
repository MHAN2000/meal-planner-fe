import DashboardCard from "./components/DashboardCard/DashboardCard.tsx";
import Container from "../../components/container/Container.tsx";
import {FaPlus} from "react-icons/fa6";
import {MdMenuBook} from "react-icons/md";
import {IoIosCalendar} from "react-icons/io";
import QuickAction from "./components/QuickAction/QuickAction.tsx";
import type {IQuickAction} from "./components/QuickAction/types.tsx";
import {MdOutlineShoppingCart} from "react-icons/md";
import { IoSparklesOutline } from "react-icons/io5";
import { useState } from 'react';

const HomePage = () => {

    const [quickActions, setQuickActions] = useState<IQuickAction[]>([
        {
            title: "Add Recipe",
            subtitle: "Create a new recipe",
            icon: MdOutlineShoppingCart,
            iconColor: "text-orange-500"
        },
        {
            title: "Plan Meals",
            subtitle: "Schedule your week",
            icon: IoIosCalendar,
            iconColor: "text-blue-500"
        },
        {
            title: "Shopping List",
            subtitle: "Generate your list",
            icon: MdOutlineShoppingCart,
            iconColor: "text-green-500"
        },
        {
            title: "AI Assistant",
            subtitle: "Get recipe help",
            icon: IoSparklesOutline,
            iconColor: "text-pink-500"
        }
    ]);

    return (<>
        <div className={"grid grid-cols-12 gap-5"}>
            <div className={"col-span-12"}>
                <h1 className={"text-3xl mb-3 font-bold"}>Welcome back USER!</h1>
                <p>Here's what's cooking in your meal planner </p>
            </div>
            <div className={"col-span-12 gap-5 mt-5 flex"}>
                <DashboardCard/>
                <DashboardCard/>
                <DashboardCard/>
            </div>
            <div className={"col-span-6"}>
                <Container title={"Recent recipes"} subtitle={"Your latest recipe additions"} buttonIcon={FaPlus}
                           buttonText={"Add Recipe"}
                           body={
                               <div className={"flex items-center justify-center h-full"}>
                                   <div className={"flex flex-col items-center gap-2"}>
                                       <MdMenuBook className={"text-5xl text-gray-400"}/>
                                       <p className={"text-md text-gray-400"}>No recipes yet. Start by adding your first
                                           recipe!</p>
                                       <button className={"bg-black text-white py-2 px-10 rounded-md"}>Add Recipe
                                       </button>
                                   </div>
                               </div>
                           }/>
            </div>
            <div className={"col-span-6"}>
                <Container title={"Upcoming Meal"} subtitle={"Your planeed meals for this week"}
                           buttonIcon={IoIosCalendar}
                           buttonText={"Plan Meals"}
                           body={
                               <div className={"flex items-center justify-center h-full"}>
                                   <div className={"flex flex-col items-center gap-2"}>
                                       <IoIosCalendar className={"text-5xl text-gray-400"}/>
                                       <p className={"text-md text-gray-400"}>No meals planned yet. Start planning your
                                           week!</p>
                                       <button className={"bg-black text-white py-2 px-10 rounded-md"}>Plan Your Meals
                                       </button>
                                   </div>
                               </div>
                           }/>
            </div>
            <div className={"col-span-12"}>
                <h3 className={"font-semibold text-xl"}>Quick Actions</h3>
            </div>
            {
                quickActions.map((action, i) => (
                    <div key={i} className={"col-span-3"}>
                        <QuickAction title={action.title} subtitle={action.subtitle} icon={action.icon}
                                     iconColor={action.iconColor}/>
                    </div>
                ))
            }
        </div>
    </>)
}

export default HomePage