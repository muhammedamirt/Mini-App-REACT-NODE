import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import { adminAPI } from '../../../API'
import Footer from '../../../components/footer/Footer'
import AdminNavbar from '../navBar/navbar'
import { AuthContext } from '../../../store/authContext'
import { useContext } from 'react'

import "./editUser.css"

function EditUser() {
    const {userID , setUserID} = useContext(AuthContext)
    console.log(userID,"================");
    const [image, setImage] = useState("")
    const [cookies, setCookie] = useCookies(['adminJwt'])
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")

    const navigate = useNavigate()


    const handleUpdateProfile = () => {
        Axios.post(`${adminAPI}/adminEditUserData`, { fullName,email }, { withCredentials: true }).then((res) => {
            if (res.data.changed) {
                navigate('/userprofile')
            } else {
                console.log(res.data);
            }
        })

    }
    useEffect(() => {
        if (!cookies.adminJwt) {
            navigate("/adminLogin")
        } else {
            Axios.get(`${adminAPI}/adminGetUserData/${userID ? userID._id :userID}`,{ withCredentials: true }).then((response) => {
                console.log(response.data);
                const { fullName, email, image } = response.data
                setImage(image)
                setFullName(fullName)
                setEmail(email)
            }).catch(error => {
                console.log(error);
            })
        }
    }, [])
    return (
        <div>
            <>
            <AdminNavbar />
                <div className="container bootstrap snippets bootdey">
                    <h1 className="text-primary">Edit Profile</h1>
                    <hr />
                    <div className="row">
                        <div className="col-md-3">
                            <div className="text-center">
                                <img src={image} className="avatar img-circle img-thumbnail" alt="avatar" />

                                {/* <input type="file" className="form-control" onChange={(e) => {
                                    setImage(e.target.files[0])
                                }} /> */}
                                {/* <button className='custombutton' onClick={handleUpdateProfile}>Update Profile</button> */}
                            </div>
                        </div>

                        <div className="col-md-9 personal-info">
                            <h3>Personal info</h3>

                            <form className="form-horizontal" role="form">
                                <div className="form-group">
                                    <label className="col-lg-3 control-label">Full Name :</label>
                                    <div className="col-lg-8">
                                        <input className="form-control" onChange={(e) => setFullName(e.target.value)} type="text" value={fullName} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-lg-3 control-label">Email:</label>
                                    <div className="col-lg-8">
                                        <input className="form-control" onChange={(e) => setEmail(e.target.value)} type="text" value={email} />
                                    </div>
                                </div>
                                <button className='custombutton' type='button' onClick={handleUpdateProfile}>Edit Profile</button>
                            </form>
                        </div>
                    </div>
                </div>
                <hr />
                <Footer />
            </>
        </div>
    )
}

export default EditUser