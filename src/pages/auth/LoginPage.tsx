import {useState} from 'react';

const LoginPage = () => {

    const [selectedTab, setSelectedTab] = useState(0);

    const handleSelectedTab = tab => {
        setSelectedTab(tab);
    }

    return <>
        <div className={"grid grid-cols-12"}>
            <div className={"col-span-12 flex justify-center"}>
                <div className={"w-1/3"}>
                    <div className={"bg-gray-100 p-1 flex justify-center rounded-md"}>
                        <button onClick={() => handleSelectedTab(0)} className={`w-1/2 px-20 py-1 ${selectedTab === 0 ? 'bg-white' : 'bg-gray-100'} text-sm`}>Log
                            In
                        </button>
                        <button onClick={() => handleSelectedTab(1)}
                                className={`w-1/2 px-20 py-1 ${selectedTab === 1 ? 'bg-white' : 'bg-gray-100'} text-sm`}>Sign Up
                        </button>
                    </div>
                    {
                        selectedTab === 0 ? (
                            <div className={"bg-white p-5 mt-3 rounded-md border-1 border-gray-200"}>
                                <h2 className={"font-bold text-2xl"}>Welcome Back</h2>
                                <p className={"text-gray-500"}>Sign in to your MealPlanner account</p>
                                <div className={"flex flex-col gap-3 mt-4"}>
                                    <div className={"flex flex-col gap-2"}>
                                        <label className={"font-semibold"}>Email</label>
                                        <input className={"border-1 border-gray-200 rounded-md p-2"} type="text"/>
                                    </div>
                                    <div className={"flex flex-col gap-2"}>
                                        <label className={"font-semibold"}>Password</label>
                                        <input className={"border-1 border-gray-200 rounded-md p-2"} type="password"/>
                                    </div>
                                </div>
                                <button className={"w-full px-20 py-2 mt-5 bg-black text-white rounded-md"}>Log In
                                </button>
                            </div>
                        ) : (
                            <div className={"bg-white p-5 mt-3 rounded-md border-1 border-gray-200"}>
                                <h2 className={"font-bold text-2xl"}>Create Account</h2>
                                <p className={"text-gray-500"}>Join MealPlanner to start organizing your meals</p>
                                <div className={"flex flex-col gap-3 mt-4"}>
                                    <div className={"flex flex-col gap-2"}>
                                        <label className={"font-semibold"}>Full Name</label>
                                        <input className={"border-1 border-gray-200 rounded-md p-2"} type="text"/>
                                    </div>
                                    <div className={"flex flex-col gap-2"}>
                                        <label className={"font-semibold"}>Email</label>
                                        <input className={"border-1 border-gray-200 rounded-md p-2"} type="email"/>
                                    </div>
                                    <div className={"flex flex-col gap-2"}>
                                        <label className={"font-semibold"}>Password</label>
                                        <input className={"border-1 border-gray-200 rounded-md p-2"} type="password"/>
                                    </div>
                                </div>
                                <button className={"w-full px-20 py-2 mt-5 bg-black text-white rounded-md"}>Create Account
                                </button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    </>
}

export default LoginPage