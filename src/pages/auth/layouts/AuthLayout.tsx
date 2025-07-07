import {Outlet} from 'react-router';
import {LuChefHat} from 'react-icons/lu';
import {CiCalendar} from "react-icons/ci";
import type {AuthFeature} from "../types/types.tsx";
import {FiShoppingCart} from "react-icons/fi";
import {RiSparkling2Line} from "react-icons/ri";
import FeatureCard from "../components/FeatureCard.tsx";

const AuthLayout = () => {

    const features: AuthFeature[] = [
        {
            icon: CiCalendar,
            header: "Weekly Planning",
            description: "Plan your meals for the entire week with our intuitive calendar interface"
        },
        {
            icon: FiShoppingCart,
            header: "Smart Shopping Lists",
            description: "Automatically generate shopping lists based on your planned meals"
        },
        {
            icon: RiSparkling2Line,
            header: "AI Recipe Assitant",
            description: "Get recipe suggestions and adaptations powered by artificial intelligence"
        }
    ];

    return (
        <div className={"px-60 h-screen min-h-screen bg-gradient-to-br from-orange-50 to-red-50"}>
            <div className={"grid grid-cols-12 grid-rows-auto gap-3"}>
                <div className={"col-span-12"}>
                    <div className={"mt-6 flex items-center justify-center gap-3"}>
                        <LuChefHat className={"text-orange-600 text-5xl"}/>
                        <h1 className={"font-bold text-4xl"}>MealPlanner</h1>
                    </div>
                </div>
                <div className={"col-span-12"}>
                    <h2 className={"text-center text-xl text-gray-600 mx-auto max-w-2xl"}>Plan your meals, manage
                        recipes, and create smart shopping lists with AI assistance</h2>
                </div>
                <div className={"col-span-12 mt-10"}>
                    <div className={"grid grid-cols-12"}>
                        {
                            features.map((feature, index) => (
                                <div key={index}
                                     className={"col-span-4"}>
                                    <FeatureCard feature={feature} />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={"col-span-12"}>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default AuthLayout