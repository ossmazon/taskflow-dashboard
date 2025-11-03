import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import rootSaga from "./sagas"
import taskReducer from "./slices/taskSlice"

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer:{
        tasks: taskReducer,
    },
middleware: (getDefaultMiddleware)=> getDefaultMiddleware({thunk: false}).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export default store