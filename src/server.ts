import { config } from "dotenv";
config()
import http from "http";
import express, { Request, Response } from "express";
import { Server } from "socket.io"
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import morgan from "morgan";
import { SocketInit } from "./socketio";


const app = express();

const server = http.createServer(app);
export const io = new Server(server, {
    cors: { origin: "*" }
})
new SocketInit(io);

mongoose.
    connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).
    then(() => console.log("Connected to MongoDB")).
    catch(err => console.log(err));

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ message: "Hello World" });
})

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});