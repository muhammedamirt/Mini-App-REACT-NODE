import React from 'react'
import "./Navbar.css"
import { useNavigate } from "react-router-dom"
function Navbar() {
    const Navigate = useNavigate()
    return (
        <header>
            <nav className="navbar navbar-expand-lg  customNav">
                <a className="navbar-brand brand barndname" href="!#">Mini App</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link barndname" href="!#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link barndname" href="!#">Link</a>
                        </li>

                    </ul>
                    <p className="nav-link profile" onClick={() => {
                        Navigate('/userprofile')
                    }}><i className="bi bi-person-circle"></i></p>
                </div>
            </nav>
        </header>
    )
}

export default Navbar