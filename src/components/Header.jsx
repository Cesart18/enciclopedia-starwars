
export const Header = () => {
  return (
    <header>
      <img src="public/assets/header.png" alt="starwars" />
      <nav>


      <p className="leading">Enciclopedia <span>Starwars</span></p> 

    <div className="actions">

    <label htmlFor="filtros">Filtros</label>
    <select name="filtros" id="filters">
      <option value="">Todos</option>
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
