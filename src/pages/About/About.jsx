


const About = () => {
    return (
        <div>
            <div className="container mx-auto mt-5">
            <div className="relative flex  flex-col rounded-xl   ">
                <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none flex justify-center px-6">
                    <img
                    src="/logo.png"
                    alt="blog-image"
                    />
                </div>
                <div className="p-6 mb-5">
                    <h4 className="block font-sans text-2xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased mb-5">
                    About Us
                    </h4>
                    <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased mb-10">
                    Welcome to SCC Technovision, the driving force behind TaskMaster, a revolutionary task management system crafted to elevate your productivity and empower your teams. At SCC Technovision, we are committed to redefining the landscape of task management, offering a dynamic platform that reflects our dedication to innovation, collaboration, and user-centric design.
                    </p>
                    <h4 className="block font-sans text-2xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased mb-5">
                    Our Story
                    </h4>
                    <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased mb-10">
                    Founded by a team of passionate developers, designers, and project managers, SCC Technovision emerged from a shared frustration with the limitations of existing task management solutions. We recognized the need for a more sophisticated and intuitive approach to task management, inspiring the creation of TaskMaster.
                    </p>
                    <h4 className="block font-sans text-3xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased mb-5">
                    Our Vision
                    </h4>
                    <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased mb-10">At SCC Technovision, we envision a future where task management is not a hurdle but a catalyst for success. We believe in the transformative power of well-designed tools, and TaskMaster embodies our vision of a world where tasks are effortlessly managed, collaboration thrives, and projects reach new heights. 
                    </p>
                </div>
                <div className="flex items-center justify-between p-6">
                    <div className="flex items-center -space-x-3">
                    <div
                        data-tooltip="Alif Alamin"
                        className="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none"
                    >
                        SCC-Technovision inc.
                    </div>
                    
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default About;