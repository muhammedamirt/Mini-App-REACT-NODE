const express = require('express')
const router = express.Router()
const controller = require('../controllers/user')
const authVerify = require('../middlewares/authVerify')

router.get('/',(req,res)=>{
res.send("user")
})

router.post('/login',controller.postLogin)

router.post('/register',controller.postSignup)

router.get('/userProfile',controller.getProfile)

router.post('/editProfilePhoto',controller.postEditProfile)



module.exports = router