import React, { useState, useEffect } from 'react'
import { TodoProvider } from './contexts'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import {
  fetchTasks,
  addTask,
  deleteTask,
  updateTask,
} from './api.js' // adjust path as needed

function App() {
  const [todos, setTodos] = useState([]);

  const loadTodos = async () => {
    const res = await fetchTasks();
    setTodos(res.data);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const addTodo = async ({ todo }) => {
    await addTask({ title: todo, completed: false });
    loadTodos();
  };

  const updateTodo = async (id, updatedTodo) => {
    await updateTask(id, updatedTodo);
    loadTodos();
  };

  const deleteTodoById = async (id) => {
    await deleteTask(id);
    loadTodos();
  };

  const toggleComplete = async (id) => {
    const current = todos.find((t) => t._id === id);
    if (current) {
      await updateTask(id, { ...current, completed: !current.completed });
      loadTodos();
    }
  };

  return (
    <TodoProvider
      value={{
        todos,
        addTodo,
        updateTodo,
        deleteTodo: deleteTodoById,
        toggleComplete,
      }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo._id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;




// import { useState, useEffect } from 'react'
// import { TodoProvider } from './contexts'
// import './App.css'
// import TodoForm from './components/TodoForm.jsx'
// import TodoItem from './components/TodoItem.jsx'
// import axios from 'axios'

// // const BASE_URL = import.meta.env.VITE_API_URL

// export const fetchTasks = () => axios.get(`${BASE_URL}/api/tasks`)
// export const addTask = (task) => axios.post(`${BASE_URL}/api/tasks`, task)
// export const deleteTask = (id) => axios.delete(`${BASE_URL}/api/tasks/${id}`)
// export const updateTask = (id, updated) =>
//   axios.put(`${BASE_URL}/api/tasks/${id}`, updated)

// function App() {
//   const [todos, setTodos] = useState([])

//   const addTodo = async (todo) => {
//     try {
//       const res = await addTask(todo)
//       setTodos((prev) => [res.data, ...prev])
//     } catch (error) {
//       console.error('Error adding todo:', error)
//     }
//   }

//   const updateTodo = async (id, updatedTodo) => {
//     try {
//       const res = await updateTask(id, updatedTodo)
//       setTodos((prev) =>
//         prev.map((todo) => (todo._id === id ? res.data : todo))
//       )
//     } catch (error) {
//       console.error('Error updating todo:', error)
//     }
//   }

//   const deleteTodo = async (id) => {
//     try {
//       await deleteTask(id)
//       setTodos((prev) => prev.filter((todo) => todo._id !== id))
//     } catch (error) {
//       console.error('Error deleting todo:', error)
//     }
//   }

//   const toggleComplete = async (id) => {
//     const todoToUpdate = todos.find((todo) => todo._id === id)
//     if (!todoToUpdate) return

//     const updated = {
//       ...todoToUpdate,
//       completed: !todoToUpdate.completed,
//     }

//     await updateTodo(id, updated)
//   }

//   useEffect(() => {
//     const loadTodos = async () => {
//       try {
//         const res = await fetchTasks()
//         if (Array.isArray(res.data)) {
//           setTodos(res.data)
//         } else {
//           console.error('Expected an array from API')
//           setTodos([])
//         }
//       } catch (err) {
//         console.error('API failed, checking localStorage:', err)
//         const local = JSON.parse(localStorage.getItem('todos'))
//         if (Array.isArray(local)) {
//           setTodos(local)
//         }
//       }
//     }

//     loadTodos()
//   }, [])

//   useEffect(() => {
//     localStorage.setItem('todos', JSON.stringify(todos))
//   }, [todos])

//   return (
//     <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
//       <div className="bg-[#172842] min-h-screen py-8">
//         <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
//           <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
//           <div className="mb-4">
//             <TodoForm />
//           </div>
//           <div className="flex flex-wrap gap-y-3">
//             {todos.map((todo) => (
//               <div key={todo._id || todo.id} className="w-full">
//                 <TodoItem todo={todo} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </TodoProvider>
//   )
// }

// export default App

// import { useState, useEffect } from 'react'
// import {TodoProvider} from './contexts'
// // import '../App.css'
// import TodoForm from './components/TodoForm'
// import TodoItem from './components/TodoItem'


// import axios from 'axios';

// const BASE_URL = import.meta.env.VITE_API_URL;

// export const fetchTasks = () => axios.get(`${BASE_URL}/api/tasks`);
// export const addTask = (task) => axios.post(`${BASE_URL}/api/tasks`, task);
// export const deleteTask = (id) => axios.delete(`${BASE_URL}/api/tasks/${id}`);
// export const updateTask = (id, updated) => axios.put(`${BASE_URL}/api/tasks/${id}`, updated);

// function App() {
//   const [todos, setTodos] = useState([])

//   const addTodo = (todo) => {
//     setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
//   }

//   const updateTodo = (id, todo) => {
//     setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))

    
//   }

//   const deleteTodo = (id) => {
//     setTodos((prev) => prev.filter((todo) => todo.id !== id))
//   }

//   const toggleComplete = (id) => {
//     //console.log(id);
//     setTodos((prev) => 
//     prev.map((prevTodo) => 
//       prevTodo.id === id ? { ...prevTodo, 
//         completed: !prevTodo.completed } : prevTodo))
//   }

//   useEffect(() => {
//     const todos = JSON.parse(localStorage.getItem("todos"))

//     if (todos && todos.length > 0) {
//       setTodos(todos)
//     }
//   }, [])

//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos))
//   }, [todos])
  



//   return (
//     <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
//       <div className="bg-[#172842] min-h-screen py-8">
//                 <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
//                     <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
//                     <div className="mb-4">
//                         {/* Todo form goes here */} 
//                         <TodoForm />
//                     </div>
//                     <div className="flex flex-wrap gap-y-3">
//                         {/*Loop and Add TodoItem here */}
//                         {todos.map((todo) => (
//                           <div key={todo.id}
//                           className='w-full'
//                           >
//                             <TodoItem todo={todo} />
//                           </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//     </TodoProvider>
//   )
// }

// export default App