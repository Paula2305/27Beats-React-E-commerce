import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/home/home.component";
import Login from "../Pages/session/login.component";
import SingUp from "../Pages/session/singup.component";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {path: "", element: <Home/>},
            {path: "login", element: <Login/>},
            {path: "singup", element: <SingUp/>},
            
        ]
    }
])