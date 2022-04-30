const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// USING ASYNC/AWAIT - differnet syntax rather then .then 
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }
// res = response\
{
  const res = await fetch('https://icanhazdadjoke.com', config)

  const data = await res.json()

  jokeEl.innerHTML = data.joke
}

// USING .then()

// function generateJoke() {

//   const config = {

//  header is a object here and the accept is a key with the value 
//     headers: {
//       Accept: 'application/json',
//     }
//   }

//   fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())     to get the json data
//     .then((data) => {
//       jokeEl.innerHTML = data.joke   what data it gives us
//     })
// }