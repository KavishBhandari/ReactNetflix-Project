import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browser from "./browser";

/*
Alternative: use a layout route and pass navigation to Login through Outlet context.

import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
    useNavigate,
} from "react-router-dom";

const BodyLayout = () => {
    const navigate = useNavigate();

    return (
        <Outlet
            context={{
                onLoginSuccess: () => navigate("/browser"),
            }}
        />
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <BodyLayout />,
        children: [
            {
                index: true,
                element: <Login />,
            },
            {
                path: "browser",
                element: <Browser />,
            },
        ],
    },
]);

const Body = () => <RouterProvider router={appRouter} />;

export default Body;
*/

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/browser",
            element: <Browser />,
        },
    ]);

    return <RouterProvider router={appRouter} />;
};

export default Body;
