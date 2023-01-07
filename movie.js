// Make a GET request to the /films/1 endpoint to retrieve the first movie's data
fetch('https://my-json-server.typicode.com/Barsu5489/Flatdango/films/1')
  .then(response => response.json())
  .then(data => {
  // Populate the page with the movie's data
    document.getElementById('poster').src = data.poster;
    document.getElementById('title').innerHTML = data.title;
    document.getElementById('runtime').innerHTML = data.runtime;
    document.getElementById('showtime').innerHTML = data.showtime;
    document.getElementById('tickets').innerHTML = data.capacity - data.tickets_sold;
  });

// Make a GET request to the /films endpoint to retrieve the list of movies
fetch('https://my-json-server.typicode.com/Barsu5489/Flatdango/films')
  .then(response => response.json())
  .then(data => {
    // Iterate through the list of movies and create a new li element for each movie
    for (const movie of data) {
      const li = document.createElement('li');
      li.className = 'film item';
      li.innerHTML = movie.title;
      document.getElementById('films').appendChild(li);
    }
  });

// Add an event listener to the "Buy Ticket" button
document.getElementById('buy-ticket').addEventListener('click', () => {
  // Make a POST request to the /tickets/:id endpoint to purchase a ticket
  fetch('https://my-json-server.typicode.com/Barsu5489/Flatdango/films', { method: 'POST' })
    .then(response => response.json())
    .then(data => {
      // Update the number of available tickets on the frontend
      const tickets = document.getElementById('tickets');
      tickets.innerHTML = data.capacity - data.tickets_sold;

      // Disable the "Buy Ticket" button if the showing is sold out
      if (tickets.innerHTML === '0') {
        document.getElementById('buy-ticket').disabled = true;
      }
    });
});

// Attach the event listener to the parent element
document.getElementById('movie-details').addEventListener('click', event => {
    // Check if the event was triggered by the title element
    if (event.target.id === 'title') {
      // Retrieve the title's content
      const title = event.target.innerHTML;
      // Update the innerHTML of the relevant elements in the movie details
      document.getElementById('title').innerHTML = 'Title: ' + title;
      document.getElementById('poster').src = '';
      document.getElementById('runtime').innerHTML = '';
      document.getElementById('showtime').innerHTML = '';
      document.getElementById('tickets').innerHTML = '';
    }
  });
  
