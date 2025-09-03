import {useState} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

const SimpleTodos = () => {
  const [todolist, setTodoList] = useState(initialTodosList)
  const [newTask, setNewTask] = useState('')

  const deleteTodo = id => {
    const filteredTodo = todolist.filter(todo => todo.id !== id)
    setTodoList(filteredTodo)
  }

  function getRandomId(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const addNewTask = () => {
    const newTasKs = {
      id: getRandomId(10, 1000),
      title: newTask,
    }
    console.log(newTasKs)
    setTodoList(prev => [...prev, newTasKs])
    setNewTask('')
  }

  return (
    <div className="bg-container">
      <div className="todo-container">
        <h1 className="heading">Simple Todos</h1>
        <section>
          <div>
            <input
              type="text"
              id="todo"
              placeholder="New Task..."
              onChange={e => setNewTask(e.target.value)}
            />
            <button type="button" onClick={() => addNewTask()}>
              Add Task
            </button>
          </div>
        </section>
        <h2>Your Task</h2>
        <ul className="todo-lists">
          {todolist.map(eachTodo => (
            <TodoItem
              key={eachTodo.id}
              todoDetails={eachTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default SimpleTodos
