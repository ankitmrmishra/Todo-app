import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

function Todo() {
  const ref = useRef(null);
  const [Task, setTask] = useState([]);
  const [Todo, setTodo] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
  try {
    const response = await axios.get('https://todo-backend-git-main-ankitmrmishra.vercel.app/todos');
    setTask(response.data);
  } catch (error) {
    console.log(error);
  }
};

  const onTyping = (event) => {
    setTodo(event.target.value);
  };

 const addTask = async () => {
  const newTask = {
    title: Todo,
  };

  try {
    const response = await axios.post('https://todo-backend-git-main-ankitmrmishra.vercel.app/todos', newTask);
    setTask(prevTasks => [...prevTasks, response.data]);
    setTodo('');
    fetchTasks(); // Fetch updated task list
  } catch (error) {
    console.log(error);
  }
};


 const deleteTask = async (index) => {
    try {
      await axios.delete(`https://todo-backend-git-main-ankitmrmishra.vercel.app/todos/${index}`);
      const newTasks = Task.filter((task) => task.index !== index);
      setTask(newTasks);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='bg-violet-950 h-[100vh] w-auto'>
      <h1 className='text-8xl font-bold p-20 flex justify-center align-middle items-center text-white'>
        ToDo
      </h1>
      <div className='forms flex justify-center align-middle items-center'>
        <div className='bg-violet-800 flex justify-center align-middle items-center'>
          <input
            ref={ref}
            className='bg-violet-400 h-10 flex text-center items-center p-5 text-black placeholder:text-zinc-500'
            type='text'
            name=''
            id=''
            placeholder='Add your task here'
            onChange={onTyping}
            value={Todo}
          />
          <button className='h-10 flex text-center items-center p-5' onClick={addTask}>
            ADD
          </button>
        </div>
      </div>
      <div className='flex flex-col justify-center align-middle items-center p-4'>
        {Task.map((task , index ) => (
          <div className='todos flex flex-row justify-center align-middle items-center text-center mt-2 text-white h-16' key={index}>
            <div className='taskks p-[0.5rem] bg-violet-600'>{task.title}</div>
            <button
              className='m-10 p-[0.5rem] bg-violet-800'
              onClick={() => deleteTask(task.index)}
            >
              DELETE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
