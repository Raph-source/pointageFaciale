import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Login} from "./pages/login.tsx";
import  "../public/style/css/style.css"

const router = createBrowserRouter([
    {
        path : 'authentification',
        element : <Login/>
    },
    {
        path : '',
        element : <Login/>
    },
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
