"use client"

import { useEffect, useState } from "react";

import Image from 'next/image';
import Task from "./_components/Task";
import moon from "./_assets/icon-moon.svg";
import sun from "./_assets/icon-sun.svg";
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  const [theme, setTheme] = useState('Light') //Light-Dark
  const [text, setText] = useState('')
  const [filter, setFilter] = useState('All') //All-Active-Completed
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      state: 'Active',
      text: 'Laundry'
    },
    {
      id: uuidv4(),
      state: 'Completed',
      text: 'Code Code Code'
    },
    {
      id: uuidv4(),
      state: 'Active',
      text: 'Learn interview questions'
    },
  ])

  const handleClearCompleted = () => {
    const updatedTasks = tasks.filter((task) => task.state === 'Active')
    setTasks(updatedTasks)
  }

  const handleDeleteTask = (id: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== id)
    setTasks(updatedTasks)
  }

  const toggleState = (id: string) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          state: task.state ==='Active'? 'Completed' : 'Active'
        };
      }
      return task;
    })
    setTasks(updatedTasks)
  }

  const toggleTheme = () => {
    setTheme(theme === 'Light' ? 'Dark' : 'Light')
  }

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      if (text !== '') {
        setTasks([
          ...tasks,
          {
            id: uuidv4(),
            state: 'Active',
            text
          }
        ])
        setText('')
      }
    }
  }

  return (
    <main className="bg-bg-desktop-light min-h-screen bg-no-repeat bg-white flex justify-center ">
      <div className="flex flex-col w-1/2 p-20">
        {/* HEADER */}
        <div className="flex items-center justify-between w-full">
          <div className=" tracking-[0.4em] text-4xl text-white font-bold">
            TODO
          </div>
          <Image
            onClick={toggleTheme}
            className="cursor-pointer"
            src={theme === 'Light'? moon : sun}
            alt="My SVG"
            width={25}
            height={25}
          />
        </div>
        {/* INPUT */}
        <div className="flex text-lg border-2 bg-white border-white rounded-md mt-12 py-4 px-5 items-center gap-5">
          <div className=" rounded-full border-[1px] border-black w-6 h-6 shrink-0"></div>
          <input
            type="text"
            name="todo"
            id="todo"
            value={text}
            onChange={(e)=>{setText(e.target.value)}}
            className="outline-none w-full bg-white"
            placeholder="Create a new todo..."
            onKeyDown={handleKeyPress}
          />
        </div>

        <div className="flex-col border-[1px] border-black mt-5 rounded-md bg-gray-100 text-lg shadow-sm shadow-gray-400">
          {/* List */}
          {
            tasks.filter((task) => task.state === filter || filter === "All" ).map((task, i) =>
              <Task key={task.id} task={task} toggleState={toggleState} handleDeleteTask={handleDeleteTask}/>
            )
          }
          {/* Status Bar */}
          <div className="flex justify-between items-center rounded-b-md text-xs font-bold py-3 px-5 ">
            <div className="text-gray-500">
              {tasks.filter((task)=> task.state === 'Active').length} items left
            </div>
            <div className="flex gap-3">
              <button className={` hover:text-black ${filter === 'All' ? 'text-blue-800' : 'text-gray-500' }`} onClick={()=>{setFilter('All')}}>
                All
              </button>
              <button className={` hover:text-black ${filter === 'Active' ? 'text-blue-800' : 'text-gray-500' }`} onClick={()=>{setFilter('Active')}}>
                Active
              </button>
              <button className={` hover:text-black ${filter === 'Completed' ? 'text-blue-800' : 'text-gray-500' }`} onClick={()=>{setFilter('Completed')}}>
                Completed
              </button>
            </div>
            <div>
              <button className="text-gray-500 hover:text-black" onClick={handleClearCompleted}>Clear Completed</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
