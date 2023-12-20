
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {


    const menu = (
        <>
        
            <NavLink to="/" className={({ isActive, isPending }) =>
                isActive ? "bg-[#9e2a2b] rounded-full shadow-md shadow-[#9e2a2b] text-white hover:bg-[#9e2a2b]" : isPending ? "pending" : ""}>
                <li className="font-semibold px-5 py-2">Home</li>
            </NavLink>

            <NavLink to="/about" className={({ isActive, isPending }) =>
                isActive ? "bg-[#9e2a2b] rounded-full shadow-md shadow-[#9e2a2b] text-white hover:bg-[#9e2a2b]" : isPending ? "pending" : ""}>
                <li className="font-semibold px-5 py-2">About Us</li>
            </NavLink>

            <NavLink to="/contact" className={({ isActive, isPending }) =>
                isActive ? "bg-[#9e2a2b] rounded-full shadow-md shadow-[#9e2a2b] text-white hover:bg-[#9e2a2b]" : isPending ? "pending" : ""}>
                <li className="font-semibold px-5 py-2">Contact</li>
            </NavLink>
        </>
)
    return (
        <div className="container mx-auto py-2">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <Link to='/' className=" flex justify-center items-center gap-2 ">
                        <img className="w-20 h-" src="/logo.png" alt="logo" />
                    </Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu-horizontal px-1 gap-3">
                        {menu}
                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;