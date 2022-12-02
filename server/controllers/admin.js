const adminCollection = require('../models/schema/admin')
const userCollection = require('../models/schema/user')
const jwt = require('jsonwebtoken')


module.exports = {
    postLogin: (req, res, next) => {
        const { email, password } = req.body
        adminCollection.findOne({ email }).then((data) => {
            if (data) {
                if (data.password === password) {
                    let token = jwt.sign({ id: data._id }, "secretCode", { expiresIn: 600 })
                    res.cookie("adminJwt", token, {
                        httpOnly: false,
                        maxAge: 600 * 1000,
                    }).status(200).send({ auth: true, token: token, fullName: data.fullName });
                } else {
                    res.send({ passwordError: true })
                }
            } else {
                res.send({ emailErr: true })
            }
        })
    },
    getUsers: (req, res, next) => {
        try{
            userCollection.find().then(usersData => {
                res.status(200).send(usersData)
            })
        }catch{
            res.send({error:true})
        }
        
    },
    getOneUser: (req, res, next) => {
        try{
            if(req.params.id !== undefined){
                userCollection.findOne({ _id:req.params.id}).then((data) => {
                    res.status(200).send(data)
                })
            }else{
                res.send({error:"no id"})
            }   
        }catch(err){
            res.send({error:err})
        }
       
    },
    postEditdata:(req,res,next)=>{
        console.log(req.body);
    }

}