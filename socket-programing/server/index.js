import express from "express"
import { WebSocketServer } from "ws"
const app = express()
const port = 8000
const server = app.listen(port,(err)=>{
    if(err){
        console.log(`Error in creating server`)
    }

    console.log(`Server created`)
})

const wss = new WebSocketServer({server})

wss.on("connection",(ws)=>{
    ws.on("message",(data)=>{
        console.log(`Data from clients ${data}`)
        ws.send(`Are you saying : ${data}`)
    })
})