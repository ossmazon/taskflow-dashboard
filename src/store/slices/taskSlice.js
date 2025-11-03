import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "tasks",
    initialState: {
        list: [],
        error: null,
        loading: false
    },
    reducers: {
        fetchTasks: (state) => {
            state.loading = true
            state.error = null
        },
        setTasks: (state, action) => {
            state.list = action.payload
            state.loading = false
        },
        fetchTasksFailed: (state, action) => {
            state.error = action.payload
            state.loading = false
        },
        toggleTaskCompletion: (state, action) => {

            const taskId = action.payload
            const task = state.list.find((t) => t.id === taskId)
            if (task) {
                task.completed = !task.completed
            }
        }
    }
})




export const { fetchTasks, setTasks, fetchTasksFailed, toggleTaskCompletion } = taskSlice.actions
export default taskSlice.reducer