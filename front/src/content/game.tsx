import React from 'react'
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
    animation:
    1s ease-in-out 0s 1 slideInFromLeft;
    @keyframes slideInFromLeft {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(0);
        }
    } 
    .board-row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

        &:nth-child(1) > div:nth-child(1) {
            border-top-left-radius: 10px;
        }
        &:nth-child(1) > div:nth-child(3) {
            border-top-right-radius: 10px;
        }
        &:nth-child(3) > div:nth-child(1) {
            border-bottom-left-radius: 10px;
        }
        &:nth-child(3) > div:nth-child(3) {
            border-bottom-right-radius: 10px;
        }

        /*different shadow for each child*/
        &:nth-child(n) > div:nth-child(n) {
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
        }
      

    }
`;

const SquareContainer =
styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding :0;
    border: 3px solid transparent;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right,
      #31CCCC, #3B86DE) border-box;
    font-size: 10vh;
    font-weight: bold;
    cursor: pointer;
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

    /*change span color*/
    span {
        background: hsla(186, 100%, 69%, 1);

        background: linear-gradient(45deg, hsla(186, 100%, 69%, 1) 0%, hsla(217, 100%, 50%, 1) 100%);

        background: -moz-linear-gradient(45deg, hsla(186, 100%, 69%, 1) 0%, hsla(217, 100%, 50%, 1) 100%);

        background: -webkit-linear-gradient(45deg, hsla(186, 100%, 69%, 1) 0%, hsla(217, 100%, 50%, 1) 100%);

        filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#60EFFF", endColorstr="#0061FF", GradientType=1 ); 
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
   
    
`;



const Board = (
    {
        squares,
        onClick,
    }: {
        squares: Array<string | null>,
        onClick: (i: number) => void,
    }
) => {
    const renderSquare = (i: number) => {
        return (
            <Square
                value={squares[i]}
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


    const [state, setstate] = React.useState({x:0,o:0});


    // const [current, setcurrent] = React.useState({
    //     history : {}
    // });




    const handleClick = (i: number) => {
        const history = gameState.history.slice(0, gameState.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if(squares[i]) {
            return;
        }
        if (calculateWinner(squares) ) {
            setstate(
                {
                    x:gameState.xIsNext ? state.x + 1 : state.x,
                    o:!gameState.xIsNext ? state.o + 1 : state.o
                }
            )

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

    const jumpTo = (step: number) => {
        setGameState({
            history: gameState.history,
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    




    const calculateWinner = (s:any) =>{
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



    // const newGame = () =>{
    //     setcurrent(
    //         {
    //             history : gameState.history[gameState.stepNumber]
    //         }
    //     )
    // }

    const current = gameState.history[gameState.stepNumber];
    

  return (
    <>
    {/* new game */}

    {/* <div>
        <button onClick={newGame}>New Game</button>
    </div> */}

      
      
                <Board
                    squares={current.squares}
                    onClick={(i) => handleClick(i)}
                />
            

    </>
  )
}

export default GameContent;