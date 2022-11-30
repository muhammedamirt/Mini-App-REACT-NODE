import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import { userAPI } from '../../API'
import "./Profile.css"


function ProfileCompo() {
    const navigate = useNavigate()
    const [cookies, setCookie] = useCookies()
    const [userData, setUserData] = useState({})
    useEffect(() => {
        if (!cookies.jwt) {
            navigate("/login")
        }
        Axios.get(`${userAPI}/userProfile`, { withCredentials: true }).then((response) => {
            const { fullName, email, image } = response.data
            setUserData({ fullName, email, image })
        })
    }, [])

    return (
        <div className="container mt-4 mb-4 p-3 d-flex justify-content-center ">
            <div className="card p-4">
                <div className=" image d-flex flex-column justify-content-center align-items-center">
                    <button className="btn btn-secondary mt-5">
                        <img className='profileIMage' src={userData.image} height="100" width="100" /></button>
                    <span className="name mt-3">{userData.fullName}</span>
                    <span className="idd">{userData.email}</span>
                    <div className=" d-flex mt-2">
                        <button className="btn1 btn-dark" onClick={()=>navigate('/editprofile')}>Edit Profile</button>
                    </div>
                    <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
                        <span><i className="fa fa-twitter"></i></span>
                        <span><i className="fa fa-facebook-f"></i></span>
                        <span><i className="fa fa-instagram"></i></span>
                        <span><i className="fa fa-linkedin"></i></span>
                    </div> <div className=" px-2 rounded mt-4 date ">
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileCompo