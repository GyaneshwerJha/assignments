const express = require('express')
const dotenv = require('dotenv').config();
const cors = require('cors');
const { mongoose } = require('mongoose');
const cookieParser = require('cookie-parser')


const app = express();

// middleware
app.use(express.json());
app.use(cookieParser()); // -> allow cookie point back from one host to another
app.use(express.urlencoded({extended:false})) 

app.use('/', require('./routes/authRoutes'));
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('Database connected')
})


const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})