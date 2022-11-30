const express = require('express')
const router = require('./routes/admin')
const app = express()
const CORS = require('cors')
const adminRouter = require('./routes/admin')
const userRouter = require('./routes/user')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(CORS({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true,
    allowedHeaders: [
        'Content-Type',
        'Access'
    ]
}))



app.use('/admin', adminRouter)
app.use('/user', userRouter)


mongoose.connect('mongodb://localhost:27017/reactApp',
).then(() => {
    console.log("connected");
}).catch((err) => {
    console.log(err);
})

app.listen(5000, () => console.log("server started on port 5000"))