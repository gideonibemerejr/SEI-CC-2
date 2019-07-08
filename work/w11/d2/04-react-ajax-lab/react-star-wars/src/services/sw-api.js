export function getStarships() {
  const url = 'https://swapi.co/api/starships/';

  return fetch(url, { mode: 'cors' }).then(res => res.json());
}

export async function getPilots(urls) {
  const promises = urls.map(url => fetch(url).then(res => res.json()));
  const pilots = await Promise.all(promises);

  return pilots;
}
