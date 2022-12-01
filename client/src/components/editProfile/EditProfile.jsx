import React from 'react'
import { useState, useEffect } from 'react'
import "./EditProfile.css"
import Axios from "axios";
import { cloudAPI, userAPI } from '../../API';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

function EditProfile() {
    const [image, setImage] = useState("")
    const [cookies, setCookie] = useCookies("")
    const [userData, setUserData] = useState({})

    const navigate = useNavigate()


    const handleUpdateProfile = () => {
        console.log(image);
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', 'kmg91lzv');
        console.log(formData);
        let imageUrl = null
        Axios.post(`https://api.cloudinary.com/v1_1/${cloudAPI}/image/upload`, formData).then(response => {
            if (response) {
                imageUrl = response.data.secure_url
                console.log(imageUrl);
                Axios.post(`${userAPI}/editProfilePhoto`, { image: imageUrl }, { withCredentials: true }).then((res) => {
                    if(res.data.changed){
                        navigate('/userprofile')
                    }else{
                        console.log(res.data);
                    }
                })
            }

        })

    }
    useEffect(() => {
        if (!cookies.jwt) {
            navigate("/login")
        }
        Axios.get(`${userAPI}/userProfile`,{ withCredentials: true }).then((response) => {
            const { fullName, email, image } = response.data
            setUserData({ fullName, email, image })
        }).catch(error=>{
            console.log(error);
        })
    }, [])

    return (
        <>
            <div className="container bootstrap snippets bootdey">
                <h1 className="text-primary">Edit Profile</h1>
                <hr />
                <div className="row">
                    <div className="col-md-3">
                        <div className="text-center">
                            <img src={image ? URL.createObjectURL(image) : userData.image} className="avatar img-circle img-thumbnail" alt="avatar" />

                            <input type="file" className="form-control" onChange={(e) => {
                                setImage(e.target.files[0])
                            }} />
                            <button className='custombutton' onClick={handleUpdateProfile}>Update Profile</button>
                        </div>
                    </div>

                    <div className="col-md-9 personal-info">
                        <h3>Personal info</h3>

                        <form className="form-horizontal" role="form">
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Full Name :</label>
                                <div className="col-lg-8">
                                    <input className="form-control" type="text" value={userData.fullName}  />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Email:</label>
                                <div className="col-lg-8">
                                    <input className="form-control" type="text" value={userData.email} />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default EditProfile