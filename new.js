const path=require('path')
const express = require('express')

const app = express()
console.log(path.join(__dirname,'../styles'))
const sttcPth1 = path.join(__dirname,'../public')
app.use(express.static(sttcPth1))
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})