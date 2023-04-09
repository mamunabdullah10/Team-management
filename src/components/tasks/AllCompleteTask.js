import TaskCard from "./TaskCard"

const AllCompleteTask = ({tasks}) => {
    return (
        <div className="taskboxes">
            <h3> All Complete Task</h3>
            <div className="taskContainar">
        
                 {
                    tasks.map((task)=> <TaskCard task={task} />)
                 }

            </div>
        </div>
    )
}
export default AllCompleteTask 