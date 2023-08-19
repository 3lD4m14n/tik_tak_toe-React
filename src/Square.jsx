export default function Square( {value, onPlay} ) {
    return(<div className=' bg-red-600 ring-zinc-400 border-4 border-dashed shadow-zinc-800 text-6xl align-middle font-serif font-extrabold shadow-lg empty:rounded-3xl transition-all flex items-center justify-center' onClick={onPlay}>{value}</div>)
}