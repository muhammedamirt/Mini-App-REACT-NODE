const express = require('express')
const router = express.Router()
const controllers = require('../controllers/admin')

router.get('/',(req,res)=>{
res.send("admin")
})

router.get('/getAllUser',controllers.getUsers)

router.post('/adminLogin',controllers.postLogin)

router.get('/adminGetUserData/:id',controllers.getOneUser)

router.post('/adminEditUserData',controllers.postEditdata)
module.exports = router