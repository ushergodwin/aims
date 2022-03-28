import React, { useEffect,Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStudent, updateStudent } from '../../store/actions/studentActions'
import { STUDENT_CONSTANTS } from '../../store/actions/constants/studentConstants'
import { useParams } from 'react-router-dom'
import Loader from '../includes/Loader'
import {useAlert} from 'react-alert'

const UpdateStudent = () => {
    const dispatch = useDispatch()
    const studentDetails = useSelector(state => state.studentDetails)
    const student = studentDetails.document
    const loading = studentDetails.loading
    const { isUpdated, error, isUpdating } = useSelector(state => state.updateStudent) 
    const alert = useAlert()

    const {id} = useParams()
    
    useEffect(() => {
        dispatch(getStudent(id))

        if(error)
        {
            alert.error("Student details not updated!. Please try again")
            dispatch({type: STUDENT_CONSTANTS.CLEAR_ERRORS})
        }

        if(isUpdated)
        {
            alert.success("Student details updated successfully.")
        }

    }, [dispatch, id, alert, error, isUpdated])

    const handleUpdateStudent = e => {
        e.preventDefault()
        const formData = new FormData(document.getElementById('studentForm'))
        let object = {}
        formData.forEach((value, key) => object[key] = value)
        dispatch(updateStudent(object, id))
    }
 
    return (
        <Fragment>
            <section className="row justify-content-center mt-3">
                <section className="col-md-12">
                    <h4 className="text-dark font-weight-bold">
                        &nbsp; {loading ? (
                            <Loader
                                content='loading student info...'
                                type='border'
                                size='sm'
                                color='primary'/>
                        ) : (<span>Update {student.name}'s Details</span>)}
                    </h4>
                    <div className="card card-body shadow">
                        <form action="" id="studentForm" onSubmit={handleUpdateStudent}>
                            <div className="form-group">
                                <label className="w-100">
                                    Student Name
                                    <input type="text" name="name" className="form-control"
                                    defaultValue={student.name} required/>
                                </label>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <label className="w-100">
                                        Student Number
                                        <input type="number" name="st_no" className="form-control"
                                         defaultValue={student.st_no} required/>
                                    </label>
                                </div>  
                                <div className="col-md-6">
                                    <label className="w-100">
                                        Registration Number
                                        <input type="text" name="reg_no" className="form-control"
                                        defaultValue={student.reg_no} required/>
                                    </label>
                                </div> 
                            </div> 
                            <div className="form-group mt-3">
                                <label className="w-100">
                                    Phone Number
                                    <input type="text" name="phone_number" className="form-control"
                                    defaultValue={student.phone_number} required/>
                                </label>
                            </div> 
                            <div className="form-group mt-3">
                                <label className="w-100">
                                    Program / Course
                                    <select className="form-control" name="course" required>
                                        <option defaultValue="">--- select ---</option>
                                        {student.course === "BIST" ? 
                                            (<option defaultValue="BIST" selected>BIST</option>) : 
                                            (<option defaultValue="BIST">BIST</option>)
                                        }
                                        
                                        {student.course === "BSE" ? 
                                            (<option defaultValue="BSE" selected>BSE</option>) : 
                                            (<option defaultValue="BSE">BSE</option>)
                                        }
                                        
                                        {student.course === "BCS" ? 
                                            (<option defaultValue="BCS" selected>BCS</option>):
                                            (<option defaultValue="BCS">BCS</option>)
                                        }
                                    </select>
                                </label>
                            </div>

                            <div className="d-flex justify-content-end mt-3">
                                <button type="submit" className="btn btn-primary" 
                                disabled={isUpdating}>
                                    {isUpdating ? (<Loader content="Saving..." size='sm' color='light' type='border'/>) : (
                                        <span>Save Changes</span>
                                    )}
                                </button>    
                            </div>
                        </form>    
                    </div>    
                </section>
            </section>
        </Fragment>
    )
}

export default UpdateStudent