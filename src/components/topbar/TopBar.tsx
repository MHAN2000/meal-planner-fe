import {LuChefHat} from "react-icons/lu";
import {FiBookOpen} from "react-icons/fi";
import {IoIosCalendar} from "react-icons/io";
import {MdOutlineShoppingCart} from "react-icons/md";
import {FaSignOutAlt} from "react-icons/fa";
import {IoSparklesOutline} from "react-icons/io5";
import {useState} from 'react';
import PageButton from "./components/pageButton/PageButton.tsx";
import { useNavigate } from 'react-router';

const TopBar = () => {

    const navigate = useNavigate();
    const [pages, setPages] = useState([
            {
                icon: LuChefHat,
                name: 'Dashboard',
                path: '/',
                selected: true
            },
            {
                icon: FiBookOpen,
                path: '/recipes',
                name: 'Recipes'
            },
            {
                icon: IoIosCalendar,
                name: 'Calendar'
            },
            {
                icon: MdOutlineShoppingCart,
                name: 'Shopping List',
                path: '/shopping-list'
            },
            {
                icon: IoSparklesOutline,
                name: 'AI Assistant',
                path: '/ai-assistant'
            }]
        , []);

    const handleButtonClick = (page, i) => {
        const updatedPages = pages.map((page, index) => {
            return {
                ...page,
                selected: index === i
            };
        });
        setPages(updatedPages);
        navigate(page.path);
    }

    return <>
        <div className={"px-50 z-1 fixed top-0 left-0 bg-white w-full flex py-2 shadow-sm justify-between"}>
            <div className={"flex items-center gap-2"}>
                <LuChefHat className={"text-4xl text-orange-500"}/>
                <h1 className={"font-bold text-2xl"}>MealPlanner</h1>
            </div>
            <div className={"flex gap-5 items-center"}>
                {
                    pages.map((page, i) => (
                        <PageButton onClick={() => handleButtonClick(page, i)} key={i} page={page}></PageButton>
                    ))
                }
            </div>
            <div onClick={() => navigate("/login")}
                className={`border-1 border-gray-200 cursor-pointer rounded-lg flex items-center py-2 px-4 gap-2 font-semibold`}>
                <FaSignOutAlt/>
                <p>Sign Out</p>
            </div>
        </div>
    </>
}

export default TopBar
