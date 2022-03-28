import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import logo from '../../logo.svg';
const Header = () => {
    return (
        <Fragment> 
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
            <a className="navbar-brand" href="javascript:void(0)">
                <img src={logo} width='30' height='30' alt='logo'/> AIMS
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                    <Link className="nav-link" to="/students">All students</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/students/create">Add student</Link>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
        </Fragment>
    )
}

export default Header