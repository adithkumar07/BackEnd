const express = require("express")
const app = express();
app.use(express.json())
/*
app.post("/", (req, res) => {
    //res.send("Hello")
    //console.log(req.body);
    //res.send(req.body)
})
*/
const AuthRoute = require('./routes/auth.js')

app.use("/", AuthRoute)



app.listen(8000, () => { console.log("server running at 8000") })