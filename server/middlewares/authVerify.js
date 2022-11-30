const jwt = require('jsonwebtoken')

function verifyToken(req,res,next){
    let authHeader = req.header.authorization;
    if(authHeader===undefined){
        res.status(401).send({error:"no token provided"})
    }
    let token = authHeader
    jwt.verify(token,"secretCode",(err,decoded)=>{
        if(err){
            res.status(500).send({error:"Authentication failed"})
        }else{
            res.send(decoded)
        }
    })
}

module.exports = verifyToken