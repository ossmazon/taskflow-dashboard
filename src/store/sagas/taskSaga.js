import { call, put, takeEvery, delay} from "redux-saga/effects"
import axios from "axios"
import { setTasks, fetchTasksFailed } from "../slices/taskSlice"

function* fetchTasksSaga(){
    
    try{
        yield delay(500)
        const response = yield call(
            axios.get,
            "https://jsonplaceholder.typicode.com/todos?_limit=10"
        )
        yield put(setTasks(response.data))
    }catch(error){
        yield put(fetchTasksFailed(error.message))
    }
}

export default function* taskSaga(){
    yield takeEvery("tasks/fetchTasks", fetchTasksSaga)
}