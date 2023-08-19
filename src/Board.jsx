import Square from './Square.jsx'

export default function Board( {squares, handlePlay} ) {
    return (
      <div className=' grid grid-rows-3 grid-cols-3 gap-5 bg-slate-700 p-5 w-full h-4/5'>
        <Square value={squares[0]} onPlay={() => handlePlay(0)}/>
        <Square value={squares[1]} onPlay={() => handlePlay(1)}/>
        <Square value={squares[2]} onPlay={() => handlePlay(2)}/>
        <Square value={squares[3]} onPlay={() => handlePlay(3)}/>
        <Square value={squares[4]} onPlay={() => handlePlay(4)}/>
        <Square value={squares[5]} onPlay={() => handlePlay(5)}/>
        <Square value={squares[6]} onPlay={() => handlePlay(6)}/>
        <Square value={squares[7]} onPlay={() => handlePlay(7)}/>
        <Square value={squares[8]} onPlay={() => handlePlay(8)}/>
      </div>
    )
}
