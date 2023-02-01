const express = require("express")
const cors = require("cors")
const server = express()

const port = 5000

server.use(
    cors({
        origin: "http://localhost:3000"
    })
)

server.get("/", (request, response, next) => {
    response.json({
        test: "success"
    })
})

server.listen(port, error => {
    if (error) {
        console.log("ERROR: " + error)
        return
    }

    console.log("Server is running on port " + port)
})
