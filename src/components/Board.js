import React,{useState} from 'react';
import Square from './Square';
import './board.css';

export default function Board(){

  const [state, setState] = useState({
    squares: Array(9).fill(null),
    xIsNext: true,
  })

  const winner = calculateWinner(state.squares);
  let status; 
 
  function handleClick(i) {    
    const squares = state.squares.slice();
    if (calculateWinner(squares) || squares[i]) { 
      return;
    }
    squares[i] = state.xIsNext ? 'X' : 'O';  
    setState({
          squares: squares,
          xIsNext: !state.xIsNext,
    }); 
  }

  function renderSquare(i){
    return (
        <Square value={state.squares[i]} 
        onClick={() => handleClick(i)}
        />
    );
  }
  
  function clear(){
    setState({
      squares: Array(9).fill(null),
      xIsNext: true,
    })
  }

  function calculateWinner(squares) {
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
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }  

    return (
      <div className="container h-100">
       { 
          winner ?
            status = 'Winner: ' + winner
           :
            status = 'Next player: ' + (state.xIsNext ? 'X' : 'O')  
        }
        <p>
          <button type="button" className="btn btn-primary"
          onClick={()=>clear()}>
             Limpiar
          </button>
        </p>
        <div className="board-row row justify-content-center h-100">
          {renderSquare(0)}{renderSquare(1)}{renderSquare(2)}
        </div>
        <div className="board-row row justify-content-center h-100">
          {renderSquare(3)}{renderSquare(4)}{renderSquare(5)}
        </div>
        <div className="board-row row justify-content-center h-100">
          {renderSquare(6)}{renderSquare(7)}{renderSquare(8)}
        </div>
      </div>
    );
  
}
