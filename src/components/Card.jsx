export default function Card({ name, imageUrl, id, clickCallback }) {
  return (
    <div
      className="card card-compact w-56 bg-base-100 shadow-xl"
      onClick={() => clickCallback(id)}
    >
      <figure>
        <img src={imageUrl} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
      </div>
    </div>
  )
}
