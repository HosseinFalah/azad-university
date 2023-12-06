import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";

const HomePage = lazy(() => import('./../Pages/Home/Home'));

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {path: '/', element: <HomePage/>}
        ]
    },
]);

export default router