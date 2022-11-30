import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import './login.css'
import Axios from 'axios'
import {userAPI} from '../../API'
import {AuthContext} from "../../store/authContext"
import {useNavigate} from 'react-router-dom'
import { useCookies } from 'react-cookie';




function Login() {
    const navigate = useNavigate()
    const [cookies, setCookie] = useCookies(['jwt']);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {setUser,setToken} = useContext(AuthContext)
    const handleLogin = () =>{
        Axios.post(`${userAPI}/login`,{email,password},{ withCredentials: true }).then((response)=>{
            // console.log(response.data);
            if(response.data.auth){
                let userData = response.data
                setUser(userData.fullName)
                setToken(userData.token)
                console.log(userData);
                navigate('/')
            }else{
                console.log('failed');
            }   
        })
    }

    useEffect(() => {
        if(cookies.jwt){
            navigate("/")
        }
      }, [])

    return (
        <>
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card shadow-2-strong" style={{ "border-radius": "1rem",backgroundColor: "#80b3ff"  }}>
                                <div className="card-body p-5 text-center" >

                                    <h3 className="mb-5">Sign in</h3>

                                    <div className="form-outline mb-4">
                                        <input type="email" id="typeEmailX-2" className="form-control form-control-lg" value={email} onChange={(e)=>setEmail(e.target.value)} />
                                        <label className="form-label" for="typeEmailX-2">Email</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="password" id="typePasswordX-2" className="form-control form-control-lg" value={password} onChange={(e)=>setPassword(e.target.value)} />
                                        <label className="form-label" for="typePasswordX-2">Password</label>
                                    </div>

                                    <div className="form-check d-flex justify-content-start mb-4">
                                        <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                                        <label className="form-check-label" for="form1Example3"> Remember password </label>
                                    </div>

                                    <button className=" loginButton" type="button" onClick={handleLogin}>Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;