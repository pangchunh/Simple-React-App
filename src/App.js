import {useState} from 'react'
import Header from './components/Header'
import Tasks from'./components/Tasks'
import AddTask from './components/AddTask'
function App() {
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true
      },
      {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true
      },
      {
        id: 3,
        text: 'Testing',
        day:'Feb 7th at 2:00pm',
        reminder: false
      }
    ]
  )

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder:!task.reminder} : task))
  }

  //Save Task
  const saveTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1)
    const newTask = { id, ...task}
    console.log(newTask)
    setTasks([...tasks, newTask])
    console.log(tasks)

  }

  const [showAddTask, setShowAddTask] = useState(false)

  return (
    <div className="container">
      <Header title="Task Tracker" onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask} />
      {showAddTask && <AddTask onSave={saveTask} />}
      {tasks.length > 0 ? 
      (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No Tasks to show')}
    </div>
  );
}

export default App;
