const express = require("express")
require("dotenv").config()
// express app

const app = express()
const port = process.env.PORT || 4000

app.get("/", (req, res) => {
    res.send("welcome to express")
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})