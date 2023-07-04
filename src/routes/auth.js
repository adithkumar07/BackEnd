const express = require("express")
const router = express.Router()
router.post("/", (req, res) => {
    res.send("Hello")
})
router.get("/reg", (req, res) => {
    res.send("register successfull")
})
module.exports = router;
