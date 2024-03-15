import { useFetchChars } from "../hooks/useFetchChars"

export const Header = ({ changeFilter, filter }) => {
  return (
    <header>
      <img src="public/assets/header.png" alt="starwars" />
      <nav>


      <p className="leading">Enciclopedia <span>Starwars</span></p> 

    <div className="actions">


    <select name="filtros" id="filters" onChange={ ( event ) => {
      changeFilter( event.target.value ),
      console.log(filter);
    } } >
    <option value="all">Todos</option>
    <option value="male">Hombre</option>
    <option value="female">Mujer</option>

    </select>

      <form>
      <input type="text" />
      <button>Buscar</button>
      </form>
    </div>
      </nav>
    </header>
  )
}
