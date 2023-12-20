import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const Register = () => {
    const {createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate(null)


    const handleRegister = e =>{
        e.preventDefault()
        const name = e.target.name.value
        const img = e.target.img.value
        const email = e.target.email.value
        const password = e.target.password.value
        // console.log(name , email, img, password);

        createUser(email,password)
        .then(() =>{
            updateUserProfile(name,img)
            .then(()=>{
                toast.success('User created successfully');
                navigate('/')
            })
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
                        Welcome !
                    </p>

                    <form onSubmit={handleRegister}>
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" >Full Name</label>
                            <input type="text"  name="name" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" required/>
                        </div>
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" >Image Url</label>
                            <input type="text"  name="img" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"  />
                        </div>
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" >Email Address</label>
                            <input type="email"  name="email" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"  required/>
                        </div>

                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" >Password</label>
                            </div>

                            <input type="password" name="password" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"  required/>
                        </div>

                        <div className="mt-6">
                            <button type="submit" className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#9e2a2b] rounded-lg hover:bg-[#9e2a2b] focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                                Register
                            </button>
                        </div>
                    </form>

                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

                        <Link to="/login" className="text-sm font-semibold text-[#fb8500] uppercase dark:text-gray-400 hover:underline">or Login</Link>

                        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;