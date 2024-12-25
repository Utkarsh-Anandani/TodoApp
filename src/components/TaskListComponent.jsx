import React, { useContext, useState } from 'react';
import { AppContext } from '../App';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const TodoList = () => {
  const [expandedDates, setExpandedDates] = useState({});

  const { todos, setTodos, updateTodo, darkMode } = useContext(AppContext)

  const toggleExpand = (date) => {
    setExpandedDates((prev) => ({ ...prev, [date]: !prev[date] }));
  };

  const deleteTodo = (id) => setTodos((prev) => prev.filter((todo) => todo.id !== id));

  const groupedTodos = todos.reduce((groups, todo) => {
    groups[todo.date] = groups[todo.date] || [];
    groups[todo.date].push(todo);
    return groups;
  }, {});

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14'>
      {Object.entries(groupedTodos).map(([date, tasks]) => (
        <div key={date} className="mb-4">
          <div className={`flex justify-between items-center bg-gray-200 p-2 ${darkMode && 'bg-gray-700'}`}>
            <h2 className="font-bold">{date}</h2>
            <button onClick={() => toggleExpand(date)}>
              {expandedDates[date] ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
          </div>
          {expandedDates[date] && (
            <div className={`p-2 border ${darkMode && 'border-gray-600'}`}>
              {tasks.map((task) => (
                <div key={task.id} className="flex flex-row justify-between p-2">
                  <div>
                  <h3 className="font-bold">{task.title}</h3>
                  <p>{task.description}</p>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => deleteTodo(task.id)}
                      className="bg-red-500 text-gray-200 rounded-md px-3 py-2 my-auto text-lg"
                    >
                      <MdDelete />
                    </button>
                    <button
                      onClick={() => updateTodo(task.id)}
                      className="bg-black text-gray-200 rounded-md px-3 py-2 my-auto text-lg"
                    >
                      <FaEdit />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
