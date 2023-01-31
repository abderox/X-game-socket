import React, { useEffect, useState } from 'react'
import styled from 'styled-components';



const BoardContainer =
    styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border: none;
    background: 
      linear-gradient(to right,
        #31CCCC, #3B86DE);
    /*animation:
    1s ease-in-out 0s 1 slideInFromLeft;
    @keyframes slideInFromLeft {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(0);
        }
    } */
    .board-row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

        &:nth-child(1) > div:nth-child(1) {
            border-top-left-radius: 10px;
            animation:
            1s ease-in-out 0s 1 slideInFromTopLeft;
            @keyframes slideInFromTopLeft{
                25%{
                    transform: translate(-75%,-75%);
                    opacity:0.25;
                }
                50% {
                    transform: translate(-50%,-50%);
                    opacity:1;
                }
                100% {
                    transform: translate(0,0);
                }
            }
        }
        &:nth-child(1) > div:nth-child(3) {
            border-top-right-radius: 10px;
            animation:
            1s ease-in-out 0.1s 1 slideInFromTopRight;
            @keyframes slideInFromTopRight{
                25%{
                    transform: translate(75%,-75%);
                    opacity:0.25;
                }
                50% {
                    transform: translate(50%,-50%);
                    opacity:1;
                }
                100% {
                    transform: translate(0,0);
                }
            }
        }
               
       

        
        &:nth-child(3) > div:nth-child(1) {
            border-bottom-left-radius: 10px;
               
            animation:
            1s ease-in-out 0.2s 1 slideInFromBottom;
            @keyframes slideInFromBottom {
                25%{
                    transform: translate(-50%,50%);
                    opacity:0.25;
                }
                50% {
                    transform: translate(-25%,25%);
                    opacity:1;
                }
                100% {
                    transform: translate(0,0);
                }
            }
        }

        
        &:nth-child(3) > div:nth-child(3) {
            border-bottom-right-radius: 10px;
            animation:
            1s ease-in-out 0.3s 1 slideInFromTop;
            @keyframes slideInFromTop {
                25%{
                    transform: translate(50%,50%);
                    opacity:0.25;
                }
                50% {
                    transform: translate(25%,25%);
                    opacity:1;
                }
                100% {
                    transform: translate(0,0);
                }
            }
        }

            
      
     
        &:nth-child(2) > div:nth-child(2) {
            border-bottom-right-radius: 10px;
            animation:
            1s ease-in-out 0.7s 1 slideInFromZ;

            @keyframes slideInFromZ {
                25%{
                    transform: scale(1.6);
                    opacity:0.25;
                }
                50% {
                    transform: scale(1.2) rotate(8deg) skew(3deg);
                    -webkit-transform:scale(1.2)  rotate(8deg) skew(3deg);
                    -moz-transform:scale(1.2)  rotate(8deg) skew(3deg);
                    opacity:1;
                }
                100% {
                    transform: scale(1) rotate(8deg) skew(3deg);
                    -webkit-transform:scale(1) rotate(8deg) skew(3deg);
                    -moz-transform:scale(1) rotate(8deg) skew(3deg);
                }
            }
        }

     

        &:nth-child(n) > div:nth-child(n) {
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
            transition: all 0.1s ease-in-out;
        &:hover {
            transform:
            rotate(10deg);
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);

        }
        &:active {
            transform :
            scale(0.9);
            
        }
        }

        &:nth-child(n) > div:nth-child(even) {
            transform: rotate(8deg) skew(3deg);
            -webkit-transform: rotate(8deg) skew(3deg);
            -moz-transform: rotate(8deg) skew(3deg);
        }

        &:nth-child(n) > div:nth-child(odd) {
            transform: rotate(-8deg) skew(-3deg);
            -webkit-transform: rotate(-8deg) skew(-3deg);
            -moz-transform: rotate(-8deg) skew(-3deg);
        }
   
    }
`;


const AlertContainer =
    styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 10;
    
    animation: 1s ease-in-out 0s 1 slideInFromTop;
    @keyframes slideInFromTop {

        25%{
            transform: translate(0,-50%);
            opacity:0.25;

        }
        50% {
            transform: translate(0,-25%);
            opacity:1;
        }
        100% {
            transform: translate(0,0);
        }
    }
`;

const AlertTitle =
    styled.div`
font-size: 10vh;
    font-weight: bold;
    color: white;
    text-align: center;
    margin-bottom: 2vh;
`;




const SquareContainer =
    styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding :0;
    border: 5px solid transparent;
    background: linear-gradient(white, white) padding-box,
    linear-gradient(to right,
      #31CCCC, #3B86DE) border-box;
    font-size: 10vh;
    font-weight: bold;
    cursor: pointer;
    position :relative;

    /*
    &:before {
        position: absolute;
        z-index: -1; 
        border: inherit;
        border-color: ingheri;
        top :-5px;
        right : -5px;
        left : -5px;
        bottom : -5px;
        background: inherit;
        background-clip: border-box;
        -webkit-filter: blur(12px);
                filter: blur(12px);
        content: '';
      }
      */
      
      /*change font size on small screens*/

        @media (max-width: 600px) {
            font-size: 5vh;
        }
        @media (max-width: 400px) {
            font-size: 3vh;
        }
        @media (max-width: 300px) {
            font-size: 2vh;
        }
 
    

    /*change span color*/
    span {

        background: linear-gradient(45deg, hsla(186, 100%, 69%, 1) 0%, hsla(217, 100%, 50%, 1) 100%);

        background: -moz-linear-gradient(45deg, hsla(186, 100%, 69%, 1) 0%, hsla(217, 100%, 50%, 1) 100%);

        background: -webkit-linear-gradient(45deg, hsla(186, 100%, 69%, 1) 0%, hsla(217, 100%, 50%, 1) 100%);

        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
   
    
`;


const DisplayScore =
    styled.div`
  
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom : 5rem;
    z-index: 10;
    font-size: 8vh;
    font-weight: bold;
    font-family: 'Rajdhani', sans-serif;
    
        .span{
            background: rgb(34,193,195);
            background: -moz-linear-gradient(45deg, rgba(34,193,195,1) 33%, rgba(39,215,141,1) 52%, rgba(49,253,45,1) 80%, rgba(49,253,45,1) 99%);
            background: -webkit-linear-gradient(45deg, rgba(34,193,195,1) 33%, rgba(39,215,141,1) 52%, rgba(49,253,45,1) 80%, rgba(49,253,45,1) 99%);
            background: linear-gradient(45deg, rgba(34,193,195,1) 33%, rgba(39,215,141,1) 52%, rgba(49,253,45,1) 80%, rgba(49,253,45,1) 99%);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#22c1c3",endColorstr="#31fd2d",GradientType=1);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        /*text-shadow*/
        }

        .big-letter{
            font-size: 9vh;
            color : #07f8af;
        }
        .vs {
            margin : 0 15px;
            position : relative;
            color: transparent;
          
          /*glitch text*/
          &:before{
            content: attr(data-text);
            position: absolute;
            top :-15px;
            font-size: 10vh;
            left: 2px;
            text-shadow: -1px 0 red;
            color: #ff0000;
            opacity: 0.5;
            animation: glitch 2s infinite linear alternate-reverse;

          }
            &:after{
            content: attr(data-text);
            font-size: 10vh;
            position: absolute;
            top :-15px;
            left: -2px;
            text-shadow: -1px 0 blue;
            color: #0000ff;
            opacity: 0.5;
            animation: glitch 2s infinite linear alternate-reverse;
            animation-delay: 1s;
            }


        
        }
        
    `

const Button =
    styled.button`
    border: 5px solid transparent;
    background: linear-gradient(white, white) padding-box,
    linear-gradient(to right,
      #31CCCC, #3B86DE) border-box;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    padding: 1vh 2vh;
    width : 6rem;
    margin: 1vh 1vh;
    border-radius: 5px;
    color : teal;

    &:hover{
        background:
        linear-gradient(to right,
        #31CCCC, #3B86DE) ;
        border: none;
        color: white;
        width : 6.5rem;

    }
    `

const GameInfo =
    styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 5vh;
    padding :0;
    margin: 1vh 0;
    `

const GameInfoText =
    styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 40%%;
    height: 5vh;    
    padding: 1vh 2vh;
    width : 90%;
    margin: 1vh 1vh;
    border: none
    font-size: 1.3rem;
    font-weight: bold;
    color : teal;
    `



const Board = (
    {
        squares,
        onClick,
        reset
    }: {
        squares: Array<string | null>,
        onClick: (i: number) => void,
        reset : boolean
    }
) => {
    const renderSquare = (i: number) => {
        return (
            <Square
                value={
                     !reset ? squares[i]  :""
                }
                onClick={() => onClick(i)}
            />
        );
    }

  
    return (
        <BoardContainer>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </BoardContainer>
    );
}

const Alert = (
    {
        winner,
        state,
        close
    }: {
        winner: string,
        state: any,
        close: () => void
    }

) => {
    return (
        <AlertContainer>
            <AlertTitle>
                {winner} Won!
            </AlertTitle>
            <DisplayScore>
                <span className="big-letter">
                    X:
                </span>
                <span className="span">
                    {state.x}
                </span>
                <span className="vs" data-text="vs">
                    VS
                </span>
                <span className="big-letter">
                    O:
                </span>
                <span className="span">
                    {state.o}
                </span>
            </DisplayScore>
            <Button
                onClick={close}
            >
                Close
            </Button>
        </AlertContainer>
    );
}

const Square = (
    {
        value,
        onClick,
    }: {
        value: string | null,
        onClick: () => void,
    }
) => {
    return (
        <SquareContainer
            onClick={onClick}
        >
            <span>{value}</span>
        </SquareContainer>
    );
}




const GameContent = () => {
    // X O game
    const [gameState, setGameState] = React.useState({
        history: [{
            squares: Array(9).fill(null),
        }],
        stepNumber: 0,
        xIsNext: true,
    });


    const [state, setstate] = React.useState({ x: 0, o: 0 });
    const [end, setend] = useState(false);
    const [started, setstarted] = useState(false);
    const [reset, setreset] = useState(false);
    const [clear, setclear] = useState(false);
    const [times,settimes] = useState(0);

    //concat new game to gamestate
    const newGame = () => {
        settimes(()=>( times+1) );
        setclear(false);
        setreset(false);
        setstarted(true);
        setGameState({
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
        })

    }

    const resetGame = () => {
        setreset(true);
        setclear(false);
        setstarted(false);
        setstate({ x: 0, o: 0 });
        setend(false);
        settimes(0);
        
    }


    const closeAlert = () =>{
        setend(false);
        setstarted(false);
        setclear(true);
    }

    useEffect(
        () => {
            if(!started)
            {
                return;
            }
            const history = gameState.history.slice(0, gameState.stepNumber + 1);
            const current = history[history.length - 1];
            const squares = current.squares.slice();
            if (calculateWinner(squares)) {
                setstate(
                    {
                        x: !gameState.xIsNext ? state.x + 1 : state.x,
                        o: gameState.xIsNext ? state.o + 1 : state.o
                    }
                )
                setend(true);
                return;
            }

            else if (
                !squares.includes(null)
            ) {
                setend(true);
                return;
            }
            
        }
    ,[
        gameState.stepNumber,
    ]
        )




    const handleClick = (i: number) => {

        if(!started)
        {
            return;
        }

        const history = gameState.history.slice(0, gameState.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (squares[i]) {
            return;
        }
      

        squares[i] = gameState.xIsNext ? 'X' : 'O';
        setGameState({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            xIsNext: !gameState.xIsNext,
        });
    }




    const calculateWinner = (s: any) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (s[a] && s[a] === s[b] && s[a] === s[c]) {
                return s[a];
            }
        }
        return null;
    }


    return (
        <>
            <GameInfo>
                <Button onClick={() =>
                    newGame()
                } disabled = {started}>
                    {started ? "started" : "start"}
                </Button>
                <GameInfoText>
                    X:{state.x} {" | "} O:{state.o}
                </GameInfoText>
                <GameInfoText>
                    Times : {times}
                </GameInfoText>
                <Button onClick={() =>
                    resetGame()
                }>
                    Reset
                </Button>
            </GameInfo>


            <Board
                squares={gameState.history[gameState.stepNumber].squares}
                onClick={(i) => handleClick(i)}
                reset={reset || clear}
                
            />
            {
                end &&
                <Alert
                    winner={calculateWinner(gameState.history[gameState.stepNumber].squares) || 'Nobody'}
                    state={state}
                    close={closeAlert}
                />
            }


        </>
    )
}

export default GameContent;