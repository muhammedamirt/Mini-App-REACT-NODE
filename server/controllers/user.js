const userCollection = require('../models/schema/user')

module.exports={
    postLogin:(req,res)=>{
        console.log(req.body);
        userCollection.findOne({email:req.body.email}).then((data)=>{
            console.log(data);
        })
    },
    postSignup:(req,res)=>{
        const {fullName , email , password} = req.body
        userCollection.create({
            fullName,
            email,
            password
        }).then((data)=>{
            res.send('added')
        })
    }
} 