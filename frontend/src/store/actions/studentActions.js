import axios from "axios";
import { API_URL } from "../../api";
import { STUDENT_CONSTANTS } from "./constants/studentConstants";

export const  getStudents = () => {
    return (dispatch) => {
        dispatch({type: STUDENT_CONSTANTS.BEFORE_SEND})
        axios
        .get(`${API_URL}/students`)
        .then(students => {
            dispatch({
                type: STUDENT_CONSTANTS.GET_STUDENTS,
                payload: students.data
            })

            dispatch({type: STUDENT_CONSTANTS.REQUEST_SUCCESSFUL})
        })
        .catch(error => {
            console.log(error.message);
        })

    }
}

export const getStudent = id => {
    return async (dispatch) => {
        dispatch({type: STUDENT_CONSTANTS.BEFORE_SEND})
        try {
            const {data} = await axios.get(`${API_URL}/students/${id}`)
            dispatch({
                type: STUDENT_CONSTANTS.GET_STUDENT,
                payload: data,
            })

            dispatch({
                type: STUDENT_CONSTANTS.REQUEST_SUCCESSFUL
            })

        } catch (error) {
            console.log(error.message);
        }
    }
}
export const addNewStudent = (newStudent) => {
    return (dispatch) => {
        dispatch({type: STUDENT_CONSTANTS.BEFORE_SEND})
        axios
        .post(`${API_URL}/students/create`, newStudent)
        .then(student => {
            dispatch({
                type: STUDENT_CONSTANTS.ADD_NEW_STUDENT,
                payload: student.data
            })
            dispatch({type: STUDENT_CONSTANTS.REQUEST_SUCCESSFUL})
        })
        .catch(error => {
            dispatch({
                type: STUDENT_CONSTANTS.ADD_NEW_STUDENT,
                payload: error.message
            })
        })

    }
}

export const updateStudent = (studentDetails, id) => {
    return (dispatch) => {

        dispatch({
            type: STUDENT_CONSTANTS.IS_UPDATING
        })
        
        const config = {
            Headers: {
                'Content-Type': 'application/json'
            }
        }

        axios.put(`${API_URL}/students/${id}`, studentDetails, config)
        .then(student => {
            dispatch({
                type: STUDENT_CONSTANTS.UPDATE_STUDENT,
                payload: student.data,
                isUpdating: false
            })

            dispatch({
                type: STUDENT_CONSTANTS.REQUEST_SUCCESSFUL
            })
        })
        .catch(error => {
            dispatch({
                type: STUDENT_CONSTANTS.UPDATE_STUDENT,
                payload: error.message,
                isUpdating: false
            })
        })
    }
}