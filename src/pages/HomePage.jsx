import React, { useContext, useEffect } from 'react'
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { AppContext } from '../App';
import { MdWbSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";

const HomePage = () => {

    const  {darkMode, toggleDarkMode, todos, setTodos} = useContext(AppContext);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [darkMode, todos]);

  return (
    <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} min-h-screen p-5`}>
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold">Todo Application</h1>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded border"
        >
          {!darkMode ? <IoMoon /> : <MdWbSunny />}
        </button>
      </header>
      <main className="p-4">
        <TodoForm setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </main>
    </div>
  )
}

export default HomePage
