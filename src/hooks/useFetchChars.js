import { useEffect, useState } from "react"
import { getChars } from "../helpers/getChars";


export const useFetchChars = () => {

    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [state, setState] = useState([]);
    const getNewChars = async () => {
        const newChars = await getChars(page);
        setState(newChars);
      }
    
      useEffect(() => {
        getNewChars();
      }, [])

      const nextPage = () => {
        if( page === 9 ) return;
        setPage( page + 1 );
        getNewChars();
      }
      const previousPage = () => {
        if( page === 1 ) return;
        setPage( page -1 );
        getNewChars();
      }
      
      return {
        state,
        nextPage,
        previousPage,
        page
      }

}