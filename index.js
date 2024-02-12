const express = require('express') 
const dotenv = require('dotenv') 
const cookieParser = require('cookie-parser') 
const path = require('path')
const dbConnect = require('./config/db') 
const UserRoute = require('./routes/userRoute')

dotenv.config({ path: path.resolve(__dirname, '../.env') }); // this will add the variable in the env file to the process.env 
// E1. here you may get error, if you dont add the path. The varaibles wont be configured.

const Port = process.env.PORT || 5000;

dbConnect();

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.status(200).json("Successfully done");
})

app.get('/api/users',UserRoute)



app.listen(Port,()=>{
    console.log("listening at port 5000");
})