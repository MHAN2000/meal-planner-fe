import { Routes, Route } from 'react-router';
import LoginPage from "../pages/auth/LoginPage.tsx";

const UserRoutes = () => {
    return (
        <Routes>
            <Route index element={<LoginPage/>} />
        </Routes>
    )
}

export default UserRoutes