import { Routes, Route, Outlet } from 'react-router';
import HomePage from '../pages/home/HomePage.js';
import AuthRoutes from "./AuthRoutes.jsx";
import MainLayout from "../layouts/MainLayout.js";
import RecipesPage from "../pages/recipes/RecipesPage.tsx";
import AIAssistant from "../pages/ai-assistant/AIAssistantPage.tsx";
import ShoppingList from "../pages/shopping-list/ShoppingListPage.tsx"

const AppRoutes = () => {
  return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/recipes" element={<RecipesPage />} />
                <Route path="/ai-assistant" element={<AIAssistant />} />
                <Route path="/shopping-list" element={<ShoppingList />} />
            </Route>
            {AuthRoutes()}
        </Routes>
    )
}

export default AppRoutes
