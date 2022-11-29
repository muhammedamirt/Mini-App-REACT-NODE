const express = require('express')
const router = express.Router()
const controller = require('../controllers/user')

router.get('/',(req,res)=>{
res.send("user")
})

router.post('/login',controller.postLogin)
router.post('/register',controller.postSignup)

module.exports = router