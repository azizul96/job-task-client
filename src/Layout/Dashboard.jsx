
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import { useContext } from 'react';
import { FaHome, FaTasks } from "react-icons/fa";
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
                    <div className='flex justify-center mt-5'>
                        <img className="object-cover w-20 h-20 border-2 border-[#8a50fb] rounded-full "src={user.photoURL} alt="avatar" />
                        
                    </div>
                    <p className="font-semibold text-white text-xl text-center mb-10"> Hello {user?.displayName}!</p>
                    <div className='px-4 mb-4 '>
                        <Link to="">
                            <button className='btn btn-md bg-[#395775] hover:bg-[#395775] w-full text-white mb-2  border-none'><FaHome /> Dashboard </button>
                        </Link>
                        <Link to="add-task">
                            <button className='btn btn-md bg-[#fb8500] hover:bg-[#fb8500] w-full text-white mb-2 border-none'><FaTasks /> Add Task </button>
                        </Link>
                    </div>
                    <hr />
                    
                    <div className='px-5 text-center'>
                        <button onClick={handleLogout} className='btn btn-md btn-error  text-white my-4'>Log Out</button>
                    </div>
                </div>
                <div className="flex-1">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;