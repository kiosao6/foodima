import { Outlet, Link, useLocation } from "react-router-dom"
import { Footer } from "./Footer"
import { BurguerButton } from "./BurguerButton"
import { CurvedMenu } from "./CurvedMenu"
import { useStore } from "../Store/store"

import logo from '/src/Images/logo.png'
import { useEffect } from "react"



export const Header = () => {

  const locationPath = useLocation();

  const titleChanger = () => {
    switch(locationPath.pathname){

      case '/about':
        return 'About - Foodima'
      
      case '/favorites':
        return 'My favorites - Foodima'

      default:
        return 'Foodima, your online recipe diary'
    }
  }

  useEffect(() => {
    document.title = titleChanger()
  }, [locationPath])
  

  const isMenuOpen = useStore(state => state.isMenuOpen);


  const menuClasses = `menu translate-x-full ${(isMenuOpen) && '!translate-x-0'} fixed z-50 flex flex-col items-center justify-center w-full lg:w-[600px] text-center lg:text-left h-full right-0 top-0 bg-white border`


  return (
    <>
        <header className="relative z-50 flex items-center justify-between mt-10 lg:mx-auto max-w-7xl opacity-100 pb-7 border-b border-zinc-200">
                <div className='flex gap-10 items-center justify-between'>
                    <Link to="/" className="flex gap-x-4 w-36 items-center">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <BurguerButton />
                <CurvedMenu classes={menuClasses} />
            </header>

            <Outlet />
            <Footer />
    
    </>
  )
}