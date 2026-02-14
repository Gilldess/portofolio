import { createBrowserRouter } from "react-router"
import HomePage from "../pages/HomePage"
import ResumePage from "../pages/ResumePage"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/resume',
        element: <ResumePage />
    }
])