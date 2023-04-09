import Button from "../shared/ui/button/Button"
const TaskCard = ({ task }) => {
    const { taskName, category, teamMember, deadline } = task

    return (
        <div className="taskcard">
            <p> {taskName}</p>
            <h4>Category:{category}</h4>
            <h4>{teamMember}</h4>
            <h4>{deadline}</h4>
            <Button label="Edit" />
            <Button label="Done" />

        </div>
    )
}
export default TaskCard

