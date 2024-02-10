import { NavLink } from "react-router-dom"



export const Navbar = () => {
  return (
    <nav className="hidden items-center font-normal sm:flex">
        <div className="flex gap-10 text-dark font-normal text-sm">
            <NavLink className="hover:underline" to="/">Recipes</NavLink>
            <NavLink className="hover:underline" to="/saved">Saved</NavLink>
            <NavLink className="hover:underline" to="/about">About</NavLink>
            <NavLink className="hover:underline" to="/pabellon">Pabellon</NavLink>
        </div>
    </nav>
  )
}