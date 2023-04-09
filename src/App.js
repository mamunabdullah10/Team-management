import './App.css';
import Header from './components/header/Header';
import AddTask from './components/addTask/AddTask';
import Task from './components/tasks/Task'
import Teams from './components/teams/Teams'
import { useState } from 'react';


const data = [
  {
    taskName: 'Task 1',
    category: 'Front-End',
    teamMember: 'mamun',
    deadline: '2023-04-19',
    status: 'Pending'
  },
  {
    taskName: 'Task 2',
    category: 'Front-End',
    teamMember: 'Abdullah',
    deadline: '2023-04-19',
    status: 'Complete'
  },
  {
    taskName: 'Task 3',
    category: 'Front-End',
    teamMember: 'Mamun Abdullah',
    deadline: '2023-04-19',
    status: 'Pending'
  }
]

const App = () => {

  const [members, setMembers] = useState([])
  const [tasks, setTask] = useState([...data])

  const handleSetMembers = (data) => {
    // setMembers([members, ...data])
    let oldData = [...members]
    oldData.push(data)
    setMembers(oldData)
  }

  const handleSetTasks = (data) => {
    // setMembers([members, ...data])
    let oldData = [...tasks]
    oldData.push(data)
    setTask(oldData)
  }

  console.log(tasks);

  return (
    <div>
      <Header />
      <main>
        <div className='sidebar'>

          <AddTask members={members} handleSetTasks={handleSetTasks} />
          <Teams handleSetMembers={handleSetMembers} members={members} />
        </div>
        <Task tasks={tasks} />
      </main>

    </div>
  );
}

export default App