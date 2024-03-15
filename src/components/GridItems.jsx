import { CardItem } from "./CardItem";

export const GridItems = ({ state, nextPage, previousPage, page, isLoading }) => {

  const isEmpty = state.length === 0;

  return (
    <>
     {
      isLoading
      && ( <div className="loading"><h3>Cargando...</h3></div> )
     } 
      
     {
      isEmpty && <div className="loading">No hay personajes para este genero</div>
     }
    <div className="grid-items" >
      {
      
      state.map( char =>  (<CardItem char={char} key={char.name}/>))
        
      }
    </div>
   
      <div className="pagination">
      <p>Pagina:{page}</p>
    <button onClick={previousPage}>Anterior</button>
    <button onClick={nextPage}>Siguiente</button>
      </div>
    
      </>
  )
}
