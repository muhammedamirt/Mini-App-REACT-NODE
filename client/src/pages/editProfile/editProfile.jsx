import React from 'react'
import EditProfile from '../../components/editProfile/EditProfile'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

function EditUserProfile() {
  return (
    <div>
        <Navbar />
        <EditProfile />
        <Footer />
    </div>
  )
}

export default EditUserProfile