import React from 'react';

function Board({ squares, onClick }) {
  return (
    <div>
      {squares.map((square, i) => (
        <button className="square" onClick={() => onClick(i)} key={i}>
          {square}
        </button>
      ))}
    </div>
  );
}

export default Board;