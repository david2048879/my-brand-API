const express = require('express');
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const app = express();
const authRoute = require('./routers/auth')
const userRoute = require('./routers/users')
 const postRoute = require('./routers/post')
 const messageRoute = require('./routers/message')
 const UserauthRoute = require('./routers/UsersAuth')

dotenv.config
app.use(express.json())
mongoose.connect('mongodb://localhost:27017/brand', {
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then(console.log('connected to mongod'))
  .catch(err=>console.error(err));

app.get('/', (req, res)=>{
    res.send('hello david');
})

app.use(express.json())

app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)
app.use('/api/post', postRoute)
app.use('/api/message', messageRoute)
app.use('/api/userauth', UserauthRoute)

app.listen('3000', ()=>{
    console.log('server is running on port 3000')
})