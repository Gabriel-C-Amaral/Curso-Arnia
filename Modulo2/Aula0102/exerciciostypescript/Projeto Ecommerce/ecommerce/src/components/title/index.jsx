export default function Title ({ title, quantity }) {
  return (
    <div className="box-title">
      <h1>{title}</h1>
      <div className="box">{quantity}</div>
    </div>
  )
}
