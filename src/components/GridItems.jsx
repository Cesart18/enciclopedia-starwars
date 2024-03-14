import { CardItem } from "./CardItem";
import { swapiToCharMapper } from "../infrastructure/mappers/swapiToCharMapper";
import { useFetchChars } from "../hooks/useFetchChars";



export const GridItems = () => {
  const { state, nextPage, previousPage, page } = useFetchChars();
  return (
    <>
    <div className="grid-items" >
      {
        state.map( char =>  {
          const newChar = swapiToCharMapper( char );
          return (<CardItem char={newChar} key={newChar.name}/>);
        })
        
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
