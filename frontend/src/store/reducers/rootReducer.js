import { combineReducers } from "redux";
import {studentReducer, studentDetailsReducer, updateStudentReducer} from "./studentReducer"

const rootReducer  = combineReducers({
    students: studentReducer,
    studentDetails: studentDetailsReducer,
    updateStudent: updateStudentReducer
})

export default rootReducer
