import { useState } from 'react'
import  Board  from './Board.jsx'
import './App.css'

export default function App() {
  const [history,setHistory] = useState([Array(9).fill(null)]);
  const [currentMove,setCurrentMove] = useState(0);
  const [xIsNext,setXIsNext] = useState(true);
  const currentSquares = history[currentMove]

  function jumpTo( turn ) {
    setCurrentMove( turn )
    setXIsNext( turn % 2 === 0 )
  }

  function handlePlay( number ) {
    if( calculateWinner(currentSquares) || currentSquares[number] ){
      return;
    }

    let nextSquares = currentSquares.slice()
    nextSquares[number] = (xIsNext ? "X" : "O");

    let nextHistory = [...history.slice(0, currentMove + 1), nextSquares]

    setHistory( nextHistory );
    setXIsNext( !xIsNext );
    setCurrentMove( currentMove + 1 );
  }

  const winner = calculateWinner(currentSquares);
  let status
  if( winner ) {
    status = winner + ' wins';
  } else {
    status = 'IT\'S ' + (xIsNext ? 'X' : 'O') + ' TURN';
  }

  const moves = history.map( (squares, move) => {
      let description;

      if( move > 0 ) {
        description = '#' + move + ' MOVE'
      } else {
        description = 'GAME START'
      }

      return (<li key={move} className=' text-base mb-1 mb:p-1 md:my-1 bg-black rounded-xl w-4/5 text-center transition-colors text-white hover:bg-white hover:text-black md:text-2xl' onClick={ () => jumpTo(move) }>{description}</li>)
    })

  return (
    <div className='lg:flex bg-black h-screen'>
      <div className=' h-1/2 w-full lg:h-full lg:w-1/2'>
        <div className=' flex justify-center items-center text-white h-1/5 w-full align-middle text-4xl bg-pink-700 md:text-7xl'>{status}</div>
        <Board squares={currentSquares} handlePlay={handlePlay}/>
      </div>
      <div className=' flex flex-col h-1/2 bg-pink-700 lg:h-full lg:w-1/2'>
        <h1 className=' flex items-center justify-center text-5xl text-white font-sans md:text-8xl lg:h-1/5'>HISTORY</h1>
        <ul className=' flex flex-col items-center justify-center lg:h-4/5 lg:bg-slate-700'>
          {moves}
        </ul>
      </div>
    </div>
    );
}

function calculateWinner(currentSquares) {
  let posibleWins;
  posibleWins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [6,4,3],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6]];

  for( let i = 0 ; i < posibleWins.length ; i++ ) {
    const [a,b,c] = posibleWins[i];

    if( currentSquares[a] && currentSquares[a] === currentSquares[b] && currentSquares[a] === currentSquares[c] ) {
      return currentSquares[a];
    }
  }
  return null;
}