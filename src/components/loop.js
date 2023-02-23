export default function Loop() {
  const colors = ['warning', 'primary', 'danger', 'warning']
  return(
    <div>
    <h2>Loops</h2>
      {colors}
      <ul className="list-group">
        <li className={`list-group-item bg-${colors[0]}`}>{colors[0]}</li>
        <li className={`list-group-item bg-${colors[1]}`}>{colors[1]}</li>
        <li className="list-group-item bg-danger">{colors[2]}</li>
        {
          colors.map((color, i) =>
            <li key={i}
                className={`list-group-item bg-${color}`}>
              {color}
            </li>
          )
        }
      </ul>
    </div>
  )
}