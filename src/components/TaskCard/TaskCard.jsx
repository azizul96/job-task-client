import { useDrag } from "react-dnd";

const TaskCard = ({task}) => {
    const [{ isDragging }, drag] = useDrag({
        type: 'task',
        item: {id: task._id},
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
      });
    
    return (
        <div ref={drag} className={`  ${isDragging ? 'opacity-50' : ''}`}>
            <div  className="card bg-base-100 shadow-xl rounded-md">
                <div className="card-body p-5">
                    <h2 className="card-title">{task.title}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <p>Deadline: 22/12/2023</p>
                    <p>Priority: High</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-sm btn-success text-white rounded-full">Update</button>
                        <button  className="btn btn-sm btn-error text-white rounded-full">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;