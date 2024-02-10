import { NavLink } from "react-router-dom"
import { Footer } from "./Footer"

import { UseToggleStyles } from "../Hooks/UseToggleStyles";




export const CurvedMenu = ({classes}) => {


    const { toggleStyles } = UseToggleStyles();
    
    const links = [
        {
            title: "Home",
            path: "/"
        },

        {
            title: "About",
            path: "/about"
        },

        {
            title: "Favorites",
            path: "/favorites"
        },

        
    ]   
    
  return (
    <div is-open="false" className={classes}>
        <div className="relative">
            <div className="flex flex-col lg:pr-24 text-3xl font-medium text-dark tracking-tight gap-6 justify-center">
                {
                    links.map((link, index) => (
                        <div key={index}>
                            <NavLink onClick={toggleStyles} className="link relative font-light" key={index} to={link.path}>{link.title}</NavLink>
                        </div>
                        ))
                }
            <div className="hidden lg:block sm:mt-0">
                <Footer />
            </div>
            <div className="fixed bottom-0 right-0 left-0 sm:mt-0 lg:hidden">
                <Footer />
            </div>
            </div>
        </div>
    </div>
  )
}