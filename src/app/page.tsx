"use client"

import { useEffect, useState } from "react";

import Check from "./_assets/icon-check.svg";
import Cross from "./_assets/icon-cross.svg";
import Image from 'next/image';
import Sun from "./_assets/icon-sun.svg";
import moon from "./_assets/icon-moon.svg";

export default function Home() {

  const [text, setText] = useState('')

  return (
    <main className="bg-bg-desktop-light min-h-screen bg-no-repeat bg-white flex justify-center ">
      <div className="flex flex-col border-2 border-black w-1/2 p-20">
        <div className="flex items-center justify-between w-full">
          <div className=" tracking-[0.4em] text-4xl text-white font-bold">
            TODO
          </div>
          <Image
            src={moon}
            alt="My SVG"
            width={25}
            height={25}
          />
        </div>
        <div className="flex text-lg border-2 bg-white border-white rounded-md mt-12 py-4 px-6 items-center gap-6">
          <div className=" rounded-full border-[1px] border-black w-6 h-6 shrink-0"></div>
          <input
            type="text"
            name="todo"
            id="todo"
            value={text}
            onChange={(e)=>{setText(e.target.value)}}
            className="outline-none w-full bg-white"
            placeholder="Create a new todo..."
          />
        </div>

        <div className="flex-col border-[1px] border-black mt-5 rounded-md bg-gray-100 text-lg shadow-sm shadow-gray-400">
          <div className="flex py-4 px-6 items-center gap-6 border-b-[1px] border-gray-200 ">
            <div className=" bg-black rounded-full border-[1px] border-black w-6 h-6 shrink-0"></div>
            <div className="w-full bg-red-200">
              Todo #1
            </div>
          </div>
          <div className="flex py-4 px-6 items-center gap-6 border-b-[1px] border-gray-200 ">
            <div className=" bg-black rounded-full border-[1px] border-black w-6 h-6 shrink-0"></div>
            <div className="w-full bg-red-200">
              Todo #1
            </div>
          </div>
          <div className="flex py-4 px-6 items-center gap-6 border-b-[1px] border-gray-200 ">
            <div className=" bg-black rounded-full border-[1px] border-black w-6 h-6 shrink-0"></div>
            <div className="w-full bg-red-200">
              Todo #1
            </div>
          </div>
          <div className="flex py-4 px-6 items-center gap-6 border-b-[1px] border-gray-200 ">
            <div className=" bg-black rounded-full border-[1px] border-black w-6 h-6 shrink-0"></div>
            <div className="w-full bg-red-200">
              Todo #1
            </div>
          </div>
          <div className="flex py-4 px-6 items-center gap-6 border-b-[1px] border-gray-200 ">
            <div className=" bg-black rounded-full border-[1px] border-black w-6 h-6 shrink-0"></div>
            <div className="w-full bg-red-200">
              Todo #1
            </div>
          </div>
          <div className="flex py-4 px-6 items-center gap-6 border-b-[1px] border-gray-200 ">
            <div className=" bg-black rounded-full border-[1px] border-black w-6 h-6 shrink-0"></div>
            <div className="w-full bg-red-200">
              Todo #1
            </div>
          </div>
          <div className="flex justify-between items-center rounded-b-md text-xs font-bold py-3 px-6 ">
            <div>
              5 items left
            </div>
            <div className="flex gap-3">
              <button onClick={()=>{}}>
                All
              </button>
              <button onClick={()=>{}}>
                Active
                </button>
              <button onClick={()=>{}}>
                Completed
              </button>
            </div>
            <div>
              <button>Clear Completed</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
