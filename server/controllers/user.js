const userCollection = require('../models/schema/user')
const jwt = require('jsonwebtoken')

module.exports = {
    postLogin: (req, res) => {
        const { email, password } = req.body
        userCollection.findOne({ email }).then((data) => {
            if (data) {
                if (password === data.password) {
                    let response = {
                        id: data._id,
                        fullName: data.fullName
                    }
                    let token = jwt.sign(response, "secretCode", { expiresIn: 500 })
                    res.cookie("jwt", token, {
                        httpOnly: false,
                        maxAge: 60*1000,
                    }).status(200).send({ auth: true, token: token, fullName: data.fullName });
                } else {
                    res.send({ passwordWorng: true })
                }
            } else {
                res.send({ noUser: true })
            }
        })
    },
    postSignup: (req, res) => {
        const { fullName, email, password } = req.body
        userCollection.create({
            fullName,
            email,
            password
        }).then((data) => {
            res.send({ userSignUpp: true })
        })
    },
    getProfile: (req, res) => {
        console.log("on profile page");
    }
} 