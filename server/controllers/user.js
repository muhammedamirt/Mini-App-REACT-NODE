const userCollection = require('../models/schema/user')
const jwt = require('jsonwebtoken')

module.exports = {
    postLogin: (req, res) => {
        const { email, password } = req.body
        userCollection.findOne({ email }).then((data) => {
            if (data) {
                if (password === data.password) {
                    let token = jwt.sign({ id: data._id }, "secretCode", { expiresIn: 600 })
                    res.cookie("jwt", token, {
                        httpOnly: false,
                        maxAge: 600 * 1000,
                    }).status(200).send({ auth: true, token: token, fullName: data.fullName });
                } else {
                    res.send({ passwordWorng: true })
                }
            } else {
                res.send({ noUser: true })
            }
        })
    },
    postSignup:async (req, res) => {
        const { fullName, email, password } = req.body
       let userExistCheck =await userCollection.findOne({email})
       if(userExistCheck){
        res.send({emailExist:true})
       }else{
        userCollection.create({
            fullName,
            email,
            password,
            image: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
        }).then((data) => {
            console.log(data);
            let token = jwt.sign({ id: data._id }, "secretCode", { expiresIn: 600 })
            res.cookie("jwt", token, {
                httpOnly: false,
                maxAge: 600 * 1000,
            }).status(200).send({ auth: true, token: token, fullName: data.fullName });
        })
       }
        
    },
    getProfile: (req, res) => {
        const jwtToken = jwt.verify(req.cookies.jwt, "secretCode")
        const userId = jwtToken.id
        userCollection.findOne({ _id: userId }).then((data) => {
            res.status(200).send(data)
        })
    },
    postEditProfile: async (req, res) => {
        const jwtToken = jwt.verify(req.cookies.jwt, "secretCode")
        const userId = jwtToken.id
        let user = await userCollection.findOne({ _id: userId })
        if (!user) {
            res.status(500).send({ erroe: "no user" })
        } else {
            userCollection.updateOne(
                { _id: userId },
                {
                    $set: {
                        image: req.body.image
                    }
                }).then(() => {
                    res.status(200).send({ changed: true })
                })
        }
    }
} 