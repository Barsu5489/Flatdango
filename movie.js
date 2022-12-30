/*
 * firstMovie - function to fetch and render first movie
 * MovieData - func
 * renderData - function to render data to DOM   
*/

function firstMovie(movieData) {
    // Replace the content of movie.innerHTML with the content of the clicked movie
    const movie = document.querySelector('.movie');
    movie.innerHTML = `
      <div class="img">
        <img src="${movieData.poster}" alt="poster" srcset="">
      </div>
      <div class="movie-details">
        <h1>${movieData.title}</h1>
        <ul id="details">
          <li>Run Time: ${movieData.runtime} minutes</li>
          <li>Show Time: ${movieData.showtime}</li>
          <li>Available Tickets: ${movieData.capacity - movieData.tickets_sold}</li>
        </ul>
      </div>
    `;
  }
  
  function movieData() {
    fetch('https://my-json-server.typicode.com/Barsu5489/Flatdango/db')
      .then((res) => res.json())
      .then((data) => {
        renderData(data);
      });
  }
  
  function renderData(data) {
    for (let i = 1; i < data.films.length; i++) {
      // creating header tag
      const movieTitle = document.createElement('h1');
      movieTitle.innerText = data.films[i].title;
  
      // Appending movie title to the DOM
      const section = document.querySelector('.section');
      section.appendChild(movieTitle);
  
      // Add a click event listener to the movie title element
      movieTitle.addEventListener('click', (event) => {
        // Call the firstMovie function and pass it the data for the clicked movie
        firstMovie(data.films[i]);
      });
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    movieData();
    firstMovie();
  });
  