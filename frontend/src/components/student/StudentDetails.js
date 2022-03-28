import React, {Fragment, useEffect} from "react";
import moment from "moment";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getStudent } from "../../store/actions/studentActions";
import Loader from "../includes/Loader";
const StudentDetails = () => {

    const dispatch = useDispatch()
    const {id} = useParams()
    const studentDetails = useSelector(state => state.studentDetails)
    const student = studentDetails.document
    const loading = studentDetails.loading

    useEffect(() => {
        dispatch(getStudent(id))
    }, [dispatch, id])
    return (
       <Fragment>
           <div className="card card-body shadow mt-3">
               { loading ? (
                   <Loader
                   content='loading biodata..'
                   type='border'
                   size='sm'
                   color='primary'/>
               ) :
                (
                    <section className="mt-1">
                        <div className="d-flex justify-content-between">
                            <h4>Name: </h4>
                            <h5 className="text-muted">{student.name}</h5>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h4>Student Number: </h4>
                            <h5 className="text-muted">{student.st_no}</h5>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h4>Registration Number: </h4>
                            <h5 className="text-muted">{student.reg_no}</h5>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h4>Programs: </h4>
                            <h5 className="text-muted">{student.course}</h5>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h4>Joined on: </h4>
                            <h5 className="text-muted">{moment(student.created_at).format('MMMM, Do, YYYY')}</h5>
                        </div>
                        <div className="d-flex justify-content-end mt-3">
                            <Link to={`/students/${student._id}/edit`} className="btn btn-success">Edit Student</Link>
                        </div>
                    </section>
                    
                )}
           </div>
       </Fragment>
    )
}

export default StudentDetails
