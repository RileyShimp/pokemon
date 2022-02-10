export default class PokemonService {  
  static getPokemon() {
    let id = Math.floor(Math.random() * 894);
    let id2 = Math.floor(Math.random() * 894);
    let id3 = Math.floor(Math.random() * 894);
    let id4 = Math.floor(Math.random() * 894);
    const fetch1 = fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(function(response) {
        console.log(response.ok);
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return Error(error);
      });
    const fetch2 = fetch(`https://pokeapi.co/api/v2/pokemon/${id2}`)
      .then(function(response) {
        console.log(response.ok);
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return Error(error);
      });
    const fetch3 = fetch(`https://pokeapi.co/api/v2/pokemon/${id3}`)
      .then(function(response) {
        console.log(response.ok);
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return Error(error);
      });
    const fetch4 = fetch(`https://pokeapi.co/api/v2/pokemon/${id4}`)
      .then(function(response) {
        console.log(response.ok);
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return Error(error);
      });
    const allData = Promise.all([fetch1, fetch2, fetch3, fetch4]);
    allData.then((response) => console.log(response));
    return allData;
  }
}
