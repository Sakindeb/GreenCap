import React from "react";
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
/** Root routes */
const router = createBrowserRouter([
    {
        path: '/',
        element: <div>Root route</div>
    },
    {
        path: '/about',
        element: <div>About us</div>
    },
    {
        path: '/project',
        element: <div>View projects</div>
    }
])

export default function App(){
    return(
    <main>
        <RouterProvider router={router}></RouterProvider>
    </main>
    )
}