import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Workouts from "../pages/workouts/Workouts";
import MyPlans from "../pages/myPlans/MyPlans";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Workouts
            },
            {
                path: "/my-plans",
                Component: MyPlans
            }
        ]
    },

]);