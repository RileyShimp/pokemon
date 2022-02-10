import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import PokemonService from './js/poke.js';


function displayName(name) {
  $('.output').text(`Welcome to the show ${name}!`);
}

$(document).ready(function() {
  $("#button").click(function() {
    PokemonService.getPokemon()
      .then(function(response) {
        if (response instanceof Error) {
          throw Error(`There was an error`);
        }
        const pokemonName = `${response[0].name}, ${response[1].name}, ${response[2].name}, ${response[3].name}`; 
        console.log(pokemonName);
        displayName(pokemonName);
      })
      .catch(function(error) {
        console.log(error);
      });
  });
});

// response.sprites.front_default