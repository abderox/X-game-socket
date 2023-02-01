import React, { useEffect, useState } from 'react';

//*my customized styles using styled-components

import {
  Appcontainer,
  Container,
  GameTitle,
  GameDescription,
  Header,
  TextWithShadow,
  GameContainer,
  Footer,
  DivFooter,
  FooterText,
  JoinRoomButton,
  JoinRoomForm,
  JoinRoomInput
} from './custom-styles';

import { io } from 'socket.io-client';

import GameContext, { IGameContextProps } from "./gameContext";
import
GameContent

  from './content/game';

import socketService from './service/socket';
import gameService from './service/game';



/* 
* Disclaimer
! Kindly do not judge me , I know It is a mess here ,
! but clean code may take time a bit longer ,
! My purpose is to advance my learning 
! and I am not a professional developer yet !
 */


const App = () => {

  const [roomName, setRoomName] = useState("");
  const [isJoining, setJoining] = useState(false);
  const [isInRoom, setInRoom] = useState(false);
  const [playerSymbol, setPlayerSymbol] = useState<"x" | "o">("x");
  const [isPlayerTurn, setPlayerTurn] = useState(false);
  const [isGameStarted, setGameStarted] = useState(false);

  const connectSocket = async () => {
    const socket = await socketService
      .connect("http://localhost:9000")
      .catch((err) => {
        console.log("Error: ", err);
      });
  };



  useEffect(() => {
    connectSocket();
  }, []);

  const gameContextValue: IGameContextProps = {
    isInRoom,
    setInRoom,
    playerSymbol,
    setPlayerSymbol,
    isPlayerTurn,
    setPlayerTurn,
    isGameStarted,
    setGameStarted,
  };

  const handleRoomNameChange = (e: React.ChangeEvent<any>) => {
    const value = e.target.value;
    setRoomName(value);
  }

  const joinRoom = async (e: React.FormEvent) => {
    e.preventDefault();

    const socket = socketService.socket;
    if (!roomName || roomName.trim() === "" || !socket) return;

    setJoining(true);

    const joined = await gameService
      .joinGameRoom(socket, roomName)
      .catch((err) => {
        alert(err);
      });


    if (joined) setInRoom(true);

    setJoining(false);

    console.log("joined: ", joined);

  };




  return (
    <GameContext.Provider value={gameContextValue}>
      <Appcontainer>
        <Container>

          <Header>
            <GameTitle>
              <TextWithShadow>
                {"><"}
              </TextWithShadow>
            </GameTitle>
            <GameDescription>
              <span className="blinking-text">Invite your mate and kick his ass !</span>
            </GameDescription>
          </Header>

          <GameContainer >

            <JoinRoomForm onSubmit={joinRoom}>

              {isJoining ?
                <>
                  <span className="Joining-text">Joining </span>

                  <span className=" Joining-text Joining-points">...</span>
                </>
                :
                <>
                  <JoinRoomInput type="text" name="room" onChange={handleRoomNameChange} />
                  <JoinRoomButton type="submit">
                    <img src="https://img.icons8.com/external-bearicons-detailed-outline-bearicons/64/FFFFFF/external-Join-social-media-bearicons-detailed-outline-bearicons.png" alt="join" />
                  </JoinRoomButton>
                </>
              }
            </JoinRoomForm>

            <GameContent />
          </GameContainer>

        </Container>
        <DivFooter>
          <Footer>
            <FooterText>
              Made with <span >❤️</span> by <a style={{ textDecoration: "none", color: "#00FFC2" }} href="
          https://github.com/abderox"
                target="_blank"
                rel="noopener noreferrer"
              >Abderox </a>
              <span > 👋
                Leave a star
                ⭐
              </span>

            </FooterText>
          </Footer>
        </DivFooter >
      </Appcontainer >
    </GameContext.Provider>


  );
}

export default App;
