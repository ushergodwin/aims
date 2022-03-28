import React, {Fragment, useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewStudent } from "../../store/actions/studentActions";
import { useAlert } from "react-alert";
import { STUDENT_CONSTANTS } from "../../store/actions/constants/studentConstants";
import Loader from "../includes/Loader";
const AddStudent = () => {
    const dispatch = useDispatch()
    const [newStudent, setNewStudent] = useState({
        data: new FormData(),
    })

    const { success, error, loading } = useSelector(state => state.studentDetails)
    const alert = useAlert()

    useEffect(()=> {
        if(error)
        {
           alert.error("Student not added! Please try again") 
           dispatch({type: STUDENT_CONSTANTS.CLEAR_ERRORS})
        }

        if(success)
        {
            alert.success("Student added successfully!")
            dispatch({type: STUDENT_CONSTANTS.CLEAR_SUCCESS})
        }
    }, [dispatch, alert, success, error])

    const handleAddStudent = (e) => {
        e.preventDefault()
        const formData = new FormData(document.getElementById('studentForm'))
        let studentData = {}
        formData.forEach((value, key) => studentData[key] = value)

        newStudent.data = studentData
        dispatch(addNewStudent(newStudent.data))

        setNewStudent({
            data: new FormData()
        })
    }
    return (
        <Fragment>
            <section className="row justify-content-center">
                <section className="col-md-8">
                    <h4 className="text-dark font-weight-bold">Register Student</h4>
                    <div className="card card-body shadow">
                        <form action="" id="studentForm" onSubmit={handleAddStudent}>
                            <div className="form-group">
                                <label className="w-100">
                                    Student Name
                                    <input type="text" name="name" className="form-control" required/>
                                </label>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <label className="w-100">
                                        Student Number
                                        <input type="number" name="st_no" className="form-control" required/>
                                    </label>
                                </div>  
                                <div className="col-md-6">
                                    <label className="w-100">
                                        Registration Number
                                        <input type="text" name="reg_no" className="form-control" required/>
                                    </label>
                                </div> 
                            </div> 
                            <div className="form-group mt-3">
                                <label className="w-100">
                                    Phone Number
                                    <input type="text" name="phone_number" className="form-control" required/>
                                </label>
                            </div> 
                            <div className="form-group mt-3">
                                <label className="w-100">
                                    Program / Course
                                    <select className="form-control" name="course" required>
                                        <option value="">--- select ---</option>
                                        <option value="BIST">BIST</option>
                                        <option value="BSE">BSE</option>
                                        <option value="BCS">BCS</option>
                                    </select>
                                </label>
                            </div>

                            <div className="d-flex justify-content-end mt-3">
                                <button type="submit" className="btn btn-primary"
                                 disabled={loading}>
                                     {loading ? (
                                         <Loader
                                         content='saving...'
                                         type='border'
                                         size='sm'
                                         color='light'/>
                                     )
                                     : (
                                        <span> Save Student</span>
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

export default AddStudent