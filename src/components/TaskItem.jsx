import { useDispatch } from "react-redux";
import { toggleTaskCompletion } from "../store/slices/taskSlice";

export default function TaskItem({
    task
}) {

    const dispatch = useDispatch()

    return (
        <>
            <li
                key={task.id}
                onClick={() => dispatch(toggleTaskCompletion(task.id))}
                className="p-3 bg-gray-800 rounded-lg shadow-sm flex items-center-pointer hover:bg-gray-700 transition"
            >
                <span
                    className={`flex-1 ${task.completed ? "line-through text-gray-500" : ""}`}
                >
                    {task.title}
                </span>
                <span
                    className="text-xs text-gray-400"
                >
                    #{task.id}
                </span>
            </li>
        </>
    )
}