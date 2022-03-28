import React, {Fragment, useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { getStudents } from '../../store/actions/studentActions'
import { Link } from 'react-router-dom'
import moment from 'moment'
import Loader from '../includes/Loader'

const ListStudents = () => {

    const dispatch = useDispatch()
    const {document, loading} = useSelector(state => state.students)
    const students = document
    useEffect(() => {
        dispatch(getStudents())
    }, [dispatch])
    
    return (
        <Fragment>
            <h5 className='mt-3'>
                Total Number of Student &nbsp;
                <span className='badge bg-primary rounded'>
                    { loading ? (
                        <Loader 
                            content=''
                            size='sm'
                            color='light'
                            type='grow' />
                            ) 
                        : (
                            students.length > 0 ? `${students.length}` : 0
                    )}   
                </span>
            </h5>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Student Number</th>
                        <th>Registration Number</th>
                        <th>Phone Number</th>
                        <th>Joined On</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <tr>
                            <td colSpan={`6`}>
                                <Loader 
                                    content='loading...'
                                    size=''
                                    color='muted'
                                    type='border' />
                            </td>
                        </tr>
                    ) : (

                        students && students.map((student, no) => (
                            <tr key={student._id}>
                                <td>{no}</td>
                                <td>
                                    <Link to={`/students/${student._id}`}>
                                        {student.name}
                                    </Link>
                                </td>
                                <td>{student.st_no}</td>
                                <td>{student.reg_no}</td>
                                <td>{student.phone_number}</td>
                                <td>{moment(student.created_at).format('MMMM Do YYYY')}</td>
                                <td>
                                <Link to={`/students/${student._id}/edit`}>
                                        Edit
                                    </Link>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </Fragment>
    )
}

export default ListStudents