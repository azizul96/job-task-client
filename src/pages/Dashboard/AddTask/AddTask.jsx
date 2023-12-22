import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";

const AddTask = () => {
    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic()

    const onSubmit = async(data) =>{
        console.log(data)
        
        const menuItem = {
            title: data.title,
            description: data.description,
            priority: data.priority,
            deadline: data.deadline,
            status: "todo"
        }
        const taskRes = await axiosPublic.post('/tasks', menuItem)
            console.log(taskRes.data);
            if(taskRes.data.insertedId){
                reset()
                toast.success("Task Added!")
            }
        console.log(menuItem)
    }
    return (
        <div>
            <div className=" bg-[#335c67] p-5 rounded-md">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="from-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold text-white">Task Title</span>
                    </label>
                    <input {...register("title", {required: true})} type="text" placeholder="Type here" className="input input-bordered input-primary w-full " required />
                </div>
                <div className="from-control w-full my-6">
                    <label className="label">
                        <span className="label-text font-semibold text-white">Task Description</span>
                    </label>
                    <textarea {...register("description")} 
                    className="textarea textarea-primary w-full" placeholder="Recipe"></textarea>
                </div>
                <div className="flex gap-5">
                    <div className="from-control w-full my-6">
                        <label className="label">
                            <span className="label-text font-semibold text-white">Priority</span>
                        </label>
                        <select {...register("priority", {required: true})}
                        className="select select-primary w-full ">
                            <option disabled selected>Select Category</option>
                            <option value="low">Low</option>
                            <option value="moderator">Moderator</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                    <div className="from-control w-full my-6">
                        <label className="label">
                            <span className="label-text font-semibold text-white">Deadline</span>
                        </label>
                        <input {...register("deadline", {required: true})} type="date" placeholder="Price" className="input input-bordered input-primary w-full " required/>
                    </div>
                    
                </div>
                <button className="btn bg-[#fb8500] hover:bg-[#fb8500] text-white  w-full border-none shadow-md">Add Task </button>
            </form>
            </div>
        </div>
    );
};

export default AddTask;