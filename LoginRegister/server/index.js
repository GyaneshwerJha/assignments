const express = require('express')
const dotenv = require('dotenv').config();
const cors = require('cors')


const app = express();
app.use(cors);

app.use('/', require('./routes/authRoutes'));



const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})