const express = require('express')
const router = require('./routes/admin')
const app = express()
const CORS = require('cors')
const adminRouter = require('./routes/admin')
const userRouter = require('./routes/user')
const mongoose = require('mongoose')




app.use(express.json())
app.use(CORS())
app.use('/admin',adminRouter)
app.use('/user',userRouter)

app.get('/api',(req,res,next)=>{
    res.send("helo")
    // res.json({status:true})
})

mongoose.connect('mongodb://localhost:27017/reactApp',
).then(()=>{
    console.log("connected");
}).catch((err)=>{
    console.log(err);
})

app.listen(5000,()=> console.log("server started on port 5000"))