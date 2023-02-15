const express = require("express")

// router
const router = express.Router()

// get allP projects
router.get("/",(req,res) => {
    res.json({message: "welcome to express app"})
})

// get single project
router.get("/:id", (req,res) => {
    res.json({message: "single project"})
})

// create post
router.post("/", (req,res) => {
    res.json({message: "project creates successfully"})
})

// project delete
router.delete("/:id", (req,res) => {
    res.json({message: "project delete successfully"})
})

// project update
router.patch("/:id", (req,res) => {
    res.json({message: "project updated successfully"})
})



module.exports = router