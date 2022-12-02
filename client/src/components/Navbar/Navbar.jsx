import React, { useEffect } from 'react'
import "./Navbar.css"
import { useNavigate } from "react-router-dom"
import { AuthContext } from '../../store/authContext';
import { useContext } from 'react';
import { useCookies } from 'react-cookie';
import { useState } from 'react';

function Navbar() {
    const { user } = useContext(AuthContext)
    const Navigate = useNavigate()
    // const [userName, setUserName] = useState("")
    // const [cookies,setCookies] = useCookies(['jwt'])
    // const {setUser} = useContext(AuthContext)
    // useEffect(() => {
    //   if(cookies.jwt){
    //     localStorage.setItem("Name",user)
    //     setUserName(user)
    //    let useName = localStorage.getItem(user)
    //     setUserName(useName)
    //     console.log(useName);
    //   }else{
    //     setCookies(null)
    //   }
    // }, [])

    return (
        <header>
            <nav className="navbar navbar-expand-lg  customNav">
                <a className="navbar-brand brand barndname loginSignup" href="!#">Mini App</a>
                <button className="navbar-toggler toggleNav" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link barndname loginSignup" href="!#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        {!user ?
                            <>
                                <li className="nav-item">
                                    <a className="nav-link text-warning barndname loginSignup" onClick={() => Navigate('/login')}>Login</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-warning barndname loginSignup" onClick={() => Navigate('/signup')}>Signup</a>
                                </li>
                                
                            
                            </>
                            :<><li className="nav-item">
                            <a className="nav-link text-warning barndname loginSignup" onClick={() => Navigate('/userprofile')}>{user}</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-warning barndname loginSignup" onClick={() => Navigate('/logout')}>Logout</a>
                    </li>
                    </>}


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