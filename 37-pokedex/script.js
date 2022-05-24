const poke_container = document.getElementById('poke-container')
// we want 150 cards
const pokemon_count = 150
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}
// we want to use the keys as values
const main_types = Object.keys(colors)
// ----------------------------------------------------------
const fetchPokemons = async () => {
    for(let i = 1; i <= pokemon_count; i++) {
        // this is looping through 150 id numbers 1-150 of the pokemon data that its getting from getPokemon
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    // this is the api url so we can get data from it 
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    // this is a veriable res (response) that will hold the data that we fetch from the api
    const res = await fetch(url)
    // here the data we want the response to come back as a javascript object
    const data = await res.json()
    // console.log(data) here you see the 150 pokemons and data that you are getting from the api
    // createPokemonCard(data) this puts the data into each card
    console.log(data)
    createPokemonCard(data)
}
// -----------------------------------------------------------
const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')
    // methods for a string and can use with arrays the .toUpperCase and .slice slice from the 1 to on because then the entire word would be uppercase
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    // to padd it with 0s so it would be 001 002 etc
    const id = pokemon.id.toString().padStart(3, '0')

    //this is getting the types name type which is an object and you wanna get type.name
    const poke_types = pokemon.types.map(type => type.type.name)

    const type = main_types.find(type => poke_types.indexOf(type) > -1)


    const color = colors[type]

    pokemonEl.style.backgroundColor = color
    // pokemon.id would befrom the object and the id const is so that we can do stuff to it like pad it with 0s
    // not sure how he got the images to show the link is where the img comes from and its in the data as you can see if you add /back/ itll get the default back img of the pokemons
    const pokemonInnerHTML = `
    <div class="img-container">
    
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png"" alt="${name}">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span> </small>
    </div>
    `

    pokemonEl.innerHTML = pokemonInnerHTML
    //put it into the DOM
    poke_container.appendChild(pokemonEl)
}

fetchPokemons()