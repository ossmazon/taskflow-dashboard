import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../store/slices/taskSlice";
import TaskItem from "./TaskItem";
import { useTheme } from "../context/ThemeContext";
import FocusInput from "./FocusInputs";
import TaskStats from "./TaskStats";
import ImportantTaskList from "./ImportantTaskList";
import UniqueIdExample from "./UniqueIdExamples";
import Transition from "./TransitionExample";
import DeferredValueExample from "./DeferredValueExample";

export default function TaskList() {

    const dispatch = useDispatch()
    const { list: tasks, error, loading } = useSelector((state) => state.tasks)
    const { theme, toggleTheme } = useTheme()
    const bgClass = theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
    useEffect(() => {
        dispatch(fetchTasks())
    }, [dispatch])

    return (
        <>
            <div className={`p-6 min-h-screen transition-colors duration-300 ${bgClass}`}>
                <div className=" flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">
                        TaskList
                    </h1>
                    <button
                        onClick={toggleTheme}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-3 py-1 rounded-lg"
                    >
                        Toogle {theme === "dark" ? "Light" : "Dark"} Mode
                    </button>
                </div>
                <FocusInput />
                <ImportantTaskList />
                <UniqueIdExample />
                <Transition />
                <DeferredValueExample />
                <TaskStats />
                <div className="p-6 bg-gray-900 min-h-screen text-white">

                    <div className=" flex justify-center mb-6">
                        <button
                            onClick={() => dispatch(fetchTasks())}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg"
                        >
                            Reload Tasks
                        </button>
                    </div>
                    {error && (
                        <p className="text-red-400 text-center mb-4">
                            Error fetching tasks: {error}
                        </p>
                    )}
                    {loading && (
                        <p
                            className="text-gray-400 text-center mb-4"
                        >
                            Loading tasks...
                        </p>
                    )}
                    <ul className="space-y-2">
                        {tasks.length > 0 && !loading ? (
                            tasks.map((task) =>
                                <TaskItem
                                    key={task.id}
                                    task={task}
                                />
                            )
                        ) : (
                            !loading && (
                                <p className="text-gray-400 text-center">
                                    No tasks available

                                </p>
                            )
                        )}
                    </ul>

                </div>

            </div>
        </>
    )
}