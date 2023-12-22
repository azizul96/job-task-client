

const Portfolio = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Our
                    Portfolio</h1>

                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
                    <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80)'}}>
                        <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                            <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Intuitive Task Dashboard</h2>
                            <p className="mt-2 text-sm tracking-wider text-blue-500 dark:text-blue-400 ">A clean and intuitive dashboard provides users with a quick overview of their tasks, upcoming deadlines, and project progress.</p>
                        </div>
                    </div>

                    <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80)'}}>
                        <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                            <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Collaborative Workspace</h2>
                            <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Real-time updates ensure everyone stays on the same page.</p>
                        </div>
                    </div>

                    <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)'}}>
                        <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                            <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Task Creation and Customization</h2>
                            <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Customizable task fields cater to diverse project requirements.</p>
                        </div>
                    </div>

                    <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)'}}>
                        <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                            <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Deadline Notifications</h2>
                            <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 "> Informed with timely notifications about approaching deadlines</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Portfolio;
