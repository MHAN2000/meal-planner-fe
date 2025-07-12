import { Routes, Route, Outlet } from 'react-router';
import HomePage from '../pages/home/HomePage.js';
import AuthRoutes from "./AuthRoutes.jsx";
import MainLayout from "../layouts/MainLayout.js";
import RecipesPage from "../pages/recipes/RecipesPage.tsx";

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/recipes" element={<RecipesPage />} />
            </Route>
            {AuthRoutes()}
        </Routes>
    )
}

export default AppRoutes