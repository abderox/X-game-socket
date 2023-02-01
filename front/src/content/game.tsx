import React, { useContext, useEffect, useState } from 'react'
import {
    Alert, Board
} from '../components';

import {
    Button,
    GameInfo,
    GameInfoText,
} from '../custom-styles';

import gameService from 
    '../service/game';
import socketService from
    '../service/socket';


import gameContext from 
    '../gameContext';


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
    const [times, settimes] = useState(0);
    const {
        playerSymbol,
        setPlayerSymbol,
        setPlayerTurn,
        isPlayerTurn,
        setGameStarted,
        isGameStarted,
      } = useContext(gameContext);

    //concat new game to gamestate
    const newGame = () => {
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


    const closeAlert = () => {
        setend(false);
        setstarted(false);
        setclear(true);
    }

    useEffect(
        () => {
            if (!started) {
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
                settimes(() => (times + 1));


            }

            else if (
                !squares.includes(null)
            ) {
                setend(true);
                settimes(() => (times + 1));

            }

        }
        , [
            gameState.stepNumber,
        ]
    )




    const handleClick = (i: number) => {

        if (!started) {
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
            <GameInfo className="disabled">
                <Button onClick={() =>
                    newGame()
                } disabled={started}>
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
                disabled={!isGameStarted}
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