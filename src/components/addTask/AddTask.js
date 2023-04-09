import { useState } from "react"
import Button from "../shared/ui/button/Button"
import InputBox from "../shared/ui/inputBox/InputBox"
import './addTask.css'

const init = {
  taskName: '',
  category: "",
  teamMember: " ",
  deadline: "",
  status: "Pending"
}


const AddTask = ({ members, handleSetTasks }) => {

  const [data, setData] = useState(init)

  const handleChange = (e) => {

    const { name, value } = e.target

    let oldData = { ...data };
    oldData[name] = value;
    setData(oldData)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSetTasks(data)
    setData(init)
  }

  return (
    <div className="addTaskForm">
      <h3>Add Task</h3>

      <form onSubmit={handleSubmit}>
        <InputBox placeholder="Task Name"
          value={data.taskName}
          name="taskName"
          onChange={handleChange}
        /> <br />


        <select
          defaultValue={data.category}
          name="category"
          onChange={handleChange}

        >


          <option> Select Category </option>
          <option value={"Unit Test"}> Unit Test </option>
          <option value={"Front-End"}>Front-End </option>
          <option value={"Back-Test"}> Back Test </option>
        </select><br />

        <select
          defaultValue={data.teamMember}
          name="teamMember"
          onChange={handleChange}
        >
          <option> Select Team </option>

          {
            members.map((member, i) =>
              <option key={i} value={member}>{member} </option>

            )
          }

          <InputBox
            type="data"
            value={data.deadline}
            name="deadline"
            onChange={handleChange}
          /> <br />
        </select><br />

        <InputBox placeholder="deadline"
          value={data.taskName}
          name="deadline"
          type="date"
          onChange={handleChange}
        />

        <Button label="Add" type="submit" />
      </form>
    </div>
  )
}
export default AddTask