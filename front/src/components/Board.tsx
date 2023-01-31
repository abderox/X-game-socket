
import Square from './Square';

import {
    BoardContainer,
} from '../custom-styles';

const Board = (
    {
        squares,
        onClick,
        reset
    }: {
        squares: Array<string | null>,
        onClick: (i: number) => void,
        reset: boolean
    }
) => {
    const renderSquare = (i: number) => {
        return (
            <Square
                value={
                    !reset ? squares[i] : ""
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

export default Board;



