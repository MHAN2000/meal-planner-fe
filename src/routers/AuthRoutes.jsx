import { Route } from 'react-router';
import LoginPage from "../pages/auth/LoginPage.tsx";
import AuthLayout from './../pages/auth/layouts/AuthLayout';


const AuthRoutes = () => {
    return (
        <>
            <Route element={<AuthLayout />}>
                <Route path="/login" element={<LoginPage/>}/>
            </Route>
        </>
    )
}

export default AuthRoutes