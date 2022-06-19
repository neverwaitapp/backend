"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const socket_io_1 = require("socket.io");
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const socketio_1 = require("./socketio");
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
exports.io = new socket_io_1.Server(server, {
    cors: { origin: "*" }
});
new socketio_1.SocketInit(exports.io);
mongoose_1.default.
    connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).
    then(() => console.log("Connected to MongoDB")).
    catch(err => console.log(err));
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello World" });
});
server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
//# sourceMappingURL=server.js.map