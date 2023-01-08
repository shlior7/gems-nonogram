import { ToolTip } from "ui";
import { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'

export const StartScreen = () => {
  const [selectedGame, setSelectedGame] = useState("Sudoku");

  return (<div className="header">
  <div className="new-game">
    <Image src="../svg/return.svg" alt="return" height={30} width={30}/>
    <Link href={`/${selectedGame}`}>New Game</Link>
    <select value={selectedGame} onChange={(e)=>setSelectedGame(e.target.value)}>
      <option value="sudoku">Sudoku</option>
      <option value="kakuro">Kakuro</option>
      <option value="nonogram">Nonogram</option>
    </select>
  </div>
  <ToolTip />
  { /* language=CSS */ }
  <style jsx>{`
      .header {
          display: flex;
          width: 100%;
          justify-content: space-between;
          max-width: 500px;
          padding: 0 0.5em;
          box-sizing: border-box;
      }
      .new-game {
          cursor: pointer;
          margin-top: .2em;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          padding: .2em 0;
      }
      .new-game :global(svg) {
          height: 1em;
          margin-bottom: .3em;
      }
  `}
  </style>
</div>)
}
