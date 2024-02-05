import Image from 'next/image';
import check from "../_assets/icon-check.svg";
import cross from "../_assets/icon-cross.svg";
import { useState } from 'react';

export default function Task(props: { toggleState: (id: string)=> void; handleDeleteTask: (id: string) => void; task: { id: string; state: string, text: string }}){
    const [isHover, setIsHover] = useState(false)
    return(
        <div key={props.task.id} className="flex py-4 px-5 items-center gap-5 border-b-[1px] border-gray-200 ">
            <span className="cursor-pointer " onClick={()=>{props.toggleState(props.task.id)}}>
                {
                    props.task.state === "Active" ?
                        <div className=" bg-white rounded-full border-[1px] border-black w-6 h-6 shrink-0">
                        </div>
                    :  props.task.state === "Completed" ?
                        <div className=" flex justify-center items-center bg-white rounded-full border-[1px] border-black w-6 h-6 shrink-0">
                            <Image
                                className=" text-black "
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
                className={`flex w-full cursor-pointer ${props.task.state === 'Completed' ? 'line-through' : '' }`}
            >
                <div className="w-full" onClick={()=>{props.toggleState(props.task.id)}}>
                    {props.task.text}
                </div>
                <button onClick={()=>{props.handleDeleteTask(props.task.id)}}>
                    <Image
                        className={`text-black ${isHover ? 'visible' : 'invisible'}`}
                        src={cross}
                        alt="My SVG"
                        width={20}
                        height={20}
                    />
                </button>
            </div>
        </div>
    )
}