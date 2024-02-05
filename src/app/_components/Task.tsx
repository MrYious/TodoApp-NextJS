import Image from 'next/image';
import check from "../_assets/icon-check.svg";
import cross from "../_assets/icon-cross.svg";
import { useState } from 'react';

export default function Task(props: { theme: string; toggleState: (id: string)=> void; handleDeleteTask: (id: string) => void; task: { id: string; state: string, text: string }}){
    const [isHover, setIsHover] = useState(false)
    return(
        <div key={props.task.id} className="flex py-4 px-5 items-center gap-5 border-b-[1px] border-gray-200 ">
            <span className="cursor-pointer select-none" onClick={()=>{props.toggleState(props.task.id)}}>
                {
                    props.task.state === "Active" ?
                        <div className={`${props.theme === 'light' ? 'border-gray-300 ' : 'border-gray-600'} rounded-full border-[1px] border-black w-6 h-6 shrink-0`}>
                        </div>
                    :  props.task.state === "Completed" ?
                        <div className={`${props.theme === 'light' ? 'border-gray-300' : 'border-gray-600'} flex justify-center p-1 items-center bg-violet-500 rounded-full border-[1px] border-black w-6 h-6 shrink-0`}>
                            <Image
                                className=""
                                src={check}
                                alt="My SVG"
                                width={25}
                                height={25}
                            />
                        </div>
                    :
                        <></>
                }
            </span>
            <div
                onMouseEnter={()=>{setIsHover(true)}}
                onMouseLeave={()=>{setIsHover(false)}}
                className={`flex w-full cursor-pointer`}
            >
                <div className={` ${props.task.state === 'Active' && props.theme === 'light' ? 'text-gray-500 font-semibold' : props.theme === 'light' ? 'text-gray-300 line-through' : props.theme === 'dark' && props.task.state === 'Active' ? 'text-gray-200 font-semibold' : ' text-gray-500 line-through' } w-full`} onClick={()=>{props.toggleState(props.task.id)}}>
                    {props.task.text}
                </div>
                <button onClick={()=>{props.handleDeleteTask(props.task.id)}}>
                    <Image
                        className={`text-black ${isHover ? 'visible' : 'invisible'}`}
                        src={cross}
                        alt="My SVG"
                        width={18}
                        height={18}
                    />
                </button>
            </div>
        </div>
    )
}