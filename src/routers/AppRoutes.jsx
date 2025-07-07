import { Routes, Route, Outlet } from 'react-router';
import HomePage from '../pages/home/HomePage.js';
import UserRoutes from "./UsersRoutes.jsx";
import AuthRoutes from "./AuthRoutes.jsx";
import AuthLayout from "../pages/auth/layouts/AuthLayout.js";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/auth" element={<AuthLayout />}>
                <Route index element={<AuthRoutes/>} />
                <Route path="*" element={<AuthRoutes/>} />
            </Route>

        </Routes>
    )
}

export default AppRoutes