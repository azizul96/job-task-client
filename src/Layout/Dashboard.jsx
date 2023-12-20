
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const Dashboard = () => {
    const {user, userLogOut} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = ()=>{
        userLogOut()
        navigate("/")
    }

    return (
        <div className="">
            
            <Navbar></Navbar>
            <div className="flex flex-col md:flex-row container mx-auto gap-2">
                <div className=" h-auto md:w-56  md:h-screen bg-[#2a9d8f] rounded-md">
                    <ul className="menu p-4 space-y-1 text-white font-semibold">
                        <li><NavLink to="/dashboard/adminHome"> User</NavLink></li>
                        
                    </ul>
                    <button onClick={handleLogout} className='btn btn-error w-full text-white'>Log Out</button>
                </div>
                <div className="flex-1">
                    <div className="w-full  px-8 py-4 mt-16 rounded-lg shadow-lg dark:bg-gray-800 mx-auto bg-[#264653]">
                        <div className="flex justify-center -mt-16 md:justify-start">
                            <img className="object-cover w-20 h-20 border-2 border-[#8a50fb] rounded-full "src={user.photoURL} alt="avatar" />
                        </div>

                        <div className="flex justify-start mt-4">
                            <p className="font-semibold text-white text-xl"> Hello {user?.displayName}!</p>
                        </div>
                    </div>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;