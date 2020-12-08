const express = require("express") // third party module
const fs = require("fs") // core module
const path = require("path") // core module
const uniqid = require("uniqid") // third party module i need for POST

const router = express.Router()

router.get("/",(req,res)=>{

    const studentFilePath = path.join(__dirname,"students.json")

    const buffer = fs.readFileSync(studentFilePath)
    
    const fileAsAString = buffer.toString()
    const studentsArray = JSON.parse(fileAsAString)

    res.send(studentsArray)
})