import Card from './Card'

export default function MemoryCard({ characters }) {
  const Cards = []
  characters.forEach((character) => {
    Cards.push(
      <Card
        name={character.name.full}
        imageUrl={character.image.large}
        key={character.id}
      />
    )
  })

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-5xl">Memory Card</h1>
      <div>scoreboard</div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
        {Cards}
      </div>
    </div>
  )
}
