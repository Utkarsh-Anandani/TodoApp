import React, { useContext, useState } from 'react';
import { AppContext } from '../App';

const TodoForm = () => {

  const { setTodos, setTitle, title, description, setDescription, date, setDate, darkMode } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !date) return alert('Title and Date are required!');
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), title, description, date, completed: false },
    ]);
    setTitle('');
    setDescription('');
    setDate('');
  };

  return (
    <form className="mb-12" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={`border p-2 w-full mb-2 ${darkMode && 'bg-gray-800 border-gray-400'}`}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={`border p-2 w-full mb-2 ${darkMode && 'bg-gray-800 border-gray-400'}`}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className={`border p-2 w-full mb-2 ${darkMode && 'bg-gray-800 border-gray-400'}`}
        required
      />
      <button type="submit" className={`bg-blue-500 ${!darkMode && 'text-white'} py-2 px-4 rounded ${darkMode && 'bg-gray-400 '}`}>
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
