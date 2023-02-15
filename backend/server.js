require("dotenv").config()
const express = require("express")
const projectRoutes = require("./routes/projectRoutes")

// express app

const app = express()
const port = process.env.PORT || 4000

// middleware
app.use(express.json())

// routes
app.use("/api/projects",projectRoutes)

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})