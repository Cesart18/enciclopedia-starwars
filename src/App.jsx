import { GridItems } from "./components/GridItems"
import { Header } from "./components/Header"
import { useFetchChars } from "./hooks/useFetchChars"


function App() {
  const { state, filter, changeFilter, isLoading, nextPage, page, previousPage } = useFetchChars();
  return (
    <>
    <Header changeFilter={changeFilter} filter={filter}/>
    <GridItems nextPage={nextPage} page={page} state={state} previousPage={previousPage} isLoading={isLoading}/>
    </>
  )
}

export default App
