import {
    ConnectedSocket,
    MessageBody,
    OnMessage,
    SocketController,
    SocketIO,
} from "socket-controllers";
import { Server, Socket } from "socket.io";



@SocketController()
export class GameController {

    private getSocketGameRoom(socket: Socket): string {
        const socketRooms = Array.from(socket.rooms.values()).filter(
            (r) => r !== socket.id
        );
        const gameRoom = socketRooms && socketRooms[0];

        return gameRoom;
    }

    @OnMessage("move")
    public async move(
        @ConnectedSocket() socket: Socket,
        @MessageBody() data: any,
        @SocketIO() io: Server
    ) {
        console.log("move", data);
        const gameRoom = this.getSocketGameRoom(socket);
        socket.to(gameRoom).emit("move", data);
    }

    @OnMessage("game_win")
    public async gameWin(
        @SocketIO() io: Server,
        @ConnectedSocket() socket: Socket,
        @MessageBody() message: any
    ) {
        const gameRoom = this.getSocketGameRoom(socket);
        socket.to(gameRoom).emit("on_game_win", message);
    }


}