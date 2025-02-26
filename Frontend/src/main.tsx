import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Login} from "./pages/login.tsx";
import  "../public/style/css/style.css"
import {ListDepartement} from "./pages/Agent/listDepartement.tsx";
import {AnotherAgent} from "./pages/Agent/anotherAgent.tsx";

const router = createBrowserRouter([
    {
        path : 'authentification',
        element : <Login/>
    },
    {
        path : '',
        element : <Login/>
    },
    {
        path : 'agent/grh/',
        children : [
            {
                path : "accueil",
                element : <ListDepartement />
            }
        ]
    },
    {
        path : "agent/",
        children : [
            {
                path: "accueil",
                element : <AnotherAgent/>
            }
        ]
    }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
