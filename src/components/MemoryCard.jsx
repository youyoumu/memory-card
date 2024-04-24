import Card from './Card'
import { useState } from 'react'

export default function MemoryCard({ characters }) {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [clickedCards, setClickedCards] = useState([])

  const handleClick = (id) => {
    if (clickedCards.includes(id)) {
      setScore(0)
      setClickedCards([])
    } else {
      setScore(score + 1)
      setClickedCards([...clickedCards, id])
      if (score + 1 > highScore) {
        setHighScore(score + 1)
      }
    }
  }

  const Cards = []
  characters.forEach((character) => {
    Cards.push(
      <Card
        name={character.name.full}
        imageUrl={character.image.large}
        key={character.id}
        id={character.id}
        clickCallback={handleClick}
      />
    )
  })
  const shuffledCards = [...Cards].sort(() => Math.random() - 0.5)

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-5xl">Memory Card</h1>
      <div>
        <p>Score: {score}</p>
        <p>High Score: {highScore}</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
        {shuffledCards}
      </div>
    </div>
  )
}
