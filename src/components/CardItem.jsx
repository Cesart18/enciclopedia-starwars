
export const CardItem = ({ char }) => {
    const { name, mass, height, gender } = char;
  return (
    <div className="card">
        <h3>name: {name}</h3>
        <p>gender: {gender}</p>
        <p>height: {height}</p>
        <p>mass: {mass}</p>
    </div>
  )
}
