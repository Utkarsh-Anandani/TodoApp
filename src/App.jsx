import React, { useState, createContext } from 'react';
import HomePage from './pages/HomePage';

export const AppContext = createContext();

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [darkMode, setDarkMode] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');


  const updateTodo = (id) => {
    let updatedTodo = todos.filter((todo) => todo.id === id)[0];
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    setTitle(updatedTodo.title);
    setDescription(updatedTodo.description);
    setDate(updatedTodo.date);
  }

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <AppContext.Provider value={{todos, setTodos, title, setTitle, description, setDescription, date, setDate, darkMode, toggleDarkMode, updateTodo}} >
    <HomePage />
    </AppContext.Provider>
  );
}

export default App;
