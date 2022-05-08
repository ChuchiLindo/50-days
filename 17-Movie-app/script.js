// so this api url is what is getting all of the data from the website so that we can fetch it later on and the page 1 at the end will get the first  30 moives data
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'

// to get the image will need this path so itll show
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
 
// query="' so we can concatnate the search
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

// Get initial movies
// we get an array of 20 objects and get access to  all of the data there
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}
//----------------------------------

function showMovies(movies) {
    // this clears the HTML
    main.innerHTML = ''

    // movies the data tha is fetched 
    movies.forEach((movie) => {
        // pull values from the object
        const { title, poster_path, vote_average, overview } = movie

        //creating movie element 
        const movieEl = document.createElement('div')
        // movie from css will create the styles and we can put the html in innerHTML
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
        `

        //this will put it into the DOM 
        main.appendChild(movieEl)
    })
}

// this is the if else with conditinal statments that we are using from the css dynamcally | utility function 
function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green'
    } else if(vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
    // so it doesnt submit to page
    e.preventDefault()

    //seach for the input get the value of search
    const searchTerm = search.value

    //if searchTerm exsist and if serachTerm is equal to anything
    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        //clear the search value
        search.value = ''
    } else {
        // if we submit without having anything in there we will reload the page
        window.location.reload()
    }
})