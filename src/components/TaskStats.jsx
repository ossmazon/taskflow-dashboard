import { useMemo } from "react";
import { useSelector } from "react-redux";

export default function TaskStats(){
    
    const tasks = useSelector((state)=> state.tasks.list)
    const {total, completed, pending}= useMemo (()=>{
        console.log("Calculating task statistics...")

        const total = tasks.length
        const completed = tasks.filter((t)=> t.completed).length
        const pending = total - completed
        return{total, completed, pending}
    },[tasks])

    return (
        <div className="p-4 bg-gray-800 rounded-lg text-white max-w-md mx-auto mt-6">
            <h2 className="text-lg font-bold mb-3">
                Task Statics useMemo Example
            </h2>            
            <ul className="space-y-1">
                <li>Total Tasks: {total}</li>
                <li>Completed: {completed}</li>
                <li>Pending: {pending}</li>
            </ul>
        </div>
    )
}