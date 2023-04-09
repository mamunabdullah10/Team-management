import TaskCard from "./TaskCard"
import './task.css'
const AllPendingTask = ({ tasks }) => {
const handleFilter =(item)=>{
  return item.status ==='Pending'
}

  return (
    <div className="taskboxes">
      <h3> All Pending Task</h3>
      <div className="taskContainar">

        {tasks.length===0?"this is empty":
        tasks.filter(handleFilter).map(task => <TaskCard task={task} />)}
      </div>
    </div>
  )
}
export default AllPendingTask