import AllCompleteTask from "./AllCompleteTask"
import AllPendingTask from "./AllPendingTask"
import FilterHeader from "./FilterHeader"
import './task.css'

const Task = ({ tasks }) => {
let completeTask = tasks.filter(task=>task.status==='Complete')


    return (
        <div>
            <FilterHeader />
            <AllPendingTask tasks={tasks} />
            <AllCompleteTask tasks={completeTask}/>
        </div>
    )
}
export default Task