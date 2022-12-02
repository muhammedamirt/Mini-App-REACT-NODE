import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import { adminAPI } from '../../../API'
import Footer from '../../../components/footer/Footer'
import AdminNavbar from '../navBar/navbar'
import "./ViewUser.css"
import { AuthContext } from '../../../store/authContext'
import { useContext } from 'react'



function ViewUser() {
    let { userID,setUserID } = useContext(AuthContext)
    const [userDetailes, setUserDetailes] = useState([])
    const [cookies, setCookies] = useCookies('[adminJwt]')
    const Navigate = useNavigate()

    const handleEdit = (id) => {
        setUserID({_id:id})
        console.log(userID);
        Navigate('/adminEditUser')
    }

    useEffect(() => {
        if (!cookies.adminJwt) {
            Navigate("/adminLogin")
        }
        Axios.get(`${adminAPI}/getAllUser`, { withCredentials: true }).then((response) => {
            setUserDetailes(response.data)
        })
    }, [])

    return (
        <>
            <AdminNavbar />
            <section className='mt-5 mb-5'>
                <div className="container">
                    <h1 className='heading'>ALL USERS</h1>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">Full Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Edit</th>
                                <th scope='col'>Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                userDetailes.map((obj, index) => {
                                    return <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{obj.fullName}</td>
                                        <td>{obj.email}</td>
                                        <td onClick={()=>handleEdit(obj._id)}>Edit</td>
                                        <td>Delete</td>
                                    </tr>
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ViewUser