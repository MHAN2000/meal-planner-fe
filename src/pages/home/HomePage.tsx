import DashboardCard from "./components/DashboardCard.tsx";
import Container from "../../components/container/Container.tsx";

const HomePage = () => {
    return (<>
        <div className={"grid grid-cols-12 gap-5"}>
            <div className={"col-span-12"}>
                <h1 className={"text-3xl mb-3 font-bold"}>Welcome back USER!</h1>
                <p>Here's what's cooking in your meal planner </p>
            </div>
            <div className={"col-span-12 gap-5 mt-5 flex"}>
                <DashboardCard />
                <DashboardCard />
                <DashboardCard />
            </div><div className={"col-span-6"}>
                <Container />
            </div>
        </div>
    </>)
}

export default HomePage