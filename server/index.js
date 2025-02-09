import express from "express";
import { WebSocketServer } from "ws";

const app = express();
const server = app.listen(8080, () => {
    console.log("Server is listening..... ");
});

const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
    ws.on("message", (data) => {
        console.log("data from client : " + data);
        ws.send("thanks buddy!");
    })
})