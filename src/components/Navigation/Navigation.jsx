import { NavLink } from "react-router-dom"
import module from "./Navigation.module.css"
import clsx from "clsx"

const buildCssClasses = ({ isActive }) =>
    clsx(module.link, isActive && module.active)

const Navigation = () => {
    return (
        <div className={module.headerDiv}>
            <NavLink className={buildCssClasses} to="/" >Home</NavLink>
            <NavLink className={buildCssClasses} to="/movies" >Movies</NavLink>
        </div>
    )
}

export default Navigation