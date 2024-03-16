


export const Modal = ({ char, setShowModal }) => {
  const { name, mass, height, gender, hairColor, skinColor } = char;
  return (
    <div className="modal">
      <button onClick={ () => setShowModal(false) }>X</button>
              <h3>Name: {name}</h3>
        <p>Gender: {gender}</p>
        <p>Height: {height}</p>
        <p>Mass: {mass}</p>
        <p>Hair Color: {hairColor}</p>
        <p>Skin Color: {skinColor}</p>

    </div>
  )
}
