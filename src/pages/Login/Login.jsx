import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Navbar from "../../components/Navbar/Navbar";
import { AuthContext } from "../../Context/AuthProvider";


const Login = () => {
    const { emailLogin, googleLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation();

    const from = location.state?.from?.pathname || "/dashboard"

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        
            emailLogin(email, password)
            .then(() =>{
                toast.success('Login successfully'); 
                navigate(from, { replace: true});
            })
            .catch(error =>{
                toast.error(error.message);
            })
    }

    const handleGoogleLogin =()=>{
        googleLogin()
        .then(() =>{
            toast.success('Login successfully');
            navigate(from, { replace: true})
        })
        .catch(error =>{
            toast.error(error.message);
        })
    }

    return (
        <div>
            <div className="mb-10">
                <Navbar></Navbar>
            </div>
            <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">

                <div className="hidden bg-cover lg:block lg:w-1/2" >
                    <img src="/login.webp" alt="" className="object-cover" />
                </div>

                <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                    {/* <div className="flex justify-center mx-auto">
                        <img className="w-20" src="/logo.png" alt=""/>
                    </div> */}

                    <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
                        Welcome back!
                    </p>

                    <form onSubmit={handleLogin}>
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" >Email Address</label>
                            <input type="email"  name="email" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"  />
                        </div>

                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" >Password</label>
                            </div>

                            <input type="password" name="password" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"  />
                        </div>

                        <div className="mt-6">
                            <button type="submit" className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#9e2a2b] rounded-lg hover:bg-[#9e2a2b] focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                                Login
                            </button>
                        </div>
                    </form>

                    <div className="flex items-center justify-between mt-4 mb-5">
                        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

                        <Link to="/register" className="text-sm font-semibold text-[#fb8500] uppercase dark:text-gray-400 hover:underline">or Registration</Link>

                        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                    </div>
                    <div className="mb-5">
                        <label className="label justify-center items-center gap-5 text-[#fb8500] font-semibold">
                            Login With <FcGoogle onClick={handleGoogleLogin} className="text-3xl cursor-pointer"></FcGoogle>
                        </label>       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;