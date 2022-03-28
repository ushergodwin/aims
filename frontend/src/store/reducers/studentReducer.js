import { STUDENT_CONSTANTS } from "../actions/constants/studentConstants"

export const studentReducer = (state = {document: []}, action) => {
    switch (action.type) {
        
        case STUDENT_CONSTANTS.GET_STUDENTS:
            return {
                loading: false,
                ...action.payload
            }

        case STUDENT_CONSTANTS.BEFORE_SEND:
            return {loading: true, document: []}

        case STUDENT_CONSTANTS.REQUEST_SUCCESSFUL:

            return {
                    ...state,
                    isUpdated: false,
                    loading: false
            }
            
        default:
            return state
    }
}

export const studentDetailsReducer = (state = {document: []}, action) => {

    switch (action.type) {
        case STUDENT_CONSTANTS.ADD_NEW_STUDENT:
            return {
                loading: false,
                ...action.payload
            }
        
        case STUDENT_CONSTANTS.GET_STUDENT:
            return {
                loading: false,
                ...action.payload
            }

        case STUDENT_CONSTANTS.REQUEST_SUCCESSFUL:
            return {
                    ...state,
                    isUpdated: false,
                    loading: false
            }
        
        case STUDENT_CONSTANTS.BEFORE_SEND:
            return {loading: true, document: {}}
        
        case STUDENT_CONSTANTS.CLEAR_SUCCESS:
            return {
                ...state,
                success: false
            }
        default:
            return state;
    }
}

export const updateStudentReducer = (state = {}, action) => {

    switch (action.type) {

        case STUDENT_CONSTANTS.UPDATE_STUDENT:
            return {
                loading: false,
                ...action.payload
            }
        
        case STUDENT_CONSTANTS.REQUEST_SUCCESSFUL:
            return {
                ...state,
                isUpdated: false,
                loading: false
            }

        case STUDENT_CONSTANTS.CLEAR_ERRORS:
            return {
                ...state,
                error: false
            }

        case STUDENT_CONSTANTS.IS_UPDATING:
            return {isUpdating: true, document: {}}
        
        default:
            return state
    }
}