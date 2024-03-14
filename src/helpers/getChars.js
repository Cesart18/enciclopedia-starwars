

export const getChars = async ( page = 1 ) => {
    const url = `https://swapi.dev/api/people/?page=${page}`
  const resp = await fetch(url);
  const { results } = await resp.json();
  return results;
}