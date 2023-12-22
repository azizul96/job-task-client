import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
// import Swal from "sweetalert2";
import { DndProvider  } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TaskCard from "../../../components/TaskCard/TaskCard";



const AllTask = () => {
    const axiosPublic = useAxiosPublic()
    const {data: tasks =[], } = useQuery({
        queryKey: ['tasks'],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/tasks`)
            return res.data;
        }
    })


        // const allTodo = tasks.filter(task => task.status === "todo")
        // const allOngoing = tasks.filter(task => task.status === "ongoing")
        // const allCompleted = tasks.filter(task => task.status === "completed")


    // const handleDelete = (id) =>{
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //       }).then((result) => {
    //         if (result.isConfirmed) {
              
    //         axiosPublic.delete(`/tasks/${id}`)
    //         .then(res =>{
    //             // console.log(res);
    //             if(res.data.deletedCount > 0){
    //                 Swal.fire({
    //                     title: "Deleted!",
    //                     text: "Your file has been deleted.",
    //                     icon: "success"
    //                 });
    //                 refetch()
    //             }
    //         })
    //         }
    //       });
    // }

       
   
    

  
    return (
        <DndProvider backend={HTML5Backend}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            <div className="bg-[#395775] rounded-md p-2 h-fit">
                <h1 className="text-white text-center font-bold mb-10">To-Do</h1>
                <div className="">
                    {
                        tasks.map(task => <TaskCard key={task._id} task={task}></TaskCard>)
                    //     <div key={task._id} className="card bg-base-100 shadow-xl rounded-md">
                    //     <div className="card-body p-5">
                    //         <h2 className="card-title">{task.title}</h2>
                    //         <p>{task.description}</p>
                    //         <p>Deadline: {task.deadline}</p>
                    //         <p>Priority: {task.priority}</p>
                    //         <div className="card-actions justify-end">
                    //             <button className="btn btn-sm btn-success text-white rounded-full">Update</button>
                    //             <button onClick={()=>handleDelete(task._id)} className="btn btn-sm btn-error text-white rounded-full">Delete</button>
                    //         </div>
                    //     </div>
                    // </div>)
                    }
                </div>

            </div>
                
                <div className="bg-[#fb8500] rounded-md p-2 ">
                    <h1 className="text-white text-center font-bold ">Ongoing</h1>
                    
                </div>
                

            <div className="bg-[#4fac46] rounded-md p-2 h-fit">
                <h1 className="text-white text-center font-bold ">Completed</h1>
            </div>
        </div>
        </DndProvider>
    );
};

export default AllTask;