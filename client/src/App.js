import React from "react";
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

/**import all components */
import Home from "./components/Home";
import Projects from "./components/Projects";

/** Root routes */
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/project',
        element: <Projects/>
    }
])

export default function App(){
    return(
    <main>
        <RouterProvider router={router}></RouterProvider>
    </main>
    )
}