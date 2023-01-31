import React, { useEffect } from 'react';

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
  FooterText
} from './custom-styles';

import { io } from 'socket.io-client';
import 
  GameContent

  from './content/game';


/* 
* Disclaimer
! Kindly do not judge me , I know It is a mess here ,
! but clean code may take time a bit longer ,
! My purpose is to advance my learning 
! and I am not a professional developer yet !
 */


const App = () => {

  const connect = () => {
    const socket = io('http://localhost:9000');
    socket.on('connect', () => {
      console.log('Connected to server');
      joinRoom();



    });
    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

  }

  // join room
  const joinRoom = () => {
    const socket = io('http://localhost:9000');
    socket.emit('join', {
      room: "room1"
    });


  }

  //leave room
  const leaveRoom = () => {
    const socket = io('http://localhost:9000');
    socket.emit('leave', {
      room: "room1"
    });
  }



  useEffect(() => {
    // connect();
  }, []);

  return (

    <Appcontainer>
      <Container>
        <Header>
          <GameTitle>
            <TextWithShadow>
              {"><"}
            </TextWithShadow>
          </GameTitle>
          <GameDescription>
            <span>Invite your mate and kick his ass !</span>
          </GameDescription>
        </Header>

        <GameContainer >

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


  );
}

export default App;
