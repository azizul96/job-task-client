import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80)'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl font-bold">Welcome To Our Task Management Platform</h1>
                        <Link to="/dashboard">
                        <button className="px-5 py-3 mt-4 bg-[#9e2a2b] rounded-lg shadow-lg  font-semibold text-white">Let’s Explore</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;