import React from 'react'
import { useState } from 'react'
import "./EditProfile.css"
import Axios from "axios";
import { userAPI } from '../../API';

function EditProfile() {
const [image, setImage] = useState("")


const handleUpdateProfile = () =>{
    console.log(image);
    Axios.post(`${userAPI}/editProfilePhoto`,{image},{withCredentials:true}).then((response)=>{
        console.log(response);
    })
}
    return (
        <>
            <div className="container bootstrap snippets bootdey">
                <h1 className="text-primary">Edit Profile</h1>
                <hr />
                <div className="row">
                    <div className="col-md-3">
                        <div className="text-center">
                            <img src={image ? URL.createObjectURL(image):"https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"} className="avatar img-circle img-thumbnail" alt="avatar" />

                            <input type="file" className="form-control" onChange={(e)=>{
                                setImage(e.target.files[0])
                            }}/>
                              <button className='custombutton' onClick={handleUpdateProfile}>Update Profile</button>
                        </div>
                    </div>

                    <div className="col-md-9 personal-info">
                        <h3>Personal info</h3>

                        <form className="form-horizontal" role="form">
                            <div className="form-group">
                                <label className="col-lg-3 control-label">First name:</label>
                                <div className="col-lg-8">
                                    <input className="form-control" type="text" value="dey-dey" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Last name:</label>
                                <div className="col-lg-8">
                                    <input className="form-control" type="text" value="bootdey" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Company:</label>
                                <div className="col-lg-8">
                                    <input className="form-control" type="text" value="" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Email:</label>
                                <div className="col-lg-8">
                                    <input className="form-control" type="text" value="janesemail@gmail.com" />
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