import React from 'react'
import { useState } from 'react'
import Axios from 'axios'
import {user} from '../API'

function Signup() {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSignup = () =>{
        Axios.post(`${user}/register`,{fullName,email,password}).then((response)=>{
            console.log(response);
        })
    }
  return (
    <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card shadow-2-strong" style={{ "border-radius": "1rem",backgroundColor: "#80b3ff"  }}>
                                <div className="card-body p-5 text-center" >

                                    <h3 className="mb-5">Sign Up</h3>

                                    <div className="form-outline mb-4">
                                        <input type="text" id="typeEmailX-2" className="form-control form-control-lg" value={fullName} onChange={(e)=>setFullName(e.target.value)} />
                                        <label className="form-label" for="typeEmailX-2">Full Name</label>
                                    </div>

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

                                    <button className="btn btn-primary btn-lg btn-block" type="button" onClick={handleSignup}>Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default Signup