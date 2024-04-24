import Card from './Card'

export default function MemoryCard({ data }) {
  const Cards = []
  data.characters.nodes.forEach((character) => {
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
      <div>{Cards}</div>
    </div>
  )
}
