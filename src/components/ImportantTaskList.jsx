import { useState, useCallback } from "react";
import ImportantButton from "./ImportantButton";

export default function ImportantTaskList() {

    const [tasks, setTasks] = useState([
        { id: 1, title: "Learn React hooks", important: false },
        { id: 2, title: "Review Redux-Saga", important: false },
        { id: 3, title: "Finish Tailwind setup", important: false }
    ])

    const handleMarkImportant = useCallback((id) => {
        setTasks((prev) =>
            prev.map((t) =>
                t.id === id ? { ...t, important: !t.important } : t
            )
        )
    }, [])

    return (
        <div className="p-6 bg-gray-800 text-white rounded-lg mt-6 max-w-md mx-auto">
            <h2 className="text-lg font-bold mb-3">
                Important Tasks useCallback Example
            </h2>
            <ul className="space-y-3">
                {tasks.map((task) => (
                    <li
                    key = {task.id}
                    className=" flex justify-between items-center bg-gray-700 p-3 rounded"
                    >
                        <span
                        className={`flex-1 ${task.important ? "text-yellow-400 font-semibold" : ""}`}
                        >
                            {task.title}
                        </span>
                        <ImportantButton
                            onMarkImportant={handleMarkImportant}
                            taskId={task.id}
                        />
                    </li>
                ))}

            </ul>

        </div>
    )
}