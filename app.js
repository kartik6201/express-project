const path=require('path')
const express = require('express')
const app = express ()
//console.log(path.join(_dirname,'../styles')) const sttcPthl-path.join(_dirname,'../public')
app.use (express.static(sttcPthl))
app.listen(3000, () => {
console.log('Server is up on port 3000.')
})