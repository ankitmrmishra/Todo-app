import React from 'react'
import { useState , useRef } from 'react'
function todo() {
    const ref = useRef(null)
    const [Task , seTask] = useState([]);
    const [Todo, setTodo] = useState("");
function ontypeing(event){
setTodo(event.target.value);
}
const addTask = () => {
    const tasknew ={
        id: Task.length === 0 ? 1 : Task[Task.length - 1].id + 1,
        taskname : Todo,
    };
    seTask([...Task , tasknew])
    ref.current.value = ""
}
const deletetask = (id) =>{
 const newtodo = Task.filter((task) => {
    if(task.id === id){
        return false;
    }
    else{
        return true;
    }
 })
seTask(newtodo);
}
  return (
    <div className='bg-violet-950 h-[100vh] w-auto'>
 <h1 className="text-8xl font-bold  p-20 flex justify-center align-middle items-center text-white">
     ToDo
    </h1>
<div className="forms flex justify-center align-middle items-center  ">
    <div className='bg-violet-800 flex justify-center align-middle items-center '>
        <input ref={ref} className=" bg-violet-400 h-10 flex text-center items-center p-5 text-black placeholder:text-zinc-500" type="text" name="" id="" placeholder='Add your task here' onChange={ontypeing} />
        <button className="h-10 flex text-center items-center p-5 " onClick={addTask}>ADD</button>
    </div>
</div>
<div className="flex  flex-col justify-center align-middle items-center p-4">
    {Task.map((task, index) => (
          <div className="todos flex flex-row justify-center align-middle items-center text-center mt-2 text-white  h-16  " key={index}>
            <div className="taskks p-[0.5rem] bg-violet-600">
{task.taskname}
            </div>
            
             <button className='m-10 p-[0.5rem] bg-violet-800' onClick={() => deletetask(task.id)}>DELETE</button>
          </div>
         
        ))}
   
</div>
    </div>
  )
}

export default todo 