import React from "react"
import './style.css';

function App() {
    const findValidMove = (row,col) => {
        const N = 8;
        let dx = [2,2,-2,-2,1,1,-1,-1];
        let dy = [2,2,-2,-2,1,1,-1,-1];
        const board = new Array(N).fill(" ");

        if((row>=0 && row<=7) && (col>=0 && col<=7) && board[row][col]== " ") {
            board[row][col] = 8
        }

    }
  return (
    <>
    <h1>Chessboard</h1>
    <div className="App">
      <ChessBoard />
    </div>
    </>
  );
}

const ChessBoard = () => {
    const N = 8;
    const arr = new Array(N).fill(0);
    return (
        <table>
            <tbody className="chess">
            {
                arr.map((val,idx)=> {
                    return (
                        <ChessBoardRow key={"g"+idx} row={idx} findValidMove={findValidMove}/>
                    )
                })
            }
            </tbody>
        </table>
    )
}

const ChessBoardRow = (props) => {
    const squareClicked = (i, j) => {
        console.log(i, j);
        props.findValidMove(i,j)
    }

    const rowNum = props.row;
    const arr = new Array(8).fill(0);
    return (
        <tr className="row">
            {
                arr.map((column,idx) => {
                    return (
                        <td className="square" key={idx} onClick={squareClicked.bind(this, rowNum, idx)}></td>
                    )
                })
            }
        </tr>
    )
}

export default App;
