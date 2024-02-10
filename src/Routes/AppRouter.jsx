import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Header } from "../Components/Header";
import { Homepage } from "../Homepage";
import { About } from "../Pages/About/About";
import { Saved } from "../Pages/Saved/Saved";
import { RecipePage } from "../Pages/RecipePage/RecipePage";


export const AppRouter = () => {

    const routes = createBrowserRouter([

        {
            path: "/",
            element: <Header />,
            children: [
                {
                    index: true,
                    element: <Homepage />
                },
        
        
                {
                    path: "/about",
                    element: <About />
                },
        
                {
                    path: "/favorites",
                    element: <Saved />
                },

                {
                    path: "/recipe",
                    element: <RecipePage />
                },
        
        
                // Ruta comodín
        
                {
                    path: "/*",
                    element: <Navigate to="/" />
                }
            ]
        }

    ], { basename: "/foodima/" })
    
    // { basename: "/foodima/" }

    return <>
        <RouterProvider router={routes} />
    </>
}

