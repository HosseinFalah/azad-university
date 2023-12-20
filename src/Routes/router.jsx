import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";

const HomePage = lazy(() => import('./../Pages/Home/Home'));
const TeacherPage = lazy(() => import('./../Pages/Teacher/Teacher'));
const LoginPage = lazy(() => import('./../Pages/Auth/Login/Login'));
const RegisterPage = lazy(() => import('./../Pages/Auth/Register/Register'));

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {path: '/', element: <HomePage/>},
            {path: '/teacher/:shortName', element: <TeacherPage/>},
            {path: '/auth/login', element: <LoginPage/>},
            {path: '/auth/register', element: <RegisterPage/>}
        ]
    },
]);

export default router