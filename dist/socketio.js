"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketInit = void 0;
class SocketInit {
    constructor(io) {
        this.socketIo = io;
        this.socketIo.on("connection", (socket) => {
            console.log("User connected");
        });
        SocketInit._instance = this;
    }
    static getInstance() {
        return SocketInit._instance;
    }
    publishEvent(event, data) {
        this.socketIo.emit(event, data);
    }
}
exports.SocketInit = SocketInit;
//# sourceMappingURL=socketio.js.map