import TopBar from "../components/topbar/TopBar.tsx";
import {Outlet} from 'react-router';

const MainLayout = () => {
    return <>
        <TopBar/>
        <div className={"grid grid-cols-12 py-7 px-70 min-h-screen bg-gray-100"}>
            <div className={"col-span-12 mt-15"}>
                <Outlet/>
            </div>
        </div>
    </>
}

export default MainLayout