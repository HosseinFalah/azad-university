import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";

const HomePage = lazy(() => import('./../Pages/Home/Home'));
const TeacherPage = lazy(() => import('./../Pages/Teacher/Teacher'));

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {path: '/', element: <HomePage/>},
            {path: '/teacher/:shortName', element: <TeacherPage/>}
        ]
    },
]);

export default router