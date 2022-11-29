const userCollection = require('../models/schema/user')

module.exports={
    postLogin:(req,res)=>{
        const {email,password} = req.body
        userCollection.findOne({email}).then((data)=>{
            if(data){
                if(password === data.password){
                    res.send({loggedIn:true}) 
                }else{
                    res.send({passwordWorng:true})  
                }
            }else{
                res.send({noUser:true})
            }
        })
    },
    postSignup:(req,res)=>{
        const {fullName , email , password} = req.body
        userCollection.create({
            fullName,
            email,
            password
        }).then((data)=>{
            res.send({userSignUpp:true})
        })
    }
} 