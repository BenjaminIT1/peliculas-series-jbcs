import { NavLink } from "react-router-dom"

const Navbar = () =>{

    const activeStyle= 'underline underline-offset-3'
    return(
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-blue-500">
        <ul className="flex items-center gap-6">
            <li className="font-semibold text-lg">           
                <NavLink
                to='/'
                className={({isActive}) =>
                isActive ? activeStyle : undefined}>
                DEMO Streaming
                </NavLink>
            </li>
            <li>
                <NavLink
                to='/'
                className={({isActive}) =>
                isActive ? activeStyle : undefined}>
                Log in
                </NavLink>
            </li>
            <li>
                <NavLink
                to='/*'
                className={({isActive}) =>
                isActive ? activeStyle : undefined}>
                Start your free trial
                </NavLink>
            </li>
        </ul>
        <ul className="flex items-center gap-8">
            <li className="text-black/60">
            Jose Benjamin Castillo Segura  5.-B
            </li>
            <li>
                <NavLink
                to='/my-account'>
                My account
                </NavLink>
            </li>
        </ul>
        </nav>
    )
}

export default Navbar;