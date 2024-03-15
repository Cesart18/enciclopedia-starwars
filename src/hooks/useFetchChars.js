import { useEffect, useState } from "react"
import { getChars } from "../helpers/getChars";
import { swapiToCharMapper } from "../infrastructure/mappers/swapiToCharMapper";


   

export const useFetchChars = () => {


  const [filter, setFilter] = useState('all');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [state, setState] = useState([]);

    const getNewChars = async ( filter = 'all' ) => {
      const newChars = await getChars(page);
      const filteredChar = newChars.map( char => {
        return swapiToCharMapper(char);
      });
      setIsLoading(false);
      switch( filter ){
        case 'all':
          return setState(filteredChar);
        case 'male':
          return setState(filteredChar.filter( char => char.gender === 'male' ));
        case 'female':
          return setState(filteredChar.filter( char => char.gender === 'female' ))
          default:
            throw new Error(' Genero no disponible ');
          }

    }


    useEffect(() => {
      getNewChars(filter);
    }, [page, setFilter])
    

    const nextPage = () => {
      if ( page === 9  ) return;
      setPage( page + 1 );
    }

    const previousPage = () => {
      if( page === 1 ) return;
      setPage( page - 1 );
    }

    const changeFilter = ( filter = 'all' ) => {
      setFilter( filter );
      getNewChars(filter);
    }

      return {
        state,
        isLoading,
        nextPage,
        previousPage,
        changeFilter,
        page,
        filter
      }

}