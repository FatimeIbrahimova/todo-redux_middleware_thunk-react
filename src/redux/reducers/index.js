import { combineReducers } from "redux";
import { fetchReducer } from "./fetchReducer";
// import { fetchReducer } from "./fetchReducer";
import { taskReducer } from "./taskReducer";


const rootReducer = combineReducers({
    task: taskReducer,
    fetch:fetchReducer
})
export default rootReducer