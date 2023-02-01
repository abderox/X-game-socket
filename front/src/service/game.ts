import { Socket } from "socket.io-client";

class GameService {

    public async joinGameRoom(socket: Socket, room: string): Promise<boolean> {
        return new Promise((rs, rj) => {
          socket.emit("join", { room });
        console.log("joined: ", room);
          socket.on("joined", () => rs(true));
          socket.on("room_join_error", ({ error }) => rj(error));
        });
      }

      public async move(socket: Socket, data: any): Promise<boolean> {
        return new Promise((rs, rj) => {
          socket.emit("move", data);
          socket.on("move", () => rs(true));
          socket.on("move_error", ({ error }) => rj(error));
        });
      }

        public async gameWin(socket: Socket, data: any): Promise<boolean> {
        return new Promise((rs, rj) => {
          socket.emit("game_win", data);
          socket.on("game_win", () => rs(true));
          socket.on("game_win_error", ({ error }) => rj(error));
        });
        }

        public async onGameStarted(
            socket: Socket,
            callback: (data: any) => void
        )
        {
            socket.on("start_game", callback);
        }

        public async onGameWin(
            socket: Socket,
            callback: (data: any) => void
        )
        {
            socket.on("game_win", callback);
        }

        public async onMove(
            socket: Socket,
            callback: (data: any) => void
        )
        {
            socket.on("move", callback);
        }

}

export default new GameService();